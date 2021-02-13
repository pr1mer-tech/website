export default function SectionNumber({ n, name, ...props }) {
    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      }

    return <div className="section" {...props} >
        <div className="number">{ pad(n, 2) }</div>
        <div className="name">{ name }</div>
        <style jsx>{`
        .section {
            position: relative;
            display: flex;
            align-items: center;
            font-family: var(--normalFont);
            text-align: center;
            height: 172px;
        }
        .number {
            position: absolute;
            font-style: normal;
            font-weight: 900;
            font-size: 8.5em;
            line-height: 9em;
            letter-spacing: 0.1em;
            -webkit-text-stroke: 1px var(--text-color);
            color: transparent;
        }
        .name {
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
            margin-left: 15px;
        }
        @media (max-height: 600px) {
            .number {
                font-size: 6em;
                line-height: 6em;
            }
            .name {
                font-size: 16px;
            }
            .section {
                height: 70px;
            }
        }
        `}</style>
    </div>
}