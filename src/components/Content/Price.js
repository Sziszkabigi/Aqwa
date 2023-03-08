import { Fragment } from "react";
import { parseIsolatedEntityName } from "typescript";
import classes from './Price.module.css';

const Price = () => {
    return (
        <Fragment>
            <div className={classes.price_container}>
                <h2>ÁRAK, BUDAPEST TERÜLETÉN</h2>
                <div className={classes.price_list}>
                    <ul className={classes.column}>
                        <li className={classes.list_title}>Klíma tisztítás</li>
                        <li className={classes.amount}>1db</li>
                        <li className={classes.price}>20.000 Ft/beltéri egység</li>
                    </ul>
                    <ul className={classes.column}>
                        <li className={classes.list_title}>Klíma tisztítás</li>
                        <li className={classes.amount}>2-4db</li>
                        <li className={classes.price}>18.000 Ft/beltéri egység</li>
                    </ul>
                    <ul className={classes.column_vip}>
                        <li className={classes.list_title_vip}>VIP</li>
                        <li className={classes.amount_vip}>4db-tól</li>
                        <li className={classes.price_vip}>15.000 Ft/beltéri egység</li>
                    </ul>
                </div>
                <ul className={classes.sale_column} id={classes.sale}>
                    <li className={classes.sale_title}>Teli Akcio!!!</li>
                    <li className={classes.sale_amount}>December 1- Marcius 1-ig</li>
                    <li className={classes.sale_price}>16.000 Ft/beltéri egység</li>
                </ul>
                <div className={classes.other}>
                    <h2>Egyéb szolgáltatásaink</h2>
                    <ul>
                        <li>Hétvégi kiszállási díj: +5.000 Ft egyszeri költség
                        </li>
                        <li>Kültéri egység mosása: 15.000 Ft/db
                        </li>
                        <li>(Amennyiben hozzáférhető helyen van.)
                        </li>
                        <li>Rézcsövek szigetelése, UV védelme:  2.000 Ft/fm
                        </li>
                        <li>Klíma szakszerű leszerelése: 20.000 Ft
                        </li>
                        <li>(1db kültéri és 1db beltéri egység)
                        </li>
                        <li>Budapesten kívüli kiszállás díja: 80 Ft/km (oda-vissza fizetendő)
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Price;