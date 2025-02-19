import s from "./gallery.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";


const GalleryPage: React.FC = () => {
  return (
    <main>
        <section className={s.head}>
            <h2 className={s.title}>MY GALLERY</h2>
        </section>
      <section className={s.section}>
        <Container>
            <ul className={s.image_list}>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                        University team, Germany</p>
                </li>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                    University team, Germany</p>
                </li>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                    University team, Germany</p>
                </li>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                    University team, Germany</p>
                </li>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                    University team, Germany</p>
                </li>
                <li className={s.list_item}>
                    <Image width='345' height='260' alt='thanveer' src='/1.jpg'/>
                    <p className={s.description}>with CellServe Berlin Charite
                    University team, Germany</p>
                </li>
            </ul>  
        </Container>
      </section>
    </main>
  );
};

export default GalleryPage;
