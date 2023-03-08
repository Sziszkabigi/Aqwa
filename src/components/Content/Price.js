import { Fragment } from "react";
import { parseIsolatedEntityName } from "typescript";
import classes from './Price.module.css';

const Price = () => {
    return (
        <Fragment>
            <div className={classes.price_container}>
                <h2>KLIÍMA TISZTÍTÁS ÁRAK</h2>
                <div className={classes.price_list}>
                    <ul className={classes.column}>
                        <li className={classes.list_title}>Klíma tisztítás</li>
                        <li className={classes.amount}>1db</li>
                        <li className={classes.price}>19.900 Ft/beltéri egység</li>
                    </ul>
                    <ul className={classes.column}>
                        <li className={classes.list_title}>Klíma tisztítás</li>
                        <li className={classes.amount}>2db-tól</li>
                        <li className={classes.price}>17.900ft, Ft/beltéri egység</li>
                    </ul>
                    <ul className={classes.column_vip}>
                        <li className={classes.list_title_vip}>VIP csomag</li>
                        <li className={classes.amount_vip}>24órán belüli kiszállás</li>
                        <li className={classes.price_vip}>40.000 Ft/beltéri egység</li>
                    </ul>
                </div>
                <div className={classes.sale}>
                <ul className={classes.sale_column} id={classes.sale}>
                    <li className={classes.sale_title}>Téli akció!!!</li>
                    <li className={classes.sale_amount}>December 1- Marcius 1-ig</li>
                    <li className={classes.sale_price}>15.900ft. Ft/beltéri egység</li>
                </ul>
                </div>
                <div className={classes.other}>
                    <h2>Egyéb szolgáltatásaink</h2>
                    <ul>
                        <li>Hétvégi kiszállási díj: +10.000 Ft egyszeri költség
                        </li>
                        <li>Kültéri egység mosása: 5.000 Ft/db
                        </li>
                        <li>(Amennyiben hozzáférhető helyen van.)
                        </li>
                        <li>Rézcsövek szigetelése, UV védelme:  2.000 Ft/fm
                        </li>
                        <li>Klíma szakszerű leszerelése: 25.000 Ft
                        </li>
                        <li>(1db kültéri és 1db beltéri egység)
                        </li>
                        <li>Budapesten kívüli kiszállás díja: 85 Ft/km (oda-vissza fizetendő)
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Price;