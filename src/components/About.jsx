import './About.scss'
import FadeInOnScroll from '../actions/FadeInOnScroll'
import ServiceCarousel from './ServiceCarousel'
import { Link } from 'react-router-dom'

// Импорт изображений
import AboutImage from '../img/about.webp'
import Why1 from '../img/Why1.jpg'
import Why2 from '../img/Why2.jpeg'
import Why3 from '../img/Why3.png'
import Why4 from '../img/Why4.png'

export default function About() {
    return (
        <FadeInOnScroll>
            <section className="about">
                <div className="about__container">
                    <h2 className="about__title">
                        Комплексные решения в сфере цифровой безопасности и контроля доступа
                    </h2>

                    <p className="about__text">
                        Наша компания предлагает современные решения в области безопасности и цифровой
                        автоматизации. Мы проектируем, внедряем и сопровождаем системы видеонаблюдения,
                        контроля и управления доступом, а также интегрированные IT-системы и инженерные
                        сети. Наш подход — это качество, точность и адаптивность под задачи любого масштаба:
                        от локальных объектов до региональных проектов.
                    </p>

                    <h2 className="main_space">Основные направления</h2>
                    <ServiceCarousel />

                    {/* О компании */}
                    <div className="about_company">
                        <h2 className="about_title">О компании</h2>
                        <div className="about_flex">
                            <div className="about_image">
                                <img src={AboutImage} alt="Картинка о компании" />
                            </div>
                            <div className="about_text">
                                Наша команда — это специалисты с инженерной квалификацией, которые обладают
                                богатым опытом в сфере цифровой безопасности и информационных технологий. Мы
                                осуществляем полный цикл работ: от первичного аудита объекта и составления
                                технического задания до сдачи смонтированной системы «под ключ». Проектная
                                документация разрабатывается с учетом действующих нормативов, в том числе с
                                ориентацией на государственные и муниципальные объекты.
                            </div>
                        </div>
                    </div>

                    {/* Почему выбирают нас */}
                    <section className="why-us">
                        <h2 className="why-title">Почему выбирают нас</h2>
                        <div className="why-grid">
                            <div className="why-item">
                                <img src={Why1} alt="Инженерный подход" />
                                <h3>Инженерный подход и юридическая точность</h3>
                                <p>
                                    Мы работаем строго в рамках законодательства и технических регламентов,
                                    гарантируя соответствие проектной документации и монтажных решений
                                    требованиям нормативных актов.
                                </p>
                            </div>
                            <div className="why-item">
                                <img src={Why2} alt="Полный цикл" />
                                <h3>Полный цикл под ключ</h3>
                                <p>
                                    Проектируем, согласовываем, поставляем оборудование, производим монтаж и
                                    обучение персонала. Сдаем объекты с пакетом исполнительной документации.
                                </p>
                            </div>
                            <div className="why-item">
                                <img src={Why3} alt="Вся Россия" />
                                <h3>География работы — вся Россия</h3>
                                <p>
                                    Наш опыт охватывает как небольшие локальные объекты, так и крупные
                                    инфраструктурные проекты в регионах.
                                </p>
                            </div>
                            <div className="why-item">
                                <img src={Why4} alt="Гибкость" />
                                <h3>Гибкость и развитие</h3>
                                <p>
                                    Мы постоянно дорабатываем наш программный и технический стек, внедряем
                                    онлайн-калькуляторы, цифровые панели управления, мобильные интерфейсы и
                                    интеграции с другими системами.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Связаться с нами */}
                    <section className="contact-section">
                        <div className="contact-content">
                            <h2 className="contact-title">Свяжитесь с нами</h2>
                            <p className="contact-text">
                                Если вы ищете надежного подрядчика, который обеспечит качественную реализацию
                                системы цифровой безопасности — мы готовы предложить решение.
                            </p>
                            <p className="contact-text">
                                Наши специалисты проконсультируют вас, проведут расчёты и подготовят
                                индивидуальное предложение с учетом всех требований.
                            </p>
                            <p className="contact-call">
                                Оставьте заявку прямо сейчас — и мы свяжемся с вами в ближайшее время.
                            </p>

                            <Link to="/application">
                                <button className="contact-button">Оставить заявку</button>
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </FadeInOnScroll>
    )
}
