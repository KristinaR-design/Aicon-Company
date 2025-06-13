import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Page from './Page'
import './Main.css'
import About from './About';


export default function Main() {

    useEffect(() => {
        const container = document.getElementById('trail-container');

        const handleMouseMove = (e) => {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            container.appendChild(dot);
            setTimeout(() => dot.remove(), 600);
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div id="trail-container"></div>

            <main>

                <Routes>
                    <Route path="/application" element={<Page
                        title="Оставить заявку"
                        description="НАНАНАНАНАНАНАННАНАНА"
                        advantages={['Современные технологии', 'Высокая надежность', 'Комплексный подход']}
                        bgClass="bg-electric"
                    />} />

                    {/* О нас */}
                    <Route path="/" element={<About />} />


                    <Route path="/41-10" element={<Page
                        title="41.10 — Разработка строительных проектов"
                        description="Профессиональная разработка строительных проектов любой сложности."
                        advantages={['Опытные проектировщики', 'Индивидуальный подход', 'Соблюдение сроков']}
                        bgClass="bg-projects"
                    />} />
                    <Route path="/41-20" element={<Page
                        title="41.20 — Строительство жилых и нежилых зданий"
                        description="Строительство современных жилых комплексов и коммерческих объектов."
                        advantages={['Качественные материалы', 'Гарантия на работы', 'Собственный парк техники']}
                        bgClass="bg-buildings"
                    />} />
                    <Route path="/42-11" element={<Page
                        title="42.11 — Строительство автомобильных дорог и автомагистралей"
                        description="Комплексное строительство и реконструкция дорог."
                        advantages={['Соблюдение стандартов', 'Скорость выполнения', 'Современная техника']}
                        bgClass="bg-roads"
                    />} />
                    <Route path="/42-12" element={<Page
                        title="42.12 — Строительство железных дорог и метро"
                        description="Проектирование и строительство железнодорожной инфраструктуры."
                        advantages={['Инновационные решения', 'Безопасность', 'Опытные специалисты']}
                        bgClass="bg-railways"
                    />} />
                    <Route path="/42-21" element={<Page
                        title="42.21 — Строительство инженерных коммуникаций для водоснабжения и водоотведения, газоснабжения"
                        description="Монтаж и обслуживание инженерных сетей."
                        advantages={['Комплексные решения', 'Сертифицированные материалы', 'Гарантия качества']}
                        bgClass="bg-utilities"
                    />} />
                    <Route path="/42-99" element={<Page
                        title="42.99 — Строительство прочих инженерных сооружений, не включенных в другие группировки"
                        description="Реализация уникальных инженерных проектов."
                        advantages={['Гибкость', 'Индивидуальные решения', 'Профессионализм']}
                        bgClass="bg-other"
                    />} />
                </Routes>

            </main>
        </>
    )
} 