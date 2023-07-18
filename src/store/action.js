
import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const fetchFirestoreData = createAsyncThunk(
  'firestore/fetchData',
  async () => {
    try {
      const db = getFirestore();
      const colRef = collection(db, 'cardsinfo');
      const querySnapshot = await getDocs(colRef);
      return querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    } catch (error) {
      console.error('Error fetching Firestore data:', error);
      throw error;
    }
  }
);
