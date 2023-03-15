import { Fragment } from "react";
import footerLogoImage from '../../assets/logo-footer.png';
import portre from '../../assets/tomcsanyi-marton.jpg';
import classes from './Footer.module.css';


const Footer = () => {
    return (  
        <Fragment>
            <footer id="sec_4">
                <div className={classes.footer_logo}>
                    <img className='' src={footerLogoImage} alt='logo'/>
                </div>
                    <img className={classes.portre} src={portre} alt='logo'/>
                <div className={classes.info}>
                    <h2>KAPCSOLAT</h2>
                    <ul>
                        <li>
                            <a href="mailto:info@aqua-clean.hu">info@aqua-clean.hu</a>
                        </li>
                        <li>
                            <a href="tel:+36 30 444 2252">+36 30 444 2252</a>
                        </li>
                    </ul>
                    <div>
                        <a className={classes.fa} href="https://www.facebook.com/splitklimatisztitas/">  f  </a>
                    </div>
                </div>
            </footer>            
        </Fragment>
    );
}
 
export default Footer;