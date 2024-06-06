import { useState, useEffect } from 'react';
import { collection, DocumentData, onSnapshot, query } from '@firebase/firestore';
import { db } from '@/lib/firebase';

interface Channel {
  id: string;
  channel: DocumentData;
}

const useChannels = (): Channel[] => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const q = query(collection(db, 'channels'));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const channelsData: Channel[] = [];
      querySnapshot.forEach((doc) => {
        channelsData.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setChannels(channelsData);
    });

    return () => unsubscribe();
  }, []);

  return channels;
};

export default useChannels;
