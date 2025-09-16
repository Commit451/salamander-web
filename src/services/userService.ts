import {collection, doc, getDoc, getDocs, updateDoc, query, where, writeBatch} from 'firebase/firestore';
import {db} from '../config/firebase';

export interface User {
    id: string;
    displayName?: string;
    email: string;
    tier: 'free' | 'premium' | 'unlimited';
    messagesRemaining: number;
    lastMessageReset?: Date;
    picture?: string;
}

export interface Plan {
    id: string;
    messageLimit: number;
    name: string;
    priceCurrency: string;
    priceInCents: number;
    runnerLimit: number;
    tagline: string;
}

export interface Runner {
    id: string;
    userId: string;
    name: string;
    status: 'online' | 'offline' | 'running';
    lastSeen?: Date;
    createdAt: Date;
    directory?: string;
    pendingCommand?: string;
    machineId?: string;
    machineName?: string;
}

export const getUserFromFirestore = async (userId: string): Promise<User> => {
    try {
        console.log('Attempting to get user from Firestore with ID:', userId);

        if (!userId) {
            throw new Error(`Invalid userId: ${userId}`);
        }

        const userDoc = await getDoc(doc(db, 'users', userId));

        if (userDoc.exists()) {
            const data = userDoc.data();
            console.log('User found in Firestore:', {id: userId, email: data.email});
            return {
                id: userId,
                displayName: data.displayName,
                email: data.email,
                tier: data.tier || 'free',
                messagesRemaining: data.messagesRemaining || 0,
                lastMessageReset: data.lastMessageReset?.toDate(),
                picture: data.picture,
            };
        } else {
            console.log('User not found in Firestore, returning null for userId:', userId);
            throw Error("User not found in Firestore");
        }
    } catch (error) {
        console.error('Error getting user from Firestore:', {
            userId,
            error,
            errorMessage: error instanceof Error ? error.message : 'Unknown error',
            errorCode: (error as any)?.code,
            errorDetails: (error as any)?.details
        });
        throw error;
    }
};

export const updateUserInFirestore = async (userId: string, updates: Partial<User>): Promise<void> => {
    try {
        await updateDoc(doc(db, 'users', userId), {
            ...updates,
            updatedAt: new Date(),
        });
    } catch (error) {
        console.error('Error updating user in Firestore:', error);
        throw error;
    }
};

export const getPlansFromFirestore = async (): Promise<Plan[]> => {
    try {
        const plansCollection = collection(db, 'plans');
        const plansSnapshot = await getDocs(plansCollection);

        const plans: Plan[] = [];
        plansSnapshot.forEach((doc) => {
            const data = doc.data();
            plans.push({
                id: doc.id,
                messageLimit: data.messageLimit,
                name: data.name,
                priceCurrency: data.priceCurrency,
                priceInCents: data.priceInCents,
                runnerLimit: data.runnerLimit,
                tagline: data.tagline,
            });
        });

        return plans;
    } catch (error) {
        console.error('Error getting plans from Firestore:', error);
        throw error;
    }
};

export const getRunnersFromFirestore = async (userId: string): Promise<Runner[]> => {
    try {
        const runnersCollection = collection(db, 'runners');
        const q = query(runnersCollection, where('userId', '==', userId));
        const runnersSnapshot = await getDocs(q);

        const runners: Runner[] = [];
        runnersSnapshot.forEach((doc) => {
            const data = doc.data();
            runners.push({
                id: doc.id,
                userId: data.userId,
                name: data.name || 'Unnamed Runner',
                status: data.online ? 'online' : 'offline',
                lastSeen: data.lastUsed?.toDate(),
                createdAt: data.createdAt?.toDate() || new Date(),
                directory: data.directory,
                pendingCommand: data.pendingCommand,
                machineId: data.machineId,
                machineName: data.machineName,
            });
        });

        return runners.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } catch (error) {
        console.error('Error getting runners from Firestore:', error);
        throw error;
    }
};

export const updateRunnerInFirestore = async (runnerId: string, updates: Partial<Runner>): Promise<void> => {
    try {
        await updateDoc(doc(db, 'runners', runnerId), {
            ...updates,
            updatedAt: new Date(),
        });
    } catch (error) {
        console.error('Error updating runner in Firestore:', error);
        throw error;
    }
};

export const deleteRunnerFromFirestore = async (runnerId: string): Promise<void> => {
    try {
        const batch = writeBatch(db);

        // Delete all messages in the subcollection
        const runnerDocRef = doc(db, 'runners', runnerId);
        const messagesCollectionRef = collection(runnerDocRef, 'messages');
        const messagesSnapshot = await getDocs(messagesCollectionRef);

        for (const messageDoc of messagesSnapshot.docs) {
            batch.delete(messageDoc.ref);
        }

        // Delete the runner document
        batch.delete(runnerDocRef);

        // Commit the batch
        await batch.commit();
    } catch (error) {
        console.error('Error deleting runner from Firestore:', error);
        throw error;
    }
};