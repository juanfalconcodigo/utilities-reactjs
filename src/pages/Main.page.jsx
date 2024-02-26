import { NavLink, Outlet  } from "react-router-dom"
import './Main.page.scss';

export const MainPage = () => {
    return (
        <>
            <h1>Main.page</h1>
            <header>
                <ul>
                    <li>
                        <NavLink to="/home" className={({isActive})=>isActive?"active-link":"disable-link"}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({isActive})=>isActive?"active-link":"disable-link"}>About</NavLink>
                    </li>
                </ul>
            </header>
            <Outlet/>
        </>
    )
}
