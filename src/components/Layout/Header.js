import { Fragment } from "react";
import classes from './Header.module.css';
import logoImage from '../../assets/logo.png';
import phoneImage from '../../assets/phone.png';
import emailImage from '../../assets/email.png';

const Header = () => {
    return ( 
        <Fragment>
            <header className={classes.header}>
                <img className={classes.logo} src={logoImage} alt='logo'/>
                <div className={classes.header_text}>
                    <div className={classes.header_info}>
                        <img className={classes.email} src={emailImage} alt='email'/>
                        <a className={classes.mail} href="info@aquaclean.hu">info@aquaclean.hu</a>
                        <img className={classes.phone} src={phoneImage} alt='phone'/>
                        <span>+36 30 444 2252</span>
                        <a className={classes.fa} href="https://www.facebook.com/splitklimatisztitas/">f</a>
                    </div>
                    <nav className={classes.header_menu}>
                        <a href="#sec_1">Bemutatkozás</a>
                        <a href="#sec_2">Hogyan dolgozunk</a>
                        <a href="#sec_3">Árak</a>
                        <a href="#sec_4">Kapcsolat</a>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
}
 
export default Header;