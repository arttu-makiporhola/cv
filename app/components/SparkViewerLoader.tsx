'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useState } from 'react';
import { Vector3 } from 'three';

const SparkViewer = dynamic(() => import('./SparkViewer'), { ssr: false });

interface Props {
  splatUrl: string;
  className?: string;
  children?: ReactNode;
  position?: Vector3;
  rotation?: Vector3;
  scale?: number;
  maxRotation?: number;
}

export default function SparkViewerLoader({ children, splatUrl, className, position, rotation, scale, maxRotation }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-full w-full">
      <div className='print:hidden h-full w-full z-5 relative'>
        <SparkViewer
          splatUrl={splatUrl}
          className={className}
          onLoad={() => setIsLoaded(true)}
          position={position}
          rotation={rotation}
          scale={scale}
          maxRotation={maxRotation}
        />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-4">
        <div className={`w-full h-full transition-opacity duration-500 print:opacity-100 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
