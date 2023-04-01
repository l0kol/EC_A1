import {Col, Container, Card, Row, Button} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import imageBg from "../images/front-bg.gif";





const PanelHome = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{height: "800px", backgroundImage: `url(${imageBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", imageRendering: "pixelated"}}>
            <Row>
                 <div >
                    <img src="A1_logo.png" alt="A1 logo" className="logo" style={{width: "120px", height: "120px", alignSelf: "center"}} />
                </div>
            </Row>
            <Row>
            {/* Tel A1: 040 758 948: Jernej */}
                <div style={{justifyContent: "center", alignItems: "center", boxShadow: "var(--light-shadow)"}}>
                    <Card style={{marginTop: "3rem", width: "100%", justifyContent: "center", alignItems: "center", alignSelf: "center", backgroundColor: "#C0322A", color: "white", borderRadius: "8px"}}>
                        <Card.Body>
                            <Card.Title style={{fontFamily: "DOS",  fontSize: "2rem"}}>Dobrodosli v A1 spletni aplikaciji</Card.Title>
                            <Card.Text style={{fontFamily: "DOS",  fontSize: "2rem"}}>
                                {/* dsfdsfdfd. */}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </Row>
            <Row>
                <Col>             
                    <div style={{float: 'left'}}>
                        <Button variant="dark"  href="/profile" style={{fontFamily: "DOS",  fontSize: "2rem", marginTop: "3rem", borderWidth: "3px", marginLeft: "0"}}>Profil</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div style={{float: 'right'}}>
                    <Button variant="dark" href="/store" style={{fontFamily: "DOS",  fontSize: "2rem", marginTop: "3rem", borderWidth: "3px", marginLeft: "0"}}>Trgovina</Button>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div style={{float: 'left'}}>
                    <Button variant="dark" href="/forum" style={{fontFamily: "DOS",  fontSize: "2rem", marginTop: "3rem", borderWidth: "3px", marginLeft: "0"}}>Forum</Button>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PanelHome;