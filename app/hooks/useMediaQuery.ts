'use client'
// hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Asegurarse de que el código se ejecute solo en el cliente
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);

      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Establecer el estado inicial
      setMatches(mediaQueryList.matches);

      // Añadir el listener
      mediaQueryList.addEventListener('change', listener);

      // Limpiar el listener al desmontar el componente
      return () => {
        mediaQueryList.removeEventListener('change', listener);
      };
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;