import React from "react";

/**
 * Interface for properties of the NativeSkeleton component.
 *
 * @interface NativeSkeletonProps
 * @param {number} width - The width of the skeleton loader.
 * @param {number} height - The height of the skeleton loader.
 * @param {boolean} animatePulse - If true, the skeleton will have a pulsing animation.
 * @param {string} borderRadius - CSS value for the border-radius to apply to all corners.
 * @param {string} borderTopLeftRadius - CSS value for the border-top-left-radius.
 * @param {string} borderTopRightRadius - CSS value for the border-top-right-radius.
 * @param {string} borderBottomLeftRadius - CSS value for the border-bottom-left-radius.
 * @param {string} borderBottomRightRadius - CSS value for the border-bottom-right-radius.
 * @param {boolean} circle - If true, the skeleton will be displayed as a circle.
 * @param {React.CSSProperties} style - Inline styles to apply to the skeleton.
 * @param {string} className - Additional CSS class names to apply to the skeleton.
 */
interface NativeSkeletonProps {
  width: number;
  height: number;
  animatePulse?: boolean;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  circle?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * NativeSkeleton is a React functional component that displays a skeleton screen placeholder.
 * This component is commonly used to indicate that text content is loading. It supports various
 * customization options like border radii, circle shapes, inline styles, and CSS classes.
 *
 * @param {NativeSkeletonProps} props The properties for configuring the NativeSkeleton.
 * @returns {JSX.Element} The React component displaying the skeleton.
 */
export const NativeSkeleton = ({
  width,
  height,
  animatePulse = true,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  circle,
  style,
  className,
}: NativeSkeletonProps): JSX.Element => {
  const styleSkeleton: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: circle ? "50%" : `${borderRadius}px` || "",
    borderTopLeftRadius: circle ? "0" : `${borderTopLeftRadius}px` || "",
    borderTopRightRadius: circle ? "0" : `${borderTopRightRadius}px` || "",
    borderBottomLeftRadius: circle ? "0" : `${borderBottomLeftRadius}px` || "",
    borderBottomRightRadius: circle
      ? "0"
      : `${borderBottomRightRadius}px` || "",

    background: `linear-gradient(to right, #b3b3b3, #808080)`,
  };

  return (
    <>
      <style>
        {`
         @keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
        `}
      </style>
      <div
        style={{
          ...styleSkeleton,
          ...style,
          animation: animatePulse
            ? "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            : "none",
        }}
        className={className}
      >
        Native skeleton
      </div>
      ;
    </>
  );
};

export default NativeSkeleton;
