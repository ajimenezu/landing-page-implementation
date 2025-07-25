'use client'

import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);

      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener('change', listener);

      return () => {
        mediaQueryList.removeEventListener('change', listener);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;