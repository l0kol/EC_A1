import {Col, Container, ListGroup, Row, Button} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";





const PanelHome = () => {

    const context = useContext(AppContext);


    return (
        <Container className="d-flex flex-column" style={{backgroundColor: "#F2E0C2", height: "620px"}}>
            <Row>
                <Col>
                {/* Display A1_logo.png here: */}
                {/* Allign image on center here */}
                    <div >
                        <img src="A1_logo.png" alt="A1 logo" className="logo" style={{width: "100px", height: "100px", alignSelf: "center"}} />
                    </div>
                    
                    <div style={{float: 'right'}}>
                        <Button style={{fontFamily: "DOS"}}>Profil</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PanelHome;