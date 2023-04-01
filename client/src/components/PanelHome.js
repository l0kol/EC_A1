import {Col, Container, ListGroup, Row, Button} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";





const PanelHome = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor: "#F2E0C2", height: "620px"}}>
            <Row>
                <Col>
                    <div >
                        <img src="A1_logo.png" alt="A1 logo" className="logo" style={{width: "120px", height: "120px", alignSelf: "center"}} />
                    </div>
                    
                    <div style={{float: 'left'}}>
                        <Button href="/profile" style={{fontFamily: "DOS",  fontSize: "2rem", backgroundColor: "black", marginTop: "4rem", borderWidth: "0", marginLeft: "0"}}>Profil</Button>
                    </div>
                    <div style={{float: 'right'}}>
                        <Button href="/profile" style={{fontFamily: "DOS",  fontSize: "2rem", backgroundColor: "black", marginTop: "8rem", borderWidth: "0", marginLeft: "0"}}>Profil</Button>
                    </div>
                    <div style={{float: 'left'}}>
                        <Button href="/profile" style={{fontFamily: "DOS",  fontSize: "2rem", backgroundColor: "black", marginTop: "4rem", borderWidth: "0", marginLeft: "0"}}>Profil</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PanelHome;