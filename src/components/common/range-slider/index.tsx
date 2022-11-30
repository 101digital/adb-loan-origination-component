import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
// @ts-ignore
import Slider from 'rn-range-slider';
import Thumb from './thumb';
import Rail from './rail';
import RailSelected from './rail-selected';
import ThumbLabel from './thumb-label';

export type RangeSliderProps = {
  min: number;
  max: number;
  step: number;
  initLow?: number;
  initHigh?: number;
  disableRange?: boolean;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
  floatingLabel?: boolean;
  onValueChanged: (low: number, high: number, fromUser: boolean) => void;
  onTouch?: (moving: boolean) => void;
  labelFormat?: string;
  labelStyle?: StyleProp<TextStyle>;
};

const RangeSlider = forwardRef((props: RangeSliderProps, ref) => {
  const {
    min,
    max,
    step,
    initLow,
    initHigh,
    style,
    onValueChanged,
    disableRange,
    disable,
    onTouch,
    floatingLabel,
    labelStyle,
    labelFormat,
  } = props;

  const [low, setLow] = useState(initLow);
  const [high, setHigh] = useState(initHigh);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderThumbLabel = useCallback(() => {
    return <ThumbLabel value={low ?? 0} labelFormat={labelFormat} labelStyle={labelStyle} />;
  }, [low]);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const handleValueChange = useCallback((_low, _high, fromUser) => {
    setLow(_low);
    setHigh(_high);
    onValueChanged(_low, _high, fromUser);
  }, []);

  const updateLowValue = (value: number) => {
    setLow(value);
    onValueChanged(value, high ?? 0, false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        updateLowValue: updateLowValue,
      };
    },
    []
  );

  return (
    <Slider
      style={style}
      min={min}
      max={max}
      low={low}
      high={high}
      step={step}
      renderThumb={floatingLabel ? renderThumbLabel : renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      disableRange={disableRange}
      disabled={disable}
      floatingLabel={false}
      onValueChanged={handleValueChange}
      onTouchStart={() => onTouch && onTouch(true)}
      onTouchEnd={() => onTouch && onTouch(false)}
    />
  );
});

RangeSlider.defaultProps = {
  floatingLabel: false,
  disableRange: false,
  disable: false,
};

export default RangeSlider;
