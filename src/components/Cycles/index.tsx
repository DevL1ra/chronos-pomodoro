import styles from './styles.module.css';

export function Cycles() {

    return (
        <div className={styles.cycles}>
            
            <span> Ciclos: </span>

            <div className={styles.cycloDots}>
                <span className={` ${styles.cycloDot} ${styles.workTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.shortBreakTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.workTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.shortBreakTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.workTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.shortBreakTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.workTime} `}></span>
                <span className={` ${styles.cycloDot} ${styles.longBreakTime} `}></span>
                
            </div>
        </div>
    );
}