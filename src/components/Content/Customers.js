import { ClassNames } from "@emotion/react";
import { Fragment } from "react";
import Example from '../Carousel/Carousel'
import classes from './Customers.module.css'

const Customers = () => {
  return (
      <Fragment>
        <div className={classes.container}>
          <div className={classes.container_text}>
            <h1>ÜGYFELEINK</h1>
            <h1>MONDTÁK</h1>
            <div className={classes.bold}>
              <h1>RÓLUNK.</h1>
            </div>
          </div>
          <div className={classes.container_carousel}>
            <Example/>
          </div>
        </div>
      </Fragment>
    );
}
 
export default Customers;