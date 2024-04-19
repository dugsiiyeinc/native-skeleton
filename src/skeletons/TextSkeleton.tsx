import React from "react";

interface TextSkeletonProps {
  width: number;
  height: number;
  animatePulse: boolean;
}

export const TextSkeleton: React.FC<TextSkeletonProps> = ({
  width,
  height,
  animatePulse,
}) => {
  return <>
  {[width, height, animatePulse]}
  </>;
};
