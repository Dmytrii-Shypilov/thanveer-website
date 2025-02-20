import s from "./gallery.module.scss";

import Container from "@/components/Container/Container";
import Image from "next/image";

const arr = [1,2,3,4,5,6,7,8,9,10,11]

const GalleryPage: React.FC = () => {
  return (
    <main>
        <section className={s.head}>
            <h2 className={s.title}>MY GALLERY</h2>
        </section>
      <section className={s.section}>
        <Container>
            <ul className={s.image_list}>
               
                    {arr.map(el=> {
                        return  <li key={el} className={s.list_item}>
                        <Image width='345' height='260' alt='thanveer' src={`/gallery/${el}.png`}/>
                        <p className={s.description}>with CellServe Berlin Charite University team, Germany</p>
                    </li>
                   
                    })}
                    
            </ul>  
        </Container>
      </section>
    </main>
  );
};

export default GalleryPage;
