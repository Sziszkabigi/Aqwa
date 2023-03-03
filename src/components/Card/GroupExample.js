import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import CardGroup from 'react-bootstrap/CardGroup';
import classes from './Card.module.css';
import sevricesImage1 from '../../assets/services-1.jpg';
import sevricesImage2 from '../../assets/services-2.jpg';
import sevricesImage3 from '../../assets/services-3.jpg';

const text = [
  {
    id: 'm1',
    title: 'Áramot, pénzt takarít meg!',
    description: 'Egy tiszta készülék akár 30%-kal kevesebb áramot fogyaszt.  Egy elkoszolódott készülék sokkal jobban “erőlködik”, mivel kevesebb levegő megy át rajta. Így sokkal több időbe és energiába kerül lehűteni vagy felfűteni egy szobát.',
  },
  {
    id: 'm2',
    title: 'Egészséges friss levegő, kis odafigyeléssel!',
    description: 'Minden rendszeresen használt klímaberendezés fertőzött "mikrobiális szennyeződéssel", amely magában foglalja a gombákat, a penészgombákat és a baktériumokat. A klímaberendezések tökéletes környezetet biztosítanak ezeknek a szennyeződéseknek, és ezek természetesen minden egyes bekapcsoláskor a levegőbe is kerülnek, ami rossz hír az asztmásoknak, a gyermekeknek, időseknek és a betegeknek egyaránt. Az általunk alkalmazott technológia gyakorlatilag felszámolja a mikrobiális szennyeződéseket, így újra egészséges friss levegőt lélegezhet.',
  },
  {
    id: 'm3',
    title: 'Hosszabb élettartam!,',
    description: 'A rendszeresen tisztított klímaberendezés sokkal hosszabb ideig működik, mint az, amelyik soha nem lett tisztítva. Ha új autót vásárolt és soha nem szervizelte még, akkor akár 75% -kal is csökkentheti várható élettartamát! A légkondicionálók sem különbek.',
  },
];


function GroupExample() {

  return (
    <div className={classes.container}>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={sevricesImage1} />
          <Card.Body>
            <Card.Title>{text[0].title}</Card.Title>
            <Card.Text>{text[0].description}</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
        </Card>
        <Card>
          <Card.Img variant="top" src={sevricesImage2}  />
          <Card.Body>
            <Card.Title>{text[1].title}</Card.Title>
            <Card.Text>{text[1].description}</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={sevricesImage3}  />
          <Card.Body>
            <Card.Title>{text[2].title}</Card.Title>
            <Card.Text>{text[2].description}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <span id="sec_1"></span>
    </div>
  );
}

export default GroupExample;
