import { useState } from 'react';
import styles from '../styles/Checkbox.module.css';

export default function Card() {
    const [design, setDesign] = useState(false);

    function handleChange(e) {
        setDesign(e.target.checked);
    }

    return (
        <>
            <Checkbox checked={design} onChange={handleChange}/>
            <div className={`${styles.hotbox} ${design ? styles.enhanced : ''}`}></div>
        </>
    );}

function Checkbox({checked, onChange}) {
    return (
        <div className="section">
            <label 
                className={styles.toggleTheme} 
                title="Toggles standard & enhanced theme" 
                aria-label="auto" 
                aria-live="polite">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    id="themeSwitch"
                />
                <span className={styles.themeSlider}></span>
            </label>
            <p>Design Mode is {checked ? 'Enhanced' : 'Standard'}</p>
        </div>
    );
}
