import { useEffect, useState } from 'react';
import styles from './profile.module.scss'
import B from './B';

function A() {

    const [count, setCount] = useState(1);

    const handleCount = () => {
        setCount(count + 1)
    }


    return ( 
        <div className={styles.container}>
            <div className={styles.profile}>
                    Bài 2
            </div>
            <div>
                <ul>
                    <li>Số lần nhấp chuột: {count}</li>
                    <li>
                        <B onIncrease={handleCount}/>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default A;