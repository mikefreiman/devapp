import { useState } from 'react';
import Checkbox from './checkbox';
import styles from '../styles/Card.module.css';

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
    );
}
