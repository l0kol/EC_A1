import {Col, Container, ListGroup, Row, Spinner, Button, Badge, ProgressBar} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { MdOutlineDevicesOther, MdConnectedTv } from "react-icons/md";
import { RxPerson } from 'react-icons/rx';
import {BsGear} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

import { useNavigate } from 'react-router-dom';

const PanelProfile = () => {

    const context = useContext(AppContext);
    const navigate = useNavigate();

    async function navigateLogout(event) {
        event.preventDefault();
        navigate("/", {replace: true});
        console.log("Logging out")
        context.removeCookie("authToken");
        context.setUser({
            id: undefined,
            type: "",
            state: ""
        })
    }


    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
           {context.user.id == undefined ? (
               <div>
                     <h1>Not logged in</h1>
                </div>
              ):
                (
                <div>
                    <Row style={{marginTop:"15px", textAlign:"center"}} >
                        <h1 href="/profile">> Profil</h1>
                    </Row>

                    {/* navigacija */}
                    <Row className="d-flex flex-row">
                        <Col style={{marginTop:"10px"}}>
                            <Button href="/forum" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><RiQuestionAnswerLine /></Button>
                            <p style={{marginBottom:"3px"}}>Forum</p>
                            <Button href="/room" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdConnectedTv /></Button>
                            <p style={{marginBottom:"3px"}}>Soba</p>
                        </Col>
                        <Col style={{alignItems:"center", marginTop: "30px"}}>
                        <img src="zrno_framed.png" alt="slika uporabnika" style={{width: "120px"}}/>
                        </Col>
                        <Col style={{marginTop:"10px"}}>
                            <Button href="/store" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><TiShoppingCart /></Button>
                            <p style={{marginBottom:"3px"}}>Trgovina</p>
                            <Button href="/devices" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdOutlineDevicesOther /></Button>
                            <p style={{marginBottom:"3px"}}>Naprave</p>
                        </Col>
                    </Row>
                    <Button variant="dark" style={{marginBottom: "0px"}}><h3 style={{padding: "0px 5px", marginTop: "3px"}}>{context.user.name}</h3></Button>
                    <hr style={{background: "#C0322A", height: "5px", border: "none", radius:"3%", margin:"5px 30px", borderRadius: "8px"}}/>
                    <Button href="/" style={{position: "absolute", bottom: "10px", left: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E"}}><p style={{position:"absolute", bottom:"-1px", left:"6px"}}>DOMOV</p></Button>
                    {/* navigacija */}
                    

            <Row>
                <Col style={{marginTop:"20px"}}>
                    <h1><Badge bg="danger">level {context.user.level}</Badge></h1>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <ProgressBar striped variant="danger" now={context.user.xp} />
                    <h3>{context.user.xp}/100 xp</h3>
                </Col>
            </Row>

            <Row style={{marginTop:"10px"}}></Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius: "8px"}}/>

            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Zrna: {context.user.coins}<img src="zrnocoin.png" alt="zrno" style={{width: "60px", height: "35px"}}/>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius: "8px"}}/>

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
            
            <hr style={{background: "#C0322A", height: "5px", border: "none", borderRadius: "8px"}}/>
            
            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Kolajne:
                <Col><img src="kolajna.png" alt="slika kolajne" style={{width: "50px"}}/></Col>
                <Col><img src="kolajna2.png" alt="slika kolajne" style={{width: "50px"}}/></Col>
            </Row>
            <Row>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><BsGear /></Button>
                    <p>Nastavitve</p>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}} onClick={navigateLogout}><BiLogOut /></Button>
                    <p>Odjava</p>
                </Col>
            </Row>
            </div>
            )
               }
        </Container>
    )
}

export default PanelProfile;