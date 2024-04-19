import React from "react";
interface ShapeSkeletonProps {
  width: number;
  height: number;
  animatePulse: boolean;
  borderRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
}

export const ShapeSkeleton: React.FC<ShapeSkeletonProps> = ({
  width,
  height,
  animatePulse,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}) => {
  return <></>;
};
