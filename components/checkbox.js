import styles from '../styles/Checkbox.module.css'
export default function Checkbox() {
    return (
        <>
            <div className="section">
                <h1 className="text-sky-400 text-5xl">Hello World</h1>
                <label id="toggleTheme" className={styles.toggleTheme} title="Toggles normal & enhanced theme" aria-label="auto" aria-live="polite">
                    <input type="checkbox" id="themeSwitch" />
                    <span className={styles.themeSlider}></span>
                </label>
            </div>
        </>
    )
}
