import { Fragment } from "react";
import Intro from "../Content/Intro";
import Work from "../Content/Work";
import GroupExample from "../Card/GroupExample"
import Price from "../Content/Price";

const Content = () => {
    return ( 
        <Fragment>
            <GroupExample/>
            <Intro></Intro>
            <Work></Work>
            <Price></Price>
        </Fragment>
    );
}
 
export default Content;