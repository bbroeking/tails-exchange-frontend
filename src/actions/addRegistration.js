import { db } from '../firebase'
import { collection, addDoc, Timestamp, serverTimestamp } from 'firebase/firestore'
import { useCallback } from 'react';

export const addRegistration = async(name, symbol, decimals, address, coingeckoUrl) => {
    try {
        const docRef = await addDoc(collection(db, "token-registration"), {
            name,
            symbol, 
            decimals,
            address,
            coingeckoUrl,
            timestamp: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};