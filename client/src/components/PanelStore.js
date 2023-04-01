import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";



const PanelStore = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"740px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/store">> Trgovina</h1>
            </Row>

            <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><RiQuestionAnswerLine /></Button>
                    <p>Forum</p>
                </Col>
                <Col  style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/store" style={{fontSize:"75px", width:"130px", height:"130px"}}><TiShoppingCart /></Button>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/profile" style={{fontSize:"30px"}}><RxPerson /></Button>
                    <p>Profil</p>
                </Col>
            </Row>

            <Row>
                <Col style={{marginTop:"20px", marginBottom:"30px"}}>
                    <Button variant="warning" style={{fontSize:"20px"}}>> Ugodnosti!</Button>
                    <p style={{fontSize:"18px"}}>Stanje: 1000 <img src="zrnocoin.png" alt="zrno" style={{width: "20px"}}/></p>
                </Col>


                <Col style={{marginTop:"50px"}}>
                    <Button variant="warning" style={{fontSize:"30px"}}><BsFillGiftFill />x3</Button>
                    <p style={{fontSize:"18px"}}>> Nagrade</p>
                </Col>
            </Row>


            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>
            
        </Container>
    )
}

export default PanelStore;