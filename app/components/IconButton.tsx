'use client';
import { memo } from 'react';

interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
    title: string | undefined;
}
const IconButton: React.FC<IconButtonProps> = ({
    icon,
    onClick,
    className = 'cursor-pointer bg-background border-1 md:border-0 relative w-15 h-15 p-3 text-xl md:w-12 md:h-12 md:text-sm md:bg-transparent rounded-full flex items-center justify-center',
    ariaLabel = undefined,
    title = ariaLabel || undefined,
}) => {

    return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel || title}
      title={title}
    >
        {icon}
    </button>
  );
}

export default memo(IconButton);
