import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Carousel.module.css'
import identity from './Carousel.module.css'
import Home from '@mui/icons-material/Home';


function Example(props) {
    var items = [
        {
            name: "(Hámori Éva)",
            description: `
            “Régi klímánk sajnos már büdös levegőt fújt, ezért nem is nagyon mertük használni. Egy ismerősünk ajánlotta az Aqua-Clean-t, akik profin kitisztították. Azóta semmi szaga.”
            `
        },
        {
            name: "(Kovács Márton)",
            description:`
            “Pékségben lévő klímánk már szinte semmit sem hűtött. Miután kitisztították olyan hideget fújt, mintha új lenne.”
            `
        },
        {
            name: "(Szigeti Annamária)",
            description:`
            “Minden évben tisztíttattam a klímám, de sose mosták még ki így ezelőtt. Elképesztő mi minden jött ki belőle! Minden gyerekes szülőnek erősen ajánlom.”
            `
        }
    ]

    return (
        <Fragment>
            <Carousel
                NavButton={({onClick, className, style, next, prev}) => {
                    return (
                        <Button id={identity.button_corousel} onClick={onClick} className={className} style={style} >
                            {next && ">"}
                            {prev && "<"}
                        </Button>
                    )
                }}
                IndicatorIcon={<Home/>} // Previous Example
                indicatorIconButtonProps={{
                    style: {
                        padding: '10px',    // could be anything
                        color: 'blue'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'grey' 
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '20px', 
                        marginBottom: '20px', 
                        textAlign: 'center' 
                    }
                }}
                >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Fragment>
    )
}

function Item(props)
{
    return (
        <Paper >
            <h3>{props.item.description}</h3>
            <p>{props.item.name}</p>
            <Button className="CheckButton"></Button>
        </Paper>
    )
}



export default Example;