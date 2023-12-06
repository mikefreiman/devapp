import styles from '../styles/Layout.module.css'
export default function Layout({ children }) {
    return (
      <div className="flex flex-col items-center py-0 2xl:py-6">
        <div className="page-wrap">
            <main className={styles.gridCenter}>{children}</main>
        </div>
      </div>
    )
  }
