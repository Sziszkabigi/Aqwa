import { Fragment } from 'react';
import classes from './Hero.module.css';

const heroText = [
    'Klímatisztítás másképp',
    'Miért tisztíttassam a klímámat?',
    'Íme 3 kiváló ok, amiért érdemes rendszeresen karbantartani a klímát:'
];

const Hero = () => {
    return ( 
        <Fragment>
            <div className={classes.hero}>
                <h1>{heroText[0].toUpperCase()}</h1>
                <h3>{heroText[1].toUpperCase()}</h3>
                <p>{heroText[2]}</p>
            </div>
        </Fragment>
    );
}
 
export default Hero;