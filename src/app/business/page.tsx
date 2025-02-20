import s from "./business.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

const BusinessPage: React.FC = () => {
  return (
    <main>
      <section className={s.head}>
        <h2 className={s.title}>BUSINESS</h2>
      </section>
      <section className={s.section}>
        <Container>
          <div>
            <h3 className={s.subtitle}>COMPANIES</h3>
            <ul className={s.company_list}>
              <li className={s.companiy_list_item}>
                <Link className={s.link} href="https://www.mariaintl.com/">
                  <Image
                    width={300}
                    height={150}
                    src="/mgi-logo.svg"
                    alt="Maria Group International, Dubai"
                  />
                </Link>

                <div></div>
              </li>
              <li className={s.companiy_list_item}>
                <Link className={s.link} href="https://mcs-consultants.vercel.app/">
                  <Image
                    width={300}
                    height={130}
                    src="/mcs-logo.svg"
                    alt="MCS MGI Consulting Services, Dubai"
                  />
                </Link>

                <div></div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BusinessPage;
