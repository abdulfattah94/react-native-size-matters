import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.2) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size, factor = 0.2) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;
