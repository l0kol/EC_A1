import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset, MdConnectedTv, MdOutlineDevicesOther, MdDiversity1 } from "react-icons/md";
import { GoPackage } from "react-icons/go";

import NewPostModal from "./mixed/NewPostModal";
// import WheelOfFortuneModal from "./mixed/WheelOfFortune";




const PanelStore = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"15px", textAlign:"center"}} >
                <h1 href="/store">> Trgovina</h1>
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
                    <Button href="/store" style={{fontSize:"70px", backgroundColor:"#22242E", border:"none", margin:"35px", padding:"5px 20px", borderRadius:"15%"}}><TiShoppingCart /></Button>
                </Col>
                <Col style={{marginTop:"10px"}}>
                    <Button href="/devices" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdOutlineDevicesOther /></Button>
                    <p style={{marginBottom:"3px"}}>Naprave</p>
                    <Button href="/profile" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><RxPerson /></Button>
                    <p style={{marginBottom:"3px"}}>Profil</p>
                </Col>
            </Row>
            <hr style={{background: "#C0322A", height: "5px", border: "none", radius:"3%", margin:"5px 30px"}}/>
            <Button href="/" style={{position: "absolute", bottom: "10px", left: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E"}}><p style={{position:"absolute", bottom:"-1px", left:"6px"}}>DOMOV</p></Button>
            {/* navigacija */}

            <Row style={{marginTop:"15px", marginBottom:"5px"}}>
                <div style={{width:"45%"}}>
                    <Button variant="warning" href="/ugodnosti" style={{fontSize:"30px"}}>>Ugodnosti!</Button>
                    <p style={{fontSize:"18px"}}>Stanje: 1000 <img src="zrnocoin.png" alt="zrno" style={{width: "20px"}}/></p>
                </div>

                <div style={{width:"20%"}}></div>

                <div style={{width:"30%"}}>
                    <Button variant="warning" style={{fontSize:"30px"}} onClick={() => context.SetCreatePostModal({open:true})}><BsFillGiftFill />x3</Button>
                    <p style={{fontSize:"18px"}}>Nagrade!</p>
                </div>
            </Row>

            <Row style={{marginTop:"30px"}}></Row>

            <Row>
                <div style={{marginTop:"50px", width:"45%"}}>
                    <div>
                        <Button variant="dark" style={{fontSize:"20px", width:"100%"}}>Telefoni</Button>
                        <p style={{fontSize:"50px"}}><MdPhoneIphone /></p>
                    </div>
                    <div>
                        <Button variant="dark" style={{fontSize:"20px", width:"100%"}}>Televizija</Button>
                        <p style={{fontSize:"50px"}}><MdTv /></p>
                    </div>
                </div>

                <div style={{width:"10%"}}></div>

                <div style={{width:"45%"}}>
                    <div>
                        <Button variant="dark" style={{fontSize:"20px", width:"100%"}}>Paketi</Button>
                        <p style={{fontSize:"50px"}}><GoPackage /></p>
                    </div>
                    <div>
                        <Button variant="dark" style={{fontSize:"20px", width:"100%"}}>Zabava</Button>
                        <p style={{fontSize:"50px"}}><MdVideogameAsset /></p>
                    </div>
                </div>
            </Row>

        
        <NewPostModal />

        </Container>
    )
}

export default PanelStore;