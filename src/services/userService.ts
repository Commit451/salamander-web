import {collection, doc, getDoc, getDocs, updateDoc} from 'firebase/firestore';
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

export const getUserFromFirestore = async (userId: string): Promise<User> => {
    try {
        console.log('Attempting to get user from Firestore with ID:', userId);

        if (!userId || typeof userId !== 'string') {
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