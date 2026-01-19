"use client"

import dynamic from 'next/dynamic';
import { CSSProperties } from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface AnimationLottieProps {
  animationPath: Record<string, unknown>;
}

const AnimationLottie = ({ animationPath }: AnimationLottieProps) => {
  const defaultOptions: {
    loop: boolean;
    autoplay: boolean;
    animationData: Record<string, unknown>;
    style: CSSProperties;
  } = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;