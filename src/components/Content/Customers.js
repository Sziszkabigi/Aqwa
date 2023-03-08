import { ClassNames } from "@emotion/react";
import { Fragment } from "react";
import Example from '../Carousel/Carousel'
import classes from './Customers.module.css'

const Customers = () => {
  return (
      <Fragment>
        <div className={classes.container}>
          <Example/>
          </div>
      </Fragment>
    );
}
 
export default Customers;