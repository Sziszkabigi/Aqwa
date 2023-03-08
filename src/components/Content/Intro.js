import { Fragment } from "react";
import classes from './Intro.module.css';

const Intro = () => {
    return ( 
        <Fragment>
            <div className={classes.intro}>
                <div className={classes.content}>
                    <div className={classes.about}>
                        <h2>BEMUTATKOZÁS</h2>  
                        <p>Légkondicionálókat tisztítunk és tartunk karban. Erre specializálódtunk és ezt jól is csináljuk. Itthon sajnos még mindig az az általánosan bevett módszer, hogy a szűrő elöblítése mellett klímafertőtlenítő spray-t fújnak a szennyezett klímára, ami alapos átmosás nélkül szinte semmit sem ér. Mi egy külföldön már régóta bevált technológiát alkalmazunk. Speciális klímatisztító szerrel és magasnyomású mosóval újjávarázsoljuk koszos légkondiját.  Kételkedik?
                        </p>
                        <p>
                            Sokan nem is sejtik, hogy egy elhanyagolt, vagy nem megfelelően tisztított készülék milyen komoly veszélyeket rejt magában. Mivel a klíma belső egysége, ahol az elpárolgás megy végbe, nedves közeg, így megfelelő karbantartás nélkül biztosan megjelennek különböző gombák, baktériumok, amik a levegőbe jutva igen komoly betegségeket okozhatnak. Ezek közül a legsúlyosabb a Legionellózis, ami akár halálos kimenetelű is lehet. Gyakran halljuk, hogy “megfáztam” a klímától. Ez persze előfordulhat, de az esetek többségében az elhanyagolt, nem megfelelően karbantartott készülék miatt lesznek influenza szerű tüneteink.
                        </p>
                    </div>
                    <div className={classes.youtube}>
                        <iframe src='https://www.youtube.com/embed/lX_ZvWNyrwc'/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Intro;