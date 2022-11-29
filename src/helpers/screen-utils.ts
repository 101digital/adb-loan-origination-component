import { Platform, StatusBar, Dimensions, PixelRatio, NativeScrollEvent } from 'react-native';

const { height, width } = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

const deviceHeight =
  isIphoneX() || Platform.OS === 'android' ? standardLength - (offset || 0) : standardLength;

export function withHeightPercent(percent: number) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(heightPercent));
}

export function withHeight(size: number, standardScreenHeight = 812) {
  const heightPercent = (size * deviceHeight) / standardScreenHeight;
  return Math.round(PixelRatio.roundToNearestPixel(heightPercent));
}

export function withWidthPercent(percent: number) {
  const widthPercent = (percent * width) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(widthPercent));
}

export function withWidth(size: number, standardScreenWidth = 375) {
  const widthPercent = (size * width) / standardScreenWidth;
  return Math.round(PixelRatio.roundToNearestPixel(widthPercent));
}

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export function isCloseToBottom({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) {
  const paddingToBottom = 30;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
}

export const statusBarHeight = Platform.select({
  ios: isIphoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});
