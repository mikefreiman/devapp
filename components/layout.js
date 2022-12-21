import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
    return (
      <>
      <div className={styles.app}>
        <div className={styles.pageWrap}>
            <main className={styles.gridCenter}>{children}</main>
        </div>
      </div>
      </>
    )
  }
