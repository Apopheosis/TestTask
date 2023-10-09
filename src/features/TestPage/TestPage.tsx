import styles from './TestPage.module.scss'
export function TestPage() {
    return (
        <div className={styles.dialogContainer}>
            <div className={styles.dialog}>
                <div className={styles.dialog__header}>
                    <div className={styles['dialog__header-title-container']}>
                        <div className={styles['dialog__header-title']}>
                            Ссъешь ещё этих мягких французских булок, да выпей чаю
                        </div>
                        <div className={styles['dialog__header-subtitle']}>
                            Съешь ещё этих мягких французских булок, да выпей чаю
                        </div>
                    </div>
                    <button className={styles['dialog__header-button']}>
                        Кнопка закрытия
                    </button>
                </div>
                <div className={styles.dialog__content}>
                    <div className={styles['dialog__content-block_left']}>
                        Left
                    </div>
                    <div className={styles['dialog__content-block_right']}>
                        <div className={styles.content}>
                            <span>Top</span>
                            <span>Center</span>
                            <span>Bottom</span>
                        </div>
                    </div>
                </div>
                <div className={styles.dialog__footer}>
                    Ссъешь ещё этих мягких французских булок, да выпей чаю<br/>
                    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<br/>
                    Ссъешь ещё этих мягких французских булок, да выпей чаю
                </div>
            </div>
        </div>
    )
}