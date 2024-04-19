import React from "react";
interface ButtonSkeletonProps {
  width: number;
  height: number;
  animatePulse: boolean;
  borderRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
}

export const ButtonSkeleton: React.FC<ButtonSkeletonProps> = ({
  width,
  height,
  animatePulse,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}) => {
  return (
    <>
      {[
        width,
        height,
        animatePulse,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      ]}
    </>
  );
};
