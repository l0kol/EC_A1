import {Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";



const PanelProfile = () => {

    const context = useContext(AppContext);


    return (
        <Container>
            <Row>
                <Col>
                Panel Profile
                </Col>
            </Row>
        </Container>
    )
}

export default PanelProfile;