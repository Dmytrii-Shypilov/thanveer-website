"use client";

import s from "./footer.module.scss";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "../Container/Container";
import { Icons } from "../ui/icons/icons";
import { SocialLinks } from "@/constants";

const Footer: React.FC = () => {
  const path = usePathname();
  // const router = useRouter();

  const getClass = (href: string) => {
    return path === href ? s.link_active : s.link;
  };

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.head}>
            <div className={s.media}>
              <p className={s.text}>REACH ME HERE</p>
              <ul className={s.list_social}>
                <li className={s.social_item}>
                  <a className={s.social_link} href={SocialLinks.instagram}  target="_blank">
                    <Icons.IconInstagram />
                  </a>
                </li>
                <li className={s.social_item}>
                  <a className={s.social_link} href={SocialLinks.x} target="_blank">
                    <Icons.IconTwitter />
                  </a>
                </li>
                <li className={s.social_item}>
                  <a className={s.social_link} href={SocialLinks.linkedin} target="_blank">
                    <Icons.IconLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li className={s.list_item}>
                  <Link className={getClass("/about")} href="/about">
                    About me
                  </Link>
                </li>
                <li className={s.list_item}>
                  <Link className={getClass("/gallery")} href="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className={s.list_item}>
                  <Link className={getClass("/business")} href="/business">
                    Business
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={s.credentials}>
            <p className={s.copyright}>
              Copyright © 2025. All Rights Reserved By Thanveer Ummer
            </p>
            <p className={s.signature}>Thanveer Ummer</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
