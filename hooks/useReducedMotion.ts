import { useMediaQuery } from './useMediaQuery';

/**
 * Hook to check if user prefers reduced motion
 * Respects the prefers-reduced-motion media query for accessibility
 * @returns boolean indicating if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
