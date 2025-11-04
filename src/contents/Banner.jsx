import digitalComics from '../assets/img/buy-comics-digital-comics.png'
import merchandise from '../assets/img/buy-comics-merchandise.png'
import subscription from '../assets/img/buy-comics-subscriptions.png'
import shopLocator from '../assets/img/buy-comics-shop-locator.png'
import powerVisa from '../assets/img/buy-dc-power-visa.svg'




export default function Banner() {
    return (
        <>
            <section className="banner">

                <div className="container">

                    <ul>

                        <li>
                            <div className="icon">
                                <img src={digitalComics} alt="icon_image" />
                            </div>
                            <a href="#">digital comics</a>
                        </li>

                        <li>
                            <div className="icon">
                                <img src={merchandise} alt="icon_image" />
                            </div>
                            <a href="#">dc merchandise</a>
                        </li>

                        <li>
                            <div className="icon">
                                <img src={subscription} alt="icon_image" />
                            </div>
                            <a href="#">subscription</a>
                        </li>

                        <li>
                            <div className="icon">
                                <img src={shopLocator} alt="icon_image" />
                            </div>
                            <a href="#">comic shop locator</a>
                        </li>

                        <li>
                            <div className="icon">
                                <img src={powerVisa} alt="icon_image" />
                            </div>
                            <a href="#">dc power visa</a>
                        </li>

                    </ul>

                </div>

            </section>
        </>
    )
}