import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header isLogged />
      <main className={styles.main}>
        Hello World Igma!
      </main>
      <Footer />
    </div>
  );
}
