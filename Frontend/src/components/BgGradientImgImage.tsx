import { FunctionComponent } from "react";
import styles from "./BgGradientImgImage.module.css";

export type BgGradientImgImageType = {
  className?: string;
};

const BgGradientImgImage: FunctionComponent<BgGradientImgImageType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.bgGradientImgIcon, className].join(" ")}
      loading="lazy"
      alt=""
    />
  );
};

export default BgGradientImgImage;
