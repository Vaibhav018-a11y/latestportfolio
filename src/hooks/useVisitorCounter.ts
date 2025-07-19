import { useState, useEffect } from 'react';

export const useVisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Using a simple localStorage approach for demo
        const currentCount = localStorage.getItem('visitorCount');
        if (currentCount) {
          const count = parseInt(currentCount, 10) + 1;
          setVisitorCount(count);
          localStorage.setItem('visitorCount', count.toString());
        } else {
          setVisitorCount(1);
          localStorage.setItem('visitorCount', '1');
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setVisitorCount(1);
      }
    };

    fetchVisitorCount();
  }, []);

  return visitorCount;
};