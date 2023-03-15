import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Carousel.module.css'
import identity from './Carousel.module.css'
import AcUnit from '@mui/icons-material/AcUnit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import workImage1 from '../../assets/works-1.jpg';
import workImage2 from '../../assets/works-2.jpg';
import { Container } from 'react-bootstrap';
import { ClassNames } from '@emotion/react';

const Galery = () => {
    const items = [
        {
            image:`${workImage1}`,
        },
        {
            image:`${workImage2}`,
        }
    ]

    return (
        <Container>
            <Carousel
                NavButton={({onClick, className, style, next, prev}) => {
                    return (
                        <Button id={identity.button_corousel} onClick={onClick} className={className} style={style} >
                            {next && <ArrowForwardIosIcon/>}
                            {prev && <ArrowBackIosIcon/>}
                        </Button>
                    )
                }}
                IndicatorIcon={<AcUnit />} // Previous Example
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',    // could be anything
                        color: '#7FC7EA',
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: '#42a9da' 
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        marginTop: '20px', 
                        marginBottom: '20px', 
                        textAlign: 'center' ,
                    }
                }}
                >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Container>
    )
}

function Item(props)
{
    return (
        <Paper id={identity.paper_galery}>
            <img className='galery_image' src={props.item.image} />
        </Paper>
    )
}
 
export default Galery;