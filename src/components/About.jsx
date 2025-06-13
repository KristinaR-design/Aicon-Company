import './About.scss';
import Back from '../img/about1.png';
import FadeInOnScroll from '../actions/FadeInOnScroll';

export default function About() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__title">О компании</h2>

                <p className="about__text">
                    <strong>ООО «АИКОНТ» — </strong> это команда, которая соединяет инженерную точность,
                    современное мышление и личную ответственность за результат. Мы создаём инфраструктуру,
                    которая работает без сбоев, обеспечивая связь, энергию и устойчивое развитие.
                </p>

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
                </FadeInOnScroll>
            </div>
        </section>
    );
}
