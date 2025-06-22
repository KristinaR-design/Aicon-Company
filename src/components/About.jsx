import './About.scss';
import Back from '../img/about.webp';
import FadeInOnScroll from '../actions/FadeInOnScroll';
import ServiceCarousel from './ServiceCarousel';
import { Link } from 'react-router-dom';






export default function About() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__title">Комплексные решения в сфере цифровой безопасности и контроля доступа</h2>

                <p className="about__text">

                    Наша компания предлагает современные решения в области безопасности и цифровой автоматизации. Мы проектируем, внедряем и сопровождаем системы видеонаблюдения, контроля и управления доступом, а также интегрированные IT-системы и инженерные сети. Наш подход — это качество, точность и адаптивность под задачи любого масштаба: от локальных объектов до региональных проектов.
                </p>
                <h2 className="main_space">Основные направления</h2>

                <ServiceCarousel />


                {/* о КОМПАНИИ  */}

                <div className="about_company">
                    <h2 className="about_title">О компании</h2>

                    <div className="about_flex">
                        <div className="about_image">
                            <img src="src/img/about.webp" alt="Картинка о компании" />
                        </div>

                        <div className="about_text">
                            Наша команда — это специалисты с инженерной квалификацией, которые обладают богатым опытом в сфере цифровой безопасности и информационных технологий. Мы осуществляем полный цикл работ: от первичного аудита объекта и составления технического задания до сдачи смонтированной системы «под ключ». Проектная документация разрабатывается с учетом действующих нормативов, в том числе с ориентацией на государственные и муниципальные объекты.
                        </div>
                    </div>
                </div>



                {/* //Почему выбирают нас  */}

                <section className="why-us">
                    <h2 className="why-title">Почему выбирают нас ?</h2>
                    <div className="why-grid">
                        <div className="why-item">
                            <img src="src/img/Why1.jpg" alt="Инженерный подход" />
                            <h3>Инженерный подход и юридическая точность</h3>
                            <p>Мы работаем строго в рамках законодательства и технических регламентов, гарантируя соответствие проектной документации и монтажных решений требованиям нормативных актов.</p>
                        </div>
                        <div className="why-item">
                            <img src="src/img/Why2.jpeg" alt="Полный цикл" />
                            <h3>Полный цикл под ключ</h3>
                            <p>Проектируем, согласовываем, поставляем оборудование, производим монтаж и обучение персонала. Сдаем объекты с пакетом исполнительной документации.</p>
                        </div>
                        <div className="why-item">
                            <img src="src/img/Why3.png" alt="Вся Россия" />
                            <h3>География работы — вся Россия</h3>
                            <p>Наш опыт охватывает как небольшие локальные объекты, так и крупные инфраструктурные проекты в регионах.</p>
                        </div>
                        <div className="why-item">
                            <img src="src/img/Why4.png" alt="Гибкость" />
                            <h3>Гибкость и развитие</h3>
                            <p>Мы постоянно дорабатываем наш программный и технический стек, внедряем онлайн-калькуляторы, цифровые панели управления, мобильные интерфейсы и интеграции с другими системами.</p>
                        </div>
                    </div>
                </section>


                {/* Свяжитесь с нами  */}

                <section className="contact-section">
                    <div className="contact-content">
                        <h2 className="contact-title">Свяжитесь с нами</h2>
                        <p className="contact-text">
                            Если вы ищете надежного подрядчика, который обеспечит качественную реализацию системы цифровой безопасности — мы готовы предложить решение.
                        </p>
                        <p className="contact-text">
                            Наши специалисты проконсультируют вас, проведут расчёты и подготовят индивидуальное предложение с учетом всех требований.
                        </p>
                        <p className="contact-call">
                            Оставьте заявку прямо сейчас — и мы свяжемся с вами в ближайшее время.
                        </p>

                        <Link to="application">
                            <button className="contact-button">Оставить заявку</button>
                        </Link>

                    </div>
                </section>



                {/* <div className="max-w-4xl mx-auto p-4">
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div> */}


                {/* 
                <FadeInOnScroll>

                    <div className="block-group">
                        <div className="back-placeholder">
                            <img src={Back} alt="Фото 1" />
                        </div>
                        <p className="first__text">
                            <strong>Основное направление нашей работы —</strong> строительство инженерных и
                            телекоммуникационных сетей. Также мы выполняем проекты в сферах жилищного,
                            коммерческого и дорожного строительства, подключаем объекты к водоснабжению, газу и
                            связи.
                        </p>
                    </div>





                    <div className="block-group reverse">
                        <div className="little-back-placeholder">
                            <img src="src/img/about2.webp" alt="Фото 2" />
                        </div>
                        <p className="second__text">
                            ООО «АИКОНТ» — микропредприятие, входящее в единый реестр МСП. Это означает гибкость,
                            индивидуальный подход и быстрое принятие решений. Руководитель компании — Никилякин Антон
                            Валентинович, лично участвующий в контроле ключевых этапов и выстраивании честных
                            отношений с заказчиками.
                        </p>
                    </div>

                    <div className="block-group">
                        <div className="second-foto-placeholder">
                            <img src="src/img/about3.webp" alt="Фото 3" />
                        </div>
                        <p className="pre-final__text">
                            Мы не обещаем невозможного — мы просто делаем свою работу качественно, прозрачно и в
                            срок. Нам доверяют, потому что с нами спокойно.
                        </p>
                    </div>

                    <p className="about__cta">
                        Свяжитесь с нами — и мы обсудим, как быть полезными именно вам.
                    </p>
                </FadeInOnScroll> */}
            </div>
        </section>
    );
}
