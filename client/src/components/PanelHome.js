import {Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";





const PanelHome = () => {

    const context = useContext(AppContext);


    return (
        <Container>
            <Row>
                <Col>
                {/* Display A1_logo.png here: */}
                    <img src="A1_logo.png" alt="A1 logo" style={{width: "100px", height: "100px"}} />
                </Col>
            </Row>
        </Container>
    )
}

export default PanelHome;