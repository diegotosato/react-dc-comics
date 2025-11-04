import facebookIcon from '../assets/img/footer-facebook.png'
import twitterIcon from '../assets/img/footer-twitter.png'
import ytIcon from '../assets/img/footer-youtube.png'
import pinterestIcon from '../assets/img/footer-pinterest.png'
import periscopeIcon from '../assets/img/footer-periscope.png'




export default function Banner() {
    return (
        <>
            <footer>

                <div className="footer-top">

                    <div className="container">

                        <div className="contacts">

                            <ul>

                                <h5>dc comics</h5>

                                <li>
                                    <a href="#">characters</a>
                                </li>
                                <li>
                                    <a href="#">comics</a>
                                </li>
                                <li>
                                    <a href="#">movies</a>
                                </li>
                                <li>
                                    <a href="#">tv</a>
                                </li>
                                <li>
                                    <a href="#">games</a>
                                </li>
                                <li>
                                    <a href="#">videos</a>
                                </li>
                                <li>
                                    <a href="#">news</a>
                                </li>

                                {/* SHOP */}
                                <h5 className='mt-4'>shop</h5>

                                <li>
                                    <a href="#">shop dc</a>
                                </li>
                                <li>
                                    <a href="#">shop dc collectables</a>
                                </li>

                            </ul>
                            {/* DC COMICS */}

                            <ul>

                                <h5>dc</h5>

                                <li>
                                    <a href="#">terms of use</a>
                                </li>
                                <li>
                                    <a href="#">privacy policy (new)</a>
                                </li>
                                <li>
                                    <a href="#">ad choices</a>
                                </li>
                                <li>
                                    <a href="#">advertising</a>
                                </li>
                                <li>
                                    <a href="#">jobs</a>
                                </li>
                                <li>
                                    <a href="#">subscriptions</a>
                                </li>
                                <li>
                                    <a href="#">talent workshops</a>
                                </li>
                                <li>
                                    <a href="#">CPSC certificates</a>
                                </li>
                                <li>
                                    <a href="#">ratings</a>
                                </li>
                                <li>
                                    <a href="#">shop help</a>
                                </li>
                                <li>
                                    <a href="#">contact us</a>
                                </li>

                            </ul>
                            {/* DC */}

                            <ul>

                                <h5>sites</h5>

                                <li>
                                    <a href="#">dc</a>
                                </li>
                                <li>
                                    <a href="#">MAD magazine</a>
                                </li>
                                <li>
                                    <a href="#">DC kids</a>
                                </li>
                                <li>
                                    <a href="#">DC universe</a>
                                </li>
                                <li>
                                    <a href="#">DC Power Visa</a>
                                </li>

                            </ul>
                            {/* SITES */}

                        </div>

                        <div className="ft-logo-bg">
                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="container">

                        <button className="fb-btn">sign-up now!</button>

                        <div className="socials">
                            <h5>follow us</h5>
                            <img src={facebookIcon} alt="social-image" />
                            <img src={twitterIcon} alt="social-image" />
                            <img src={ytIcon} alt="social-image" />
                            <img src={pinterestIcon} alt="social-image" />
                            <img src={periscopeIcon} alt="social-image" />
                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}