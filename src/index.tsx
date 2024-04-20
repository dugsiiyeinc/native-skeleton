import React from "react";

/**
 * Interface for properties of the NativeSkeleton component.
 *
 * @interface NativeSkeletonProps
 * @param {number} width - The width of the skeleton loader.
 * @param {number} height - The height of the skeleton loader.
 * @param {boolean} animatePulse - If true, the skeleton will have a pulsing animation.
 */
interface NativeSkeletonProps {
  width: number;
  height: number;
  animatePulse: boolean;
}

/**
 * NativeSkeleton is a React functional component that displays a skeleton screen placeholder.
 * This component is commonly used to indicate that text content is loading. It takes width,
 * height, and a boolean for enabling animation as props.
 *
 * @param {NativeSkeletonProps} props The properties for configuring the NativeSkeleton.
 * @returns {JSX.Element} The React component displaying the skeleton.
 */
export const NativeSkeleton = ({
  width,
  height,
  animatePulse,
}: NativeSkeletonProps): JSX.Element => {
  return (
    <>
      {/* Display skeleton placeholder based on props */}
      {[width, height, animatePulse].toString()}
    </>
  );
};

export default NativeSkeleton