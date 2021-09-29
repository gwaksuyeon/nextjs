import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface Props {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: "cover" | "contain" | "fill";
}

const Image: React.FC<Props> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  objectFit = "cover",
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect={"opacity"}
      placeholder={
        <div style={{ width: "100%", height: "80%", background: "#e9e9e9" }} />
      }
      style={{ objectFit }}
    />
  );
};

export default Image;
