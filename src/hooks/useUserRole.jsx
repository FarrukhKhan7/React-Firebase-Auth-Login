// hooks/useUserRole.js
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';


export default function useUserRole() {
  const user = auth.currentUser;
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRole() {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setRole(userDoc.data()?.role);
      }
      setLoading(false);
    }
    fetchRole();
  }, [user?.uid]); // Track UID for stability

  return { role, loading };
}
