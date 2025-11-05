import logo from '../assets/img/dc-logo.png'
import NavBar from './NavBar'

export default function Header() {
    return (
        <>
            <header>

                <div className="container">

                    <div className="logo">
                        <img src={logo} alt="DC_logo" />
                    </div>

                    <NavBar />

                </div>

            </header>
        </>
    )
}