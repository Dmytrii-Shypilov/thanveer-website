import s from "./gallery.module.scss";

import Container from "@/components/Container/Container";

const GalleryPage: React.FC = () => {
  return (
    <main>
        <section className={s.head}>
            <h2 className={s.title}>GALLERY</h2>
        </section>
      <section className={s.section}>
        <Container>
            <ul>
                <li></li>
            </ul>
        </Container>
      </section>
    </main>
  );
};

export default GalleryPage;
