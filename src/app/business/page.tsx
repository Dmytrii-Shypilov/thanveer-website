import s from "./business.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import Transition from "@/components/ui/Transition/Transition";

import { Roles } from "@/constants";
import { Icons } from "@/components/ui/icons/icons";

const BusinessPage: React.FC = () => {
  const positions = Roles.map((el) => {
    return (
      <li className={s.roles_list_item} key={el.company}>
        <div className={s.role}><Icons.IconPointer className={s.icon}/><span className={s.role_name}>{el.role}</span> </div>
        <span className={s.company}>{el.company}</span>
      </li>
    );
  });
  return (
    <main>
      <section className={s.head}>
        <h2 className={s.title}>BUSINESS</h2>
      </section>
      <section className={s.section}>
        <Container>
          <div className={s.wrapper}>
            <div className={s.roles_block}>
            <Transition as="div" animate="opacity" duration={0.9}>
              <div>
                <h3 className={s.subtitle}>MY PRESENT ROLES</h3>
                <ul className={s.roles_list}>{positions}</ul>
              </div>
              </Transition>

              <Transition as="div" animate="opacity" duration={0.9}>
              <Image
                className={s.image}
                alt="dubai"
                width={515}
                height={615}
                src="/dubai_skyline.webp"
              />
              </Transition>
            </div>

          
            <ul className={s.company_list}>
            <Transition as="div" animate="up" duration={0.5}>
              <li className={s.companiy_list_item}>
             
                <Link className={s.link} href="https://www.mariaintl.com/">
                  <Image
                    width={300}
                    height={150}
                    src="/mgi-logo.svg"
                    alt="Maria Group International, Dubai"
                  />
                </Link>
             
               
              </li>
              </Transition>
              <Transition as="div" animate="up" duration={0.5}>
              <li className={s.companiy_list_item}>
                <Link
                  className={s.link}
                  href="https://mcs-consultants.vercel.app/"
                >
                  <Image
                  className={s.logo_image}
                    width={300}
                    height={130}
                    src="/mcs-logo.svg"
                    alt="MCS MGI Consulting Services, Dubai"
                  />
                </Link>
              </li>
              </Transition>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BusinessPage;
