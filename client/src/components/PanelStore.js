import {Col, Container, ListGroup, Row, Spinner} from "react-bootstrap";
import { AppContext } from "../Context/context";

import {useContext} from "react";



const PanelStore = () => {

    const context = useContext(AppContext);


    return (
        <Container>
            <Row>
                <Col>
                Panel Store
                </Col>
            </Row>
        </Container>
    )
}

export default PanelStore;