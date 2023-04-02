import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset, MdOutlineDevicesOther, MdConnectedTv } from "react-icons/md";
import { GoPackage } from "react-icons/go";




const PanelDevices = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"15px", textAlign:"center"}} >
                <h1 href="/devices">> Naprave</h1>
            </Row>

            {/* navigacija */}
            <Row className="d-flex flex-row">
                <Col style={{marginTop:"10px"}}>
                    <Button href="/forum" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><RiQuestionAnswerLine /></Button>
                    <p style={{marginBottom:"3px"}}>Forum</p>
                    <Button href="/room" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdConnectedTv /></Button>
                    <p style={{marginBottom:"3px"}}>Soba</p>
                </Col>
                <Col style={{alignItems:"center"}}>
                    <Button href="/devices" style={{fontSize:"70px", backgroundColor:"#22242E", border:"none", margin:"35px", padding:"5px 20px", borderRadius:"15%"}}><MdOutlineDevicesOther /></Button>
                </Col>
                <Col style={{marginTop:"10px"}}>
                    <Button href="/store" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><TiShoppingCart /></Button>
                    <p style={{marginBottom:"3px"}}>Trgovina</p>
                    <Button href="/profile" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><RxPerson /></Button>
                    <p style={{marginBottom:"3px"}}>Profil</p>
                </Col>
            </Row>
            <hr style={{background: "#C0322A", height: "5px", border: "none", radius:"3%", margin:"5px 30px"}}/>
            <Button href="/" style={{position: "absolute", bottom: "10px", left: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E"}}><p style={{position:"absolute", bottom:"-1px", left:"6px"}}>DOMOV</p></Button>
            {/* navigacija */}

        </Container>
    )
}

export default PanelDevices;