import s from "./page.module.scss";
import Container from "@/components/Container/Container";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <section className={s.hero}>
          <Container>
            <div className={s.wrapper}>
              <div className={s.banner}>
                <div className={s.credentials}>
                  <h3 className={s.name}>THANVEER UMMER</h3>
                  <div className={s.positions}>
                    <span className={s.positions_item}>CEO</span>
                    <span className={s.positions_item}>INVESTOR</span>
                    <span className={s.positions_item}>BOARD MEMBER</span>
                    <span className={s.positions_item}>SENIOR ADVISOR</span>
                  </div>
                </div>

                <h1 className={s.quote}>
                  Wisdom comes from experience and commitment
                </h1>
                <Button>ABOUT ME</Button>
              </div>
              <div className={s.image}></div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
