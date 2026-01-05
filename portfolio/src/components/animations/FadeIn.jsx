import { useState, useEffect, useRef} from 'react';

//children e tot continutul JSX pe care il contine FadeIn  <FadeIn> </FadeIn>
const FadeIn = ({children, delay=0, duration=500, threshold=0.1 }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  
  //IntersectionObserver are nevoie de un element DOM nu de continut JSX de asta folosesc ref
  //threshold parametru al inter.. care imi spune ca atunci cand vede ..% din element porneste animatia
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", 
      }
    );

    //atasez observerul la element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, isVisible]);

  

  return (
    <div  ref={elementRef} className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
    style = {{
      animationDelay: isVisible ? `${delay}ms` : '0ms',
      animationDuration: `${duration}ms`,
      animationFillMode: 'both'
    }}>
     {children}
    </div>
  )
}

export default FadeIn