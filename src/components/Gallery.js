import { Card, Col, Container, Row } from "react-bootstrap"
import AnimatedContent from "./AnimatedContent"
import WebFont from "webfontloader"
import ultramanShin from './img/ultraman-shin.png'
import ultrseven from './img/ultraseven.png'
import ultramanJack from './img/ultraman-jack.png'
import ultramanAce from './img/ultraman-ace.png'
import ultramanTaro from './img/ultraman-taro.png'
import ultramanLeo from './img/ultraman-leo.png'
import astra from './img/astra.png'
import Zoffy from './img/zoffy.png'
import fatherOfUltra from './img/father-of-ultra.png'
import ultramanTiga from './img/ultraman-tiga.png'
import ultramanDyna from './img/ultraman-dyna.png'
import ultramanGaia from './img/ultraman-gaia.png'
import ultramanAgul from './img/ultraman-agul.png'
import ultramanCosmos from './img/ultraman-cosmos.png'
import ultramanNexus from './img/ultraman-nexus.png'
import ultramanMax from './img/ultraman-max.png'
import ultramanMebius from './img/ultraman-mebius.png'
import ultramanZero from './img/ultraman-zero.png'
import ultramanGinga from './img/ultraman-ginga.png'
import ultramanX from './img/ultraman-x.png'
import ultramanOrb from './img/ultraman-orb.png'
import ultramanGeed from './img/ultraman-geed.png'
import ultramanRosso from './img/ultraman-rosso.png'
import ultramanBlu from './img/ultraman-blu.png'
import ultramanTaiga from './img/ultraman-taiga.png'
import ultramanZ from './img/ultraman-z.png'
import ultramanBlazar from './img/ultraman-blazar.png'

const Gallery = ({ isNightMode }) => {

    WebFont.load({
        google: {
            families: ['Bungee Spice', 'sans-serif']
        }
    });

    const cardStyle = {
        backgroundColor: isNightMode ? '#210F37' : 'white',
        color: isNightMode ? 'white' : 'black',
        border: 'none'
    };

    return (
        <Container>
            <Row className="mt-4 mb-4 p-3">
                <h1 className="text-center" id="showa" style={{ fontFamily: 'Bungee Spice, sans-serif' }}>SHOWA</h1>
                <Col md={4}>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div>
                            <Card className="m-3" style={cardStyle}>
                                <Card.Img variant="top" src={ultramanShin} height={500} />
                                <Card.Body>
                                    <Card.Title className="text-center">Ultraman</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </AnimatedContent>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultrseven} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraseven</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanJack} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Jack</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div>
                            <Card className="m-3" style={cardStyle}>
                                <Card.Img variant="top" src={ultramanAce} height={500} />
                                <Card.Body>
                                    <Card.Title className="text-center">Ultraman Ace</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </AnimatedContent>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanTaro} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Taro</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanLeo} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Leo</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="bounce.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={0.3}
                    >
                        <div>
                            <Card className="m-3" style={cardStyle}>
                                <Card.Img variant="top" src={Zoffy} height={500} />
                                <Card.Body>
                                    <Card.Title className="text-center">Zoffy</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </AnimatedContent>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={astra} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Astra</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={fatherOfUltra} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Father of Ultra</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4 mb-4 p-3">
                <h1 className="text-center" id="heisei" style={{ fontFamily: 'Bungee Spice, sans-serif' }}>HEISEI</h1>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanTiga} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Tiga</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanDyna} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Dyna</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanGaia} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Gaia</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanAgul} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Agul</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanCosmos} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Cosmos</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanNexus} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Nexus</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanMax} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Max</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanMebius} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Mebius</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanZero} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Zero</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4 mb-4 p-3">
                <h1 className="text-center" id="reiwa" style={{ fontFamily: 'Bungee Spice, sans-serif' }}>REIWA</h1>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanGinga} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Ginga</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanX} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman X</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanOrb} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Orb</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanGeed} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Geed</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanRosso} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Rosso</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanBlu} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Blu</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanTaiga} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Taiga</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanZ} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Z</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="m-3" style={cardStyle}>
                        <Card.Img variant="top" src={ultramanBlazar} height={500} />
                        <Card.Body>
                            <Card.Title className="text-center">Ultraman Blazar</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Gallery