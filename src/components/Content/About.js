import { Fragment } from "react";
import classes from './About.module.css';

const About = () => {
    return (  
        <Fragment className={classes.about}>
            <section>
                <h1>Ügyfeleink mondták Rólunk.</h1>
                <div>TARTALOM Caracel</div>
            </section>
        </Fragment>
    );
}
 
export default About;