import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export interface User {
  id: string;
  displayName?: string;
  email: string;
  tier: 'free' | 'premium' | 'unlimited';
  messagesRemaining: number;
  lastMessageReset?: Date;
  picture?: string;
}

export const getUserFromFirestore = async (userId: string): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    
    if (userDoc.exists()) {
      const data = userDoc.data();
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
      return null;
    }
  } catch (error) {
    console.error('Error getting user from Firestore:', error);
    throw error;
  }
};

export const createUserInFirestore = async (user: User): Promise<void> => {
  try {
    await setDoc(doc(db, 'users', user.id), {
      displayName: user.displayName,
      email: user.email,
      tier: user.tier,
      messagesRemaining: user.messagesRemaining,
      lastMessageReset: user.lastMessageReset,
      picture: user.picture,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error('Error creating user in Firestore:', error);
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