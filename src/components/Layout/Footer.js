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
                    <a href="mailto:info@aqua-clean.hu">info@aqua-clean.hu</a>
                    <p>+36 30 444 2252</p>
                    <a className={classes.fa} href="https://www.facebook.com/splitklimatisztitas/">  f  </a>
                </div>
            </footer>            
        </Fragment>
    );
}
 
export default Footer;