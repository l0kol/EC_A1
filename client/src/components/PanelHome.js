import {Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";





const PanelHome = () => {

    const context = useContext(AppContext);


    return (
        <Container>
            <Row>
                <Col>
                Panel Home
                </Col>
            </Row>
        </Container>
    )
}

export default PanelHome;