import logo from '../assets/img/dc-logo.png'

export default function Header() {
    return (
        <>
            <header>

                <div className="container">

                    <div className="logo">
                        <img src={logo} alt="DC_logo" />
                    </div>

                    <nav className="nav justify-content-center">
                        <a className="nav-link mx-3" href="#">characters</a>
                        <a className="nav-link mx-3" href="#">comics</a>
                        <a className="nav-link mx-3" href="#">movies</a>
                        <a className="nav-link mx-3" href="#">tv</a>
                        <a className="nav-link mx-3" href="#">games</a>
                        <a className="nav-link mx-3" href="#">collectibles</a>
                        <a className="nav-link mx-3" href="#">videos</a>
                        <a className="nav-link mx-3" href="#">fans</a>
                        <a className="nav-link mx-3" href="#">news</a>
                        <a className="nav-link mx-3" href="#">shop</a>
                    </nav>

                </div>

            </header>
        </>
    )
}