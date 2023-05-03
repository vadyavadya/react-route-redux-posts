import { Link, Outlet, Route, Routes } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>Первый вариант</h1>
            <p>Реализация роутинга вложенного через  элементы &lt;Routes&gt;&lt;Route&gt;&lt;Routers&gt; </p>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="teams">Our team</Link></li>
            </ul>
            <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="teams" element={<p>Our teams</p>} />
            </Routes>
        </div>
    )
}

const About2 = () => {
    return (
        <div>
            <h1>Второй вариант</h1>
            <p>Стандартная через оутлет</p>
            <ul>
                <li><Link to="contacts">Our contacts</Link></li>
                <li><Link to="teams">Our team</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export { About, About2 }