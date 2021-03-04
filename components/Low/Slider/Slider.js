import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useDrag from "./useDrag"
import SliderDot from './SliderDot';
import SliderMark from './SliderMark';
import { useCurrentState, useTheme } from '@geist-ui/react';

function withDefaults(component, defaultProps) {
    component.defaultProps = defaultProps;
    return component;
};

const defaultProps = {
    initialValue: 0,
    step: 1,
    min: 0,
    max: 100,
    marks: null,
    disabled: false,
    showMarkers: false,
    className: ''
};

const getRefWidth = elementRef => {
    if (!elementRef || !elementRef.current) return 0;
    const rect = elementRef.current.getBoundingClientRect();
    return rect.width || rect.right - rect.left;
};

const getValue = (max, min, step, offsetX, railWidth) => {
    if (offsetX < 0) return min;
    if (offsetX > railWidth) return max;
    const widthForEachStep = railWidth / (max - min) * step;
    if (widthForEachStep <= 0) return min;
    const slideDistance = Math.round(offsetX / widthForEachStep) * step + min;
    return Number.isInteger(slideDistance) ? slideDistance : Number.parseFloat(slideDistance.toFixed(1));
};

const Slider = ({
        disabled,
        step,
        max,
        min,
        marks,
        initialValue,
        value: customValue,
        onChange,
        className,
        showMarkers,
        ...props
    }) => {
        const theme = useTheme();
        const [value, setValue] = useState(initialValue);
        const [, setSliderWidth, sideWidthRef] = useCurrentState(0);
        const [, setLastDargOffset, lastDargOffsetRef] = useCurrentState(0);
        const [isClick, setIsClick] = useState(false);
        const sliderRef = useRef(null);
        const dotRef = useRef(null);
        const currentRatio = useMemo(() => (value - min) / (max - min) * 100, [value, max, min]);

        const setLastOffsetManually = val => {
            const width = getRefWidth(sliderRef);
            const shouldOffset = (val - min) / (max - min) * width;
            setLastDargOffset(shouldOffset);
        };

        const updateValue = useCallback(offset => {
            const currentValue = getValue(max, min, step, offset, sideWidthRef.current);
            setValue(currentValue);
            onChange && onChange(currentValue);
        }, [max, min, step, sideWidthRef]);

        const dragHandler = event => {
            if (disabled) return;
            const currentOffset = event.currentX - event.startX;
            const offset = currentOffset + lastDargOffsetRef.current;
            updateValue(offset);
        };

        const dragStartHandler = () => {
            setIsClick(false);
            setSliderWidth(getRefWidth(sliderRef));
        };

        const dragEndHandler = event => {
            if (disabled) return;
            const offset = event.currentX - event.startX;
            const currentOffset = offset + lastDargOffsetRef.current;
            const boundOffset = currentOffset < 0 ? 0 : Math.min(currentOffset, sideWidthRef.current);
            setLastDargOffset(boundOffset);
        };

        const clickHandler = event => {
            if (disabled) return;
            if (!sliderRef || !sliderRef.current) return;
            setIsClick(true);
            setSliderWidth(getRefWidth(sliderRef));
            const clickOffset = event.clientX - sliderRef.current.getBoundingClientRect().x;
            setLastDargOffset(clickOffset);
            updateValue(clickOffset);
        };

        useDrag(dotRef, dragHandler, dragStartHandler, dragEndHandler);
        useEffect(() => {
            if (customValue === undefined) return;
            if (customValue === value) return;
            setValue(customValue);
        }, [customValue, value]);
        useEffect(() => {
            initialValue && setLastOffsetManually(initialValue);
        }, []);
        return (
            <div
            className={`slider ${className}`}
            onClick={clickHandler}
            ref={sliderRef}
            {...props}>
            <SliderDot disabled={disabled} ref={dotRef} isClick={isClick} left={currentRatio}>
                {Array.isArray(marks) ? marks[value - 1] : value}
            </SliderDot>
            {showMarkers && <SliderMark max={max} min={min} step={step} marks={marks} />}
            <style jsx>{`
                .slider {
                width: 100%;
                height: 1.25rem;
                border-radius: 50px;
                background-color: ${disabled
                    ? theme.palette.accents_2
                    : "transparent"};
                border: 1px solid ${theme.palette.accents_8};
                position: relative;
                cursor: ${disabled ? 'not-allow' : 'pointer'};
                }
            `}</style>
            </div>
        )
}

export default withDefaults(Slider, defaultProps)