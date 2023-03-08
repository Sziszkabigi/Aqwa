import { ClassNames } from "@emotion/react";
import { Fragment } from "react";
import Example from '../Carousel/Carousel'
import classes from './Customers.module.css'

const Customers = () => {
  return (
      <Fragment>
        <div className={classes.container}>
          <div className={classes.container_text}>
            <h2>Ügyfeleink</h2>
            <h2>mondták</h2>
            <h2><bold>Rólunk.</bold></h2>
          </div>
          <div className={classes.container_carousel}>
            <Example/>
          </div>
        </div>
      </Fragment>
    );
}
 
export default Customers;