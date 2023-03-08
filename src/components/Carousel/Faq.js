import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './Carousel.module.css'
import identity from './Carousel.module.css'
import AcUnit from '@mui/icons-material/AcUnit';
import { ClassNames } from '@emotion/react';


function Faq(props) {
    var items = [
        {
            question:"Milyen gyakran tisztíttassam a klímámat?",
            answer:"Normál otthoni felhasználás mellett, ha csak hűtésre használjuk nyáron, akkor évi 1 karbantartás szükséges.Ez egyébként elengedhetetlen a garancia megőrzéséhez! Ha fűteni is szeretnénk vele, vagy olyan helyen van alakásban, ahol könnyen koszolódik, pl. konyha, akkor évente legalább kétszer.",
        },
        {
            question:"Mikor érdemes kitisztíttatni a klímát?",
            answer:"Célszerű a hűtési szezon után. Egyrészt a fűtési szezonra már tiszta lesz a légkondi, másrészt tavasztól kezdődően jelentősen megnő a várakozási idő.",
        },
        {
            question:"Én is meg tudom csinálni. Miért hívjak szakembert?",
            answer:"Nem biztos, hogy jó ötlet egy több százezer forintos klímán tesztelni tudásunkat,  ráadásul, ha valamit elrontunk, akkor a garanciát is elveszítjük! Megfelelő felszerelés és tudás nélkül az eredmény sem lesz megfelelő.",
        },
        {
            question:"Még garanciális a klímám és a telepítést végző cég csak úgy vállal garanciát, ha ők tartják karban?",
            answer:"Ez sajnos átverés! A jogszabály azt írja elő, hogy F-Gáz azonosítóval rendelkező klímaszerelőnek kell a karbantartást végezni a garancia megőrzéséhez. Hivatalos klímaszerelőként minden szükséges engedéllyel rendelkezem, így bátran hívhat garancia időn belül is."
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
        </Fragment>
    )
}

function Item(props)
{
    return (
        <Paper id={identity.paper}>
            <h5>{props.item.question}</h5>
            <p>{props.item.answer}</p>
            <Button className="CheckButton"></Button>
        </Paper>
    )
}

export default Faq;