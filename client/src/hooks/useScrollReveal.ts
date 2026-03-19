import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('scroll-reveal');
        element.style.animationPlayState = 'running';
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return elementRef;
}
