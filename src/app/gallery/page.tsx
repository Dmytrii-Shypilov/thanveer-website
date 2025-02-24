import s from "./gallery.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";
import { GalleryImages } from "@/constants";

const GalleryPage: React.FC = () => {
  const listElements = GalleryImages.map((el) => {
    return (
      <li key={el.id} className={s.list_item}>
        <Image
        className={s.image}
          width="345"
          height="260"
          alt={"Thanveer Ummer " + el.title}
          src={`/gallery/${el.id}.png`}
        />
        <p className={s.description}>{el.title}</p>
      </li>
    );
  });

  return (
    <main>
      <section className={s.head}>
        <h2 className={s.title}>MY GALLERY</h2>
      </section>
      <section className={s.section}>
        <Container>
          <ul className={s.image_list}>{listElements}</ul>
        </Container>
      </section>
    </main>
  );
};

export default GalleryPage;
