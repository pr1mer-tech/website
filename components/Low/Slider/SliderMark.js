import { useTheme } from '@geist-ui/react'
import React, { useMemo } from 'react'

const getMarks = (min, max, step) => {
    const value = max - min
    const roundFunc = !(value % step) ? Math.floor : Math.ceil
    const count = roundFunc(value / step) - 1
    if (count >= 99) return []

    return [...new Array(count)].map((_, index) => (step * (index + 1) * 100) / value)
}

const SliderMark = ({ step, max, min }) => {
    const theme = useTheme()
    const Marks = useMemo(() => getMarks(min, max, step), [min, max, step])
    return (
    <>
        {Marks.map((val, index) => (
            <span key={`${val}-${index}`} style={{ left: `${val}%` }} />
        ))}
        <style jsx>{`
        span {
            position: absolute;
            width: 2px;
            height: 100%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: ${theme.palette.background};
        }
        `}</style>
    </>
    )
}

export default SliderMark