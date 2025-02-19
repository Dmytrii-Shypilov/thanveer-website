import s from './business.module.scss'

import Container from '@/components/Container/Container'


const BusinessPage: React.FC = ()=> {
    return <main>
        <section className={s.head}><h2 className={s.title}>BUSINESS</h2></section>
        <section className={s.section}>
            <Container>
                <p></p>
            </Container>
        </section>
    </main>
}

export default BusinessPage