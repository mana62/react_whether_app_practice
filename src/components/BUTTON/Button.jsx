export styles from "./Button.module.css"

export function Button({childeren}) {
    return <button type="button" className={styles.button}>{childeren}</button>
}