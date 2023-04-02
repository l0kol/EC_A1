import {Col, Container, ListGroup, Row, Spinner, Button, Badge} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { RxPerson } from 'react-icons/rx';
import { BsFillGiftFill } from "react-icons/bs";
import { MdPhoneIphone, MdTv, MdVideogameAsset, MdConnectedTv, MdStraight, MdOutlineDevicesOther } from "react-icons/md";
import { GoPackage } from "react-icons/go";



const PanelRoom = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
            <Row style={{marginTop:"15px", textAlign:"center"}} >
                <h1 href="/room">> Dnevna soba</h1>
            </Row>

            {/* navigacija */}
            <Row className="d-flex flex-row">
                <Col style={{marginTop:"10px"}}>
                    <Button href="/forum" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><RiQuestionAnswerLine /></Button>
                    <p style={{marginBottom:"3px"}}>Forum</p>
                    <Button href="/devices" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdOutlineDevicesOther /></Button>
                    <p style={{marginBottom:"3px"}}>Naprave</p>
                </Col>
                <Col style={{alignItems:"center"}}>
                    <Button href="/room" style={{fontSize:"70px", backgroundColor:"#22242E", border:"none", margin:"35px", padding:"5px 20px", borderRadius:"15%"}}><MdConnectedTv /></Button>
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

            <h3 style={{textAlign:"left", marginTop:"20px", marginBottom:"20px"}}>> Kolegi</h3>
            <div style={{marginTop:"20px", marginBottom:"5px"}}>
                <Row>
                    <Col>
                        <div>
                            <img src="zrno3.png" alt="slika uporabnika" style={{width: "50px"}}/>
                            <Badge bg="dark" style={{fontWeight:"400", marginLeft:"10px"}}>Lado</Badge>
                        </div>
                    </Col>
                    <Col style={{margin:"0 10px"}}>
                        <Row style={{fontSize:"10px"}}>TRENUTNO GLEDA:</Row>
                        <Row>Ne joci Peter</Row>
                    </Col>
                </Row>
             </div> 
             <div style={{marginTop:"20px", marginBottom:"5px"}}>
                <Row>
                    <Col>
                        <div>
                            <img src="zrno4.png" alt="slika uporabnika" style={{width: "50px"}}/>
                            <Badge bg="dark" style={{fontWeight:"400", marginLeft:"10px"}}>Cveto</Badge>
                        </div>
                    </Col>
                    <Col style={{margin:"0 10px"}}>
                        <Row style={{fontSize:"10px"}}>TRENUTNO GLEDA:</Row>
                        <Row>Kokosja vecerja</Row>
                    </Col>
                </Row>
             </div> 

            <h3 style={{textAlign:"left", marginTop:"60px", marginBottom:"20px"}}>> Skupno gledanje</h3>
            <div style={{margin:"20px", marginBottom:"5px"}}>
                <Row style={{fontSize:"10px"}}>TRENUTNO GLEDAS:</Row>
                <Row style={{marginBottom:"20px"}}>Nasa Mala Klinika</Row>
                <Row style={{fontSize:"10px"}}>S TEBOJ V SOBI SO:</Row>
                <Row>
                    <Col>
                        <div>
                            <img src="zrno1.png" alt="slika uporabnika" style={{width: "50px"}}/>
                            <Badge bg="dark" style={{fontWeight:"400", marginLeft:"10px"}}>Gojmir</Badge>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="zrno2.png" alt="slika uporabnika" style={{width: "50px"}}/>
                            <Badge bg="dark" style={{fontWeight:"400", marginLeft:"10px"}}>Robert</Badge>
                        </div>
                    </Col>
                </Row>
                
                <Button style={{position: "absolute", bottom: "10px", right: "10px", width: "100px", height: "50px", borderRadius: "20%", backgroundColor: "#22242E", border: "none", fontSize: "1rem"}} onClick={() => context.SetCreatePostModal({open:true})}><MdStraight />Debata</Button>

            </div>

        </Container>
    )
}

export default PanelRoom;