import s from "./page.module.scss";

import Container from "@/components/Container/Container";
import Link from "next/link";
import Transition from "@/components/ui/Transition/Transition";

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <section className={s.hero}>
          <Container>
            <div className={s.wrapper}>
              <div className={s.banner}>
                
                <Transition as="div" animate="right" duration={0.4}>
                <div className={s.credentials}>
                <h3 className={s.name}>THANVEER UMMER</h3>
                  <div className={s.positions}>
                    <span className={s.positions_item}>CEO</span>
                    <span className={s.positions_item}>INVESTOR</span>
                    <span className={s.positions_item}>BOARD MEMBER</span>
                    <span className={s.positions_item}>SENIOR ADVISOR</span>
                  </div>
                </div>
                </Transition>
             
                <Transition as="div" animate="opacity" duration={0.9}>
                  <h1 className={s.quote}>
                    Maturity is a result of experience, not age, and experience
                    is earned through exposure
                  </h1>
                </Transition>
                <Transition as="div" animate="right" duration={0.4}>
      
                  <Link className={s.link_btn} href="/about">
                    GET TO KNOW ME
                  </Link>
                </Transition>
              </div>
              <div className={s.image}></div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
