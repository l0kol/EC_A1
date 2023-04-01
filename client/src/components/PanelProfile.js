import {Col, Container, ListGroup, Row, Spinner, Button, Badge, ProgressBar} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';



const PanelProfile = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"740px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/profile">> Profil</h1>
            </Row>

            <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><RiQuestionAnswerLine /></Button>
                    <p>Forum</p>
                </Col>
                <Col  style={{marginTop:"20px"}}>
                <img src="zrno_framed.png" alt="slika uporabnika" style={{width: "130px", height: "130px"}} />
                <h3><Badge bg="dark" style={{fontWeight:"400"}}><figcaption>Jure Zrno</figcaption></Badge></h3>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/store" style={{fontSize:"30px"}}><TiShoppingCart /></Button>
                    <p>Trgovina</p>
                </Col>
            </Row>

            <Row>
                <Col style={{marginTop:"20px"}}>
                    <h1><Badge bg="danger">level 57</Badge></h1>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <ProgressBar striped variant="danger" now={70} />
                    <h3>3204xp</h3>
                </Col>
            </Row>

            <Row style={{marginTop:"50px"}}></Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>

            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Zrna: 1000<img src="zrnocoin.png" alt="zrno" style={{width: "50px"}}/>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>

            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Kolegi:
                <Col style={{marginBottom:"10px"}}><img src="zrno1.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno2.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno3.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno_framed.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno4.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno3.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                <Col><img src="zrno2.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
            </Row>
            
            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>
            
            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Kolajne:
                <Col><img src="kolajna.png" alt="slika kolajne" style={{width: "50px"}}/></Col>
                <Col><img src="kolajna2.png" alt="slika kolajne" style={{width: "50px"}}/></Col>
            </Row>
        </Container>
    )
}

export default PanelProfile;