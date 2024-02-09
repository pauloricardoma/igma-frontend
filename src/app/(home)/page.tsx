import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionTop from "./components/SectionTop";
import SectionMid from "./components/SectionMid";
import SectionBottom from "./components/SectionBottom";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <SectionTop />
        <SectionMid />
        <SectionBottom />
      </main>
      <Footer />
    </div>
  );
}
