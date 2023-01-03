import styles from '../styles/Chart.module.css'
export default function Chart() {
    return (
        <>
        <div className={styles.square}>
            <svg id={styles.designThinking} viewBox='0 0 32 32'>
                <g id={styles.circles} stroke-width='10'>
                    <g style={{ '--order': '1' }}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='0' stroke='#f00f00'>
                    </circle>
                    </g>
                    <g style={{ '--order': '2' }}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-17' stroke='#f43780'>
                    </circle>
                    </g>
                    <g style={{ '--order': '3'}}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='16 100' stroke-dashoffset='-34' stroke='#ffe347'></circle>
                    </g>
                    <g style={{ '--order': '4'}}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-50' stroke='blue'></circle>
                    </g>
                    <g style={{ '--order': '5'}}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-67' stroke='green'></circle>
                    </g>
                    <g style={{ '--order': '6'}}>
                    <circle cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-84' stroke='purple'></circle>
                    </g>
                </g>
                <text x="16" y="15" className={styles.text} text-anchor="middle">
                <tspan dx="0" dy="0">DESIGN</tspan>
                <tspan dx="16" x="0" dy="2em">THINKING</tspan>
                </text>
            </svg>
        </div>
        </>
    )
}
