import facebookIcon from '../assets/img/footer-facebook.png'
import twitterIcon from '../assets/img/footer-twitter.png'
import ytIcon from '../assets/img/footer-youtube.png'
import pinterestIcon from '../assets/img/footer-pinterest.png'
import periscopeIcon from '../assets/img/footer-periscope.png'
import FooterList from './FooterList'




export default function Banner() {
    return (
        <>
            <footer>

                <div className="footer-top">

                    <div className="container">

                        <FooterList />

                    </div>

                </div>

                <div className="footer-bottom">

                    <div className="container">

                        <button className="fb-btn">sign-up now!</button>

                        <div className="socials">
                            <h5>follow us</h5>
                            <a href="#">
                                <img src={facebookIcon} alt="social-image" />
                            </a>
                            <a href="#">
                                <img src={twitterIcon} alt="social-image" />
                            </a>
                            <a href="#">
                                <img src={ytIcon} alt="social-image" />
                            </a>
                            <a href="#">
                                <img src={pinterestIcon} alt="social-image" />
                            </a>
                            <a href="#">
                                <img src={periscopeIcon} alt="social-image" />
                            </a>
                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}