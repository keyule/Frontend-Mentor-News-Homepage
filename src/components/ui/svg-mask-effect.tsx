import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface MaskContainerProps {
  children?: React.ReactNode;
  revealText?: React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}

export const MaskContainer: React.FC<MaskContainerProps> = ({
  children,
  revealText,
  size = 5,
  revealSize = 200,
  className,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement>(null);

  const getCssVariableValue = (variableName: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || '';
  };

  const white = getCssVariableValue('--white') || '#ffffff'; // Fallback to #ffffff if --white is not defined
  const slate900 = getCssVariableValue('--slate-900') || '#111827'; // Fallback to #111827 if --slate-900 is not defined

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', updateMousePosition as any);
      return () => {
        currentContainer.removeEventListener('mousemove', updateMousePosition as any);
      };
    }
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn('h-screen relative', className)}
      animate={{
        backgroundColor: isHovered ? slate900 : white,
      }}
      style={{ backgroundColor: isHovered ? slate900 : white }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-black [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x ? mousePosition.x - maskSize / 2 : 0}px ${mousePosition.y ? mousePosition.y - maskSize / 2 : 0}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-4xl mx-auto font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
