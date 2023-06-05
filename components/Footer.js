import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/the-pages-media-logo.svg" alt="The Pages Media Logo" className={styles.logo} />
      </footer>
    </>
  )
}
