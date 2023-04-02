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
import { HiReceiptTax } from "react-icons/hi";





const PanelUgodnosti = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"10px", textAlign:"center"}} >
                <h1 href="/ugodnosti">> Ugodnosti</h1>
            </Row>
            <Button href="/" style={{position: "absolute", bottom: "10px", left: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E"}}><p style={{position:"absolute", bottom:"-1px", left:"6px"}}>DOMOV</p></Button>

            <Row className="d-flex flex-row" style={{margin:"0 -20px 0 -20px"}}>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/store" style={{fontSize:"30px"}}><IoIosArrowBack /><TiShoppingCart /></Button>
                    <p>V trgovino</p>
                </Col>
                <Col  style={{marginTop:"50px"}}>
                    <Button variant="dark">Stanje: {context.user.coins} <img src="zrnocoin.png" alt="zrno" style={{width: "20px"}}/></Button>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <img src="A1_logo.png" alt="A1 logo" style={{width: "60px", height: "60px"}} />
                </Col>
            </Row>

            <Row style={{marginTop:"20px"}}></Row>
            <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius:"3px"}}/>
            <Row style={{marginTop:"20px"}}></Row>

            <Row style={{margin:"10px"}}>
                <Row>
                    <Col>
                        <Badge bg="warning" text="dark" style={{fontSize:"45px", margin:"20px", padding:"20px", height:"90px", width:"90px", justifyContent:"center"}}><BsFillGiftFill /></Badge>
                    </Col> 
                    <Col style={{marginTop:"30px", padding:"0 -10px"}}>
                        <p style={{fontSize:"20px", margin:"0", textAlign:"left"}}>>Darilo</p>
                        <p style={{fontSize:"12px", margin:"0", textAlign:"left"}}>Osvoji super nagrado!</p>
                        <p style={{fontSize:"20px", color:"red", margin:"0"}}>-1000 <img src="zrnocoin.png" alt="zrno" style={{width: "15px"}}/></p>
                    </Col>      
                </Row>

                <Row>
                    <Col>
                        <Badge bg="warning" text="dark" style={{fontSize:"45px", margin:"20px", padding:"20px", height:"90px", width:"90px", justifyContent:"center"}}><HiReceiptTax /></Badge>
                    </Col> 
                    <Col style={{marginTop:"30px"}}>
                        <p style={{fontSize:"20px", margin:"0", textAlign:"left"}}>>5% popusta</p>
                        <p style={{fontSize:"12px", margin:"0", textAlign:"left"}}>Na katerikoli izdelek!</p>
                        <p style={{fontSize:"20px", color:"red", margin:"0"}}>-5000 <img src="zrnocoin.png" alt="zrno" style={{width: "15px"}}/></p>
                    </Col>      
                </Row>

                <Row>
                    <Col>
                        <Badge bg="warning" text="dark" style={{fontSize:"45px", margin:"20px", padding:"20px", height:"90px", width:"90px", justifyContent:"center"}}><img src="1up.png" style={{width: "45px"}}/></Badge>
                    </Col> 
                    <Col style={{marginTop:"30px"}}>
                        <p style={{fontSize:"20px", margin:"0", textAlign:"left"}}>>podatki boost</p>
                        <p style={{fontSize:"12px", margin:"0", textAlign:"left"}}>+1gb do konca meseca!</p>
                        <p style={{fontSize:"20px", color:"red", margin:"0"}}>-7000 <img src="zrnocoin.png" alt="zrno" style={{width: "15px"}}/></p>
                    </Col>      
                </Row>
            </Row>

            <Row>
                <Col style={{width:"20%"}}></Col>
                <Button variant="dark" href="/ugodnosti/zrna" style={{marginTop:"70px", width:"60%", textAlign:"center"}}>Kje dobim zrna <img src="zrnocoin.png" alt="zrno" style={{width: "20px"}}/>?</Button>
                <Col style={{width:"20%"}}></Col>
            </Row>
            
        </Container>
    )
}

export default PanelUgodnosti;