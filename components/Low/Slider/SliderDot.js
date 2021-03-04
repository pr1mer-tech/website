import { useTheme } from '@geist-ui/react';
import React from 'react';

function withDefaults(component, defaultProps) {
    component.defaultProps = defaultProps;
    return component;
};
  

const defaultProps = {
    left: 0,
    disabled: false,
    isClick: false
};
const SliderDot = React.forwardRef(({
            children,
            disabled,
            left,
            isClick
        }, ref) => {
const theme = useTheme();
return (
    <div className={`dot ${disabled ? 'disabled' : '' } ${isClick ? 'click' : '' }`} ref={ref}>
        <div className="content">{children}</div>
        <style jsx>{` 
        .dot {
            position: absolute;
            left: ${left}%;
            top: 0;
            height: 1.25rem;
            width: 1.25rem;
            transform: scale(1.5) translateX(-25%);
            line-height: 1.25rem;
            border-radius: 0.625rem;
            user-select: none;
            font-weight: 700;
            font-size: 0.75rem;
            z-index: 100;
            background-color: ${theme.palette.success};
            color: ${theme.palette.foreground};
            text-align: center;
            padding: 0 calc(0.86 * ${theme.layout.gapHalf});
          }
          .dot.disabled {
            cursor: not-allowed !important;
            background-color: ${theme.palette.accents_2};
            color: ${theme.palette.accents_4};
          }
          .dot.click {
            transition: all 200ms ease;
          }
          .dot:hover {
            cursor: grab;
          }
          .dot:active {
            cursor: grabbing;
          }
          .content {
              position: absolute;
              top: 100%;
              transform: translateX(-50%);
          }
        `}</style>
    </div>
    )
})

export default withDefaults(SliderDot, defaultProps)