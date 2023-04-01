import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset } from "react-icons/md";
import { GoPackage } from "react-icons/go";




const PanelDevices = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/store">> Trgovina</h1>
            </Row>

            <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><RiQuestionAnswerLine /></Button>
                    <p>Forum</p>
                </Col>
                <Col  style={{marginTop:"50px"}}>
                    <Button variant="danger" href="/store" style={{fontSize:"75px", width:"130px", height:"130px"}}><TiShoppingCart /></Button>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/profile" style={{fontSize:"30px"}}><RxPerson /></Button>
                    <p>Profil</p>
                </Col>
            </Row>

            <Row style={{marginTop:"40px", marginBottom:"5px"}}>
                <div style={{width:"45%"}}>
                    <Button variant="warning" href="/ugodnosti" style={{fontSize:"30px"}}>>Ugodnosti!</Button>
                    <p style={{fontSize:"18px"}}>Stanje: 1000 <img src="zrnocoin.png" alt="zrno" style={{width: "20px"}}/></p>
                </div>

                <div style={{width:"25%"}}></div>

                <div style={{width:"30%"}}>
                    <Button variant="warning" style={{fontSize:"30px"}}><BsFillGiftFill />x3</Button>
                    <p style={{fontSize:"18px"}}>Nagrade!</p>
                </div>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius:"3px"}}/>
            <Row style={{marginTop:"25px"}}></Row>

            <Row>
                <div style={{marginTop:"50px", width:"45%"}}>
                    <Row>
                        <Button variant="dark" style={{fontSize:"30px"}}>Telefoni</Button>
                        <p style={{fontSize:"50px"}}><MdPhoneIphone /></p>
                    </Row>
                    <Row>
                        <Button variant="dark" style={{fontSize:"30px"}}>Televizija</Button>
                        <p style={{fontSize:"50px"}}><MdTv /></p>
                    </Row>
                </div>

                <div style={{width:"10%"}}></div>

                <div style={{width:"45%"}}>
                    <Row>
                        <Button variant="dark" style={{fontSize:"30px"}}>Paketi</Button>
                        <p style={{fontSize:"50px"}}><GoPackage /></p>
                    </Row>
                    <Row>
                        <Button variant="dark" style={{fontSize:"30px"}}>Zabava</Button>
                        <p style={{fontSize:"50px"}}><MdVideogameAsset /></p>
                    </Row>
                </div>
            </Row>

        </Container>
    )
}

export default PanelDevices;