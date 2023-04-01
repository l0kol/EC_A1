import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset, MdConnectedTv } from "react-icons/md";
import { GoPackage } from "react-icons/go";




const PanelRoom = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/store">> Dnevna soba</h1>
            </Row>

            <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><RiQuestionAnswerLine /></Button>
                    <p>Forum</p>
                </Col>
                <Col  style={{marginTop:"50px"}}>
                    <Button variant="danger" href="/room" style={{fontSize:"75px", width:"130px", height:"130px"}}><MdConnectedTv /></Button>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/profile" style={{fontSize:"30px"}}><RxPerson /></Button>
                    <p>Profil</p>
                </Col>
            </Row>



            <div style={{marginTop:"20px", marginBottom:"5px"}}>
                <h3 style={{textAlign:"left", marginTop:"60px", marginBottom:"30px"}}>> Kolegi</h3>
                <Row>
                    <Col style={{width:"30px"}}><img src="zrno3.png" alt="slika uporabnika" style={{width: "50px"}}/></Col>
                    <Col style={{width:"40px"}}><Badge bg="dark" style={{fontWeight:"400"}}>Lado</Badge></Col>
                    <Col style={{width:"200px"}}>
                        <Row style={{fontSize:"10px"}}>TRENUTNO GLEDA:</Row>
                        <Row>Ne joci Peter</Row>
                    </Col>
                </Row>
             </div> 

            <div style={{marginTop:"20px", marginBottom:"5px"}}>
                <h3 style={{textAlign:"left", marginTop:"60px", marginBottom:"30px"}}>> Skupno gledanje</h3>
            </div>
        </Container>
    )
}

export default PanelRoom;