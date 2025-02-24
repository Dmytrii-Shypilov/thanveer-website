import s from "./about.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";
import Transition from "@/components/ui/Transition/Transition";

const AboutPage: React.FC = () => {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section className={s.head}>
        <h2 className={s.title}>ABOUT ME</h2>
      </section>
      <section className={s.about_section}>
        <Container>
          <div className={s.about_block}>
          <Transition as="div" animate="opacity" duration={0.9}>
            <div className={s.text_block}>
              <p className={s.text}>
                A highly driven and accomplished business professional with over
                two decades of extensive experience spanning diverse business
                operations, strategic management, and Senior Advisory roles
                across multiple continents.
              </p>
              <p className={s.text}>
                Mr Thanveer Ummer was raised and educated in the Kingdom of
                Saudi Arabia. He holds a Bachelor’s degree in Business
                Management (BBM) and a Master’s in Business Administration
                (MBA). His unwavering dedication, relentless work ethic,
                privileged access to family office investments, and steadfast
                faith in God Almighty have propelled him to remarkable success
                at a young age.
              </p>
              <p className={s.text}>
                With over 20 years of expertise in multifaceted management
                domains, his proficiencies encompass international investments,
                family office governance, infrastructure development,
                corporate-to-government funding, manufacturing, and global
                trade. He is a Board Member and the Heir to the Kodakkattu
                Family Office Investments. Furthermore, he is a registered
                foreign investor in multiple countries, with a diversified
                portfolio spanning various industries.
              </p>
              <p className={s.text}>
                Mr. Ummer serves as the Chief Executive Officer of MGI
                Consultancy under MARIA GROUP INTERNATIONAL (www.mariaintl.com).
                Additionally, he holds esteemed positions as a Director, Board
                Member, and Senior Advisor at several internationally renowned
                organisations.
              </p>
              <p className={s.text}>
                He is fluent in English, Arabic, Chinese, Hindi, and numerous
                South Asian languages.
              </p>
            </div>
            </Transition>
            <Transition as="div" animate="opacity" duration={0.9}>
            <div>
              <Image
              className={s.image}
                width="500"
                height="460"
                alt="thanveer ummer"
                src="/thanveer-about.png"
                priority={true}
              />
              <div className={s.name_plate}>
                <p className={s.name}>THANVEER UMMER</p>
                <p className={s.position}>
                  Director Board Member MARIA GROUP INTERNATIONAL
                </p>
              </div>
            </div>
            </Transition>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
