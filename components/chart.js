import styles from '../styles/Chart.module.css'
export default function Chart() {
    return (
        <>
        <div className="aspect-square w-full max-w-[400px] m-auto">
            <svg className="w-full h-full rounded-full" viewBox='0 0 32 32'>
                <g id={styles.circles} stroke-width='10'>
                    <g style={{ '--order': '1' }}>
                    <circle className="stroke-rose-600 dark:stroke-rose-500" cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='0'>
                    </circle>
                    </g>
                    <g style={{ '--order': '2' }}>
                    <circle className="stroke-orange-500 dark:stroke-orange-400" cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-17'>
                    </circle>
                    </g>
                    <g style={{ '--order': '3'}}>
                    <circle className="stroke-yellow-300" cx='16' cy='16' r='16' stroke-dasharray='16 100' stroke-dashoffset='-34'></circle>
                    </g>
                    <g style={{ '--order': '4'}}>
                    <circle className="stroke-green-600" cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-50'></circle>
                    </g>
                    <g style={{ '--order': '5'}}>
                    <circle className="stroke-blue-700" cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-67'></circle>
                    </g>
                    <g style={{ '--order': '6'}}>
                    <circle className="stroke-purple-700 dark:stroke-purle-600" cx='16' cy='16' r='16' stroke-dasharray='17 100' stroke-dashoffset='-84'></circle>
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
