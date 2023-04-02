import {Col, Container, ListGroup, Row, Spinner, Button, Badge, ProgressBar} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext, useState} from "react";

import { TiShoppingCart } from 'react-icons/ti';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import { MdOutlineDevicesOther, MdConnectedTv } from "react-icons/md";
import { RxPerson } from 'react-icons/rx';

import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const context = useContext(AppContext);

    const [isShown1, setIsShown1] = useState(false);
    const handleClick1 = event => {
        //toggle shown state
        setIsShown1(current1 => !current1);
    };

    const [isShown2, setIsShown2] = useState(false);
    const handleClick2 = event => {
        //toggle shown state
        setIsShown2(current2 => !current2);
    };

    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
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
                        <Col style={{alignItems:"center"}}>
                            <Button href="/profile" style={{fontSize:"70px", backgroundColor:"#22242E", border:"none", margin:"35px", padding:"5px 20px", borderRadius:"15%"}}><RxPerson /></Button>
                        </Col>
                        <Col style={{marginTop:"10px"}}>
                            <Button href="/store" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><TiShoppingCart /></Button>
                            <p style={{marginBottom:"3px"}}>Trgovina</p>
                            <Button href="/devices" style={{fontSize:"35px", backgroundColor:"#C0322A", border:"none", borderRadius:"15%", padding:"5px 15px"}}><MdOutlineDevicesOther /></Button>
                            <p style={{marginBottom:"3px"}}>Naprave</p>
                        </Col>
                    </Row>
                    <hr style={{background: "#C0322A", height: "5px", border: "none", radius:"3%", margin:"5px 30px"}}/>
                    <Button href="/" style={{position: "absolute", bottom: "10px", left: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E"}}><p style={{position:"absolute", bottom:"-1px", left:"6px"}}>DOMOV</p></Button>
                    {/* navigacija */}

            <Row>
                <Col style={{marginTop:"20px"}}>
                    <h1><Badge bg="danger">level 3</Badge></h1>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <ProgressBar striped variant="danger" now="20" />
                    <h3>20/100 xp</h3>
                </Col>
            </Row>

            <Row style={{marginTop:"50px"}}></Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>

            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Zrna: {context.user.coins}<img src="zrnocoin.png" alt="zrno" style={{width: "60px", height: "35px"}}/>
            </Row>

            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>

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
            
            <hr style={{background: "#C0322A", height: "5px", border: "none"}}/>
            
            <Row style={{marginLeft:"20px", fontSize:"25px"}}>
                Kolajne:
                <Col>
                    <Button onClick={handleClick1} style={{border:"none", backgroundColor:"transparent"}}><img src="kolajna.png" alt="slika kolajne" style={{width: "50px"}}/></Button>
                    {isShown1 ? (
                        <Button variant="light" style={{position:"absolute", bottom:"-110px", right:"150px", width:"90px", fontSize:"10px", padding:"0 1px"}}>Zvesti narocnik A1</Button>
                    ) : null}
                </Col>
                <Col>
                    <Button onClick={handleClick2} style={{border:"none", backgroundColor:"transparent"}}><img src="kolajna2.png" alt="slika kolajne" style={{width: "50px"}}/></Button>
                    {isShown2 ? (
                        <Button variant="light" style={{position:"absolute", bottom:"-110px", right:"20px", width:"90px", fontSize:"10px", padding:"0 1px"}}>Zastavil vprasanje na forumu</Button>
                    ) : null}
                </Col>
            </Row>

            <Row>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger" href="/forum" style={{fontSize:"30px"}}><RiQuestionAnswerLine /></Button>
                    <p>Nastavitve</p>
                </Col>
                <Col style={{marginTop:"20px"}}>
                    <Button variant="danger"><RiQuestionAnswerLine /></Button>
                    <p>Odjava</p>
                </Col>
            </Row>
            </div>
        </Container>
    )
}

export default Profile;