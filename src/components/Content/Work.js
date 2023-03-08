import { Fragment } from "react";
import classes from './Work.module.css';
import Example from "../Carousel/Carousel";
import Faq from "../Carousel/Faq";

const Work = () => {
    return ( 
        <Fragment>
            <div className={classes.container_top}>
                <div className={classes.container_top_main}>
                    <div className={classes.container_top_left}>
                        <h1>GYAKRAN </h1>
                        <h1> ISMÉTELT </h1>
                        <div className={classes.bold}>
                            <h1> KÉRDÉSEK</h1>
                        </div>
                    </div>
                    <div className={classes.container_top_right}>
                    <div className={classes.container_carousel}>
                        <Faq/>
                        </div>
                        <span id="sec_2"></span>
                    </div>
                </div>
            </div>
            <div className={classes.container_work}>
                <div className={classes.container_work_wrap}>
                    <div className={classes.container_work_left}>
                        <h2>HOGYAN DOLGOZUNK</h2>
                        <p>Nagyon fontos a tisztítás során a lerakódott por, zsír és baktériumok eltávolítása, ami klímatisztító spray fújkálásával gyakorlatilag lehetetlen. Ez legfeljebb fertőtleníti a hőcserélőt, ha az még tiszta állapotban van.
                        </p>
                        <p>Ha a készülék már szennyezett, ott kizárólag egy alaposabb tisztítás segít, amire mi tökéletes és költséghatékony megoldást kínálunk. így Önnek többé nem kell aggódnia a különböző betegségek miatt.
                        </p>
                        <iframe src='https://www.youtube.com/embed/lX_ZvWNyrwc'/>
                    </div>
                    <div className={classes.container_work_right}>
                        <h2>A Klímatisztítás menete lépésről lépésre</h2>
                        <ol type="1">
                            <li> Burkolat leszerelése.</li>
                            <li> Ezután eltávolítjuk a szűrőket.</li>
                            <li> Klímatisztító szerrel alaposan befújjuk a hőcserélőt és a ventilátor. Ezt hagyjuk 15 percig “dolgozni”.</li>
                            <li> Amíg a szer hat, eltisztítjuk a szűrőket és a burkolatot.</li>
                            <li> Ha letelt a 15 perc, alaposan átmossuk a klímát.</li>
                            <li> Burkolat és szűrők visszaszerelése.</li>
                            <li> Klíma bekapcsolása ventilátor üzemmódba legalább 15 percig, hogy mindennek legyen ideje megszáradni.</li>
                        </ol>
                    </div>
                </div>
                <span id="sec_3"></span>
            </div>
        </Fragment>

    );
}
 
export default Work;