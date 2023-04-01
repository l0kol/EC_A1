import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";




const PanelZrna = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/store">> Kje dobim zrna <img src="../zrnocoin.png" alt="zrno" style={{width: "30px"}}/>?</h1>
            </Row>

            <Row>
                <h3 style={{textAlign:"left", marginTop:"60px", marginBottom:"30px"}}>>XP (izkusenjske tocke)</h3>
                <Row>
                    <Button variant="dark" style={{fontSize:"12px", textAlign:"right", paddingLeft:"40px", marginLeft:"-10px", marginBottom:"30px"}}>Tocke lahko dobite pri skoraj vsaki aktivnosti na aplikaciji! Z njimi si zvisate <Badge bg="danger">level</Badge> (nivo), ob vsakem novo dosezenem nivoju pa prejmete tudi nekaj zrn <img src="../zrnocoin.png" alt="zrno" style={{width: "12px"}}/>!</Button>
                </Row>
                <Row>
                    <Button variant="dark" style={{fontSize:"12px", textAlign:"right", paddingLeft:"40px", marginLeft:"-10px",  marginBottom:"10px"}}>Odlicen nacin za zbiranje XP tock je forum <RiQuestionAnswerLine />! Vsak uporabnik lahko vasa vprasanja in odgovore vidi in jim stisne lajk , vsak lajk pa vam prinese nekaj xp! Medsebojna pomoc je pot do vec zrn <img src="../zrnocoin.png" alt="zrno" style={{width: "12px"}}/>!</Button>
                </Row>
                
                <h3 style={{textAlign:"left", marginTop:"60px", marginBottom:"30px"}}>>Ob nakupu izdelkov</h3>
                <Row>
                    <Button variant="dark" style={{fontSize:"12px", textAlign:"right", paddingLeft:"40px", marginLeft:"-10px",  marginBottom:"10px"}}>Proporcionalno na ceno nakupa prejmete tudi nekaj zrn <img src="../zrnocoin.png" alt="zrno" style={{width: "12px"}}/>!</Button>
                </Row>
            </Row>

            <Row>
                <Button variant="danger" href="/ugodnosti" style={{fontSize:"20px", marginTop:"150px", padding:"5px", width:"60%"}}><IoIosArrowBack />Nazaj na ugodnosti</Button>
            </Row>

        </Container>
    )
}

export default PanelZrna;