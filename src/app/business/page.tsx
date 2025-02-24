import s from "./business.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

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
              <div>
                <h3 className={s.subtitle}>MY PRESENT ROLES</h3>
                <ul className={s.roles_list}>{positions}</ul>
                {/* <span className={s.signature}>Thanveer Ummer</span> */}
              </div>

              <Image
                className={s.image}
                alt="dubai"
                width={515}
                height={615}
                src="/dubai_skyline.webp"
              />
            </div>

            {/* <h3 className={s.subtitle}>COMPANIES</h3> */}
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
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BusinessPage;
