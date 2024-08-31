import styles from './profile.module.scss'

function B({onIncrease}) {
    return ( 
        <div>
            <button className={styles.btn} onClick={onIncrease}>Click me!</button>
        </div>
     );
}

export default B;