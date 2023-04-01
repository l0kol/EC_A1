import {Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";





const PanelForum = () => {

    const context = useContext(AppContext);


    return (
        <Container style={{backgroundColor: "#F2E0C2", height: "740px"}}>
            <Row>
                <Col>
                Forum
                </Col>
            </Row>
        </Container>
    )
}

export default PanelForum;