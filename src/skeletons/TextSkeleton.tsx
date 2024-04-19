import React from "react";

/**
 * Interface for properties of the TextSkeleton component.
 * 
 * @interface TextSkeletonProps
 * @param {number} width - The width of the skeleton loader.
 * @param {number} height - The height of the skeleton loader.
 * @param {boolean} animatePulse - If true, the skeleton will have a pulsing animation.
 */
interface TextSkeletonProps {
  width: number;
  height: number;
  animatePulse: boolean;
}

/**
 * TextSkeleton is a React functional component that displays a skeleton screen placeholder.
 * This component is commonly used to indicate that text content is loading. It takes width,
 * height, and a boolean for enabling animation as props.
 * 
 * @param {TextSkeletonProps} props The properties for configuring the TextSkeleton.
 * @returns {JSX.Element} The React component displaying the skeleton.
 */
export const TextSkeleton = ({
  width,
  height,
  animatePulse,
}: TextSkeletonProps): JSX.Element => {
  return <>
    {/* Display skeleton placeholder based on props */}
    {[width, height, animatePulse].toString()}
  </>;
};
