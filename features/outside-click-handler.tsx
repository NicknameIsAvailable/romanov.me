import { ReactNode, useEffect, useRef } from "react";

interface OutsideClickHandlerProps {
    onOutsideClick: () => void;
    children: ReactNode;
}

export const OutsideClickHandler: React.FC<OutsideClickHandlerProps> = ({ children, onOutsideClick }) => {    
    const wrapperRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          onOutsideClick();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onOutsideClick]);
  
    return <div ref={wrapperRef}>{children}</div>;
  };