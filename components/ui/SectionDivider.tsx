'use client';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'angle';
  flip?: boolean;
  className?: string;
  fromColor?: string;
  toColor?: string;
}

export default function SectionDivider({
  variant = 'wave',
  flip = false,
  className = '',
  fromColor,
  toColor,
}: SectionDividerProps) {
  const fill = toColor || 'currentColor';
  const transform = flip ? 'scaleY(-1)' : undefined;

  if (variant === 'wave') {
    return (
      <div className={`w-full overflow-hidden leading-[0] text-gray-50 dark:text-dark-surface ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,87.42,127.05,74.94,321.39,56.44Z"
            fill={fill}
            className="fill-[#faf9f7] dark:fill-[#0a0a08]"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'curve') {
    return (
      <div className={`w-full overflow-hidden leading-[0] text-gray-50 dark:text-dark-surface ${className}`} style={{ transform }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill={fill}
            className="fill-[#faf9f7] dark:fill-[#0a0a08]"
          />
        </svg>
      </div>
    );
  }

  // angle
  return (
    <div className={`w-full overflow-hidden leading-[0] text-gray-50 dark:text-dark-surface ${className}`} style={{ transform }}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
        <path
          d="M1200 120L0 16.48V0h1200v120z"
          fill={fill}
          className="fill-[#faf9f7] dark:fill-[#0a0a08]"
        />
      </svg>
    </div>
  );
}
