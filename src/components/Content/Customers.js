import { ClassNames } from "@emotion/react";
import { Fragment } from "react";
import Example from '../Carousel/Carousel'
import classes from './Customers.module.css'

const Customers = () => {
  return (
      <Fragment>
        <div className={classes.container}>
          <div className={classes.container_text}>
            <h1>Ügyfeleink</h1>
            <h1>mondták</h1>
            <h1><bold>Rólunk.</bold></h1>
          </div>
          <div className={classes.container_carousel}>
            <Example/>
          </div>
        </div>
      </Fragment>
    );
}
 
export default Customers;