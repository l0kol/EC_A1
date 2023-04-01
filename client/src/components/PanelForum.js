import {Col, Container, ListGroup, Row, Spinner, Button, Card} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext, useState} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";

import ForumPosti from "./mixed/ForumPosti";




const PanelForum = () => {

    const context = useContext(AppContext);

    // const [activeForum, setActiveForum] = useState({type: "tehnologija", clicked: false});

    async function forumClik(forumType) {
        context.setActiveForum({type: forumType, clicked: true})
    }


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>

            {
                context.activeForum.clicked ? (
                    <ForumPosti/> )
                    : (
                        <div>
                        <Row style={{marginTop:"10px", textAlign:"center"}} >
                        <h1>> Forum</h1>
                        </Row>

                        <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                            <Col style={{marginTop:"20px"}}>
                                <Button variant="danger" href="/store" style={{fontSize:"30px"}}><TiShoppingCart /></Button>
                                <p>Trgovina</p>
                            </Col>
                            <Col  style={{marginTop:"20px"}}>
                                <Button variant="danger" href="/forum" style={{fontSize:"75px", width:"130px", height:"130px"}}><RiQuestionAnswerLine /></Button>
                            </Col>
                            <Col style={{marginTop:"20px"}}>
                                <Button variant="danger" href="/profile" style={{fontSize:"30px"}}><RxPerson /></Button>
                                <p>Profil</p>
                            </Col>
                        </Row>
                        <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius: "3px"}}/>

                        <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px", justifyContent: "center", alignItems: "center"}}>
                            <Col >
                                <Button style={{width:"100%", backgroundColor: "#C0322A", borderWidth: "0", fontSize: "1.5rem"}} onClick={() => forumClik("Tehnologija")}>Narocnine</Button>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px", justifyContent: "center", alignItems: "center", marginTop: "1rem"}}>
                            <Col >
                                <Button style={{width:"100%", backgroundColor: "#C0322A", borderWidth: "0", fontSize: "1.5rem"}} onClick={() => forumClik("TV")}>Televizija</Button>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px", justifyContent: "center", alignItems: "center", marginTop: "1rem"}}>
                            <Col >
                                <Button style={{width:"100%", backgroundColor: "#C0322A", borderWidth: "0", fontSize: "1.5rem"}} onClick={() => forumClik("Mobi")}>Telefonija</Button>
                            </Col>
                        </Row>

                        <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px", justifyContent: "center", alignItems: "center", marginTop: "1rem"}}>
                            <Col >
                                <Button style={{width:"100%", backgroundColor: "#C0322A", borderWidth: "0", fontSize: "1.5rem"}} onClick={() => forumClik("Ostalo")}>Ostalo</Button>
                            </Col>
                        </Row>
                        </div>

                )
            }


            


        </Container>
    )
}

export default PanelForum;