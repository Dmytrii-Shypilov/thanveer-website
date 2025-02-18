"use client";

import s from "./header.module.scss";

import Link from "next/link";
// import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Icons } from "../ui/icons/icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const path = usePathname();
  const router = useRouter();

  const getClass = (href: string) => {
    return path === href ? s.link_active : s.link;
  };

  const isHomePage = path === "/";

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.social_header}>
            {!isHomePage && (
              <Link href="/" className={s.logo}>
                THANVEER UMMER
              </Link>
            )}
            <ul className={s.list_social}>
              <li className={s.social_item}>
                <a className={s.social_link} href="">
                  <Icons.IconInstagram />
                </a>
              </li>
              <li className={s.social_item}>
                <a className={s.social_link} href="">
                  <Icons.IconTwitter />
                </a>
              </li>
              <li className={s.social_item}>
                <a className={s.social_link} href="">
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
          <span className={s.icon} onClick={() => setIsMenuOpen(true)}>
            {/* <Icons.IconMenu /> */}
          </span>
        </div>
      </Container>
      <MobileMenu
        path={path}
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
        router={router}
      />
    </header>
  );
};

export default Header;
