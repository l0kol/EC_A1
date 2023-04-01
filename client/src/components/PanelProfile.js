import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import { BsCart4 } from 'react-icons/fa';

const username = "Jure Zrno"

const PanelProfile = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"740px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                > Profil
            </Row>

            <Row className="d-flex flex-row">
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum">Forum</Button>{' '}
                </Col>
                <Col  style={{marginTop:"20px"}}>
                <img src="zrno_framed.png" alt="slika uporabnika" style={{width: "100px", height: "100px"}} />
                <h3><Badge bg="dark"><figcaption>Jure Zrno</figcaption></Badge></h3>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/store">Trgovina</Button>{' '}
                </Col>
            </Row>

            <Row>
                <Col style={{marginTop:"20px"}}>
                    <h1><Badge bg="danger">level 57</Badge></h1>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <h3>3204xp</h3>
                </Col>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>
            
            <Row>
                Zrna: 1000<img src="zrnocoin.png" alt="zrno" style={{width: "50px"}}/>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>

            <Row>
                Kolegi:
                <Col><img src="zrno_framed.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno_framed.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno_framed.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno_framed.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
            </Row>
            
            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>
            
            <Row>
                Kolajne:
                <Col><img src="kolajna.png" alt="slika kolajne" style={{width: "50px"}}/></Col>
            </Row>
        </Container>
    )
}

export default PanelProfile;