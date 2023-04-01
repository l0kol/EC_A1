import {Col, Container, Card, Row, Button} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import PanelHome from "./PanelHome";
import PanelLogin from "./PanelLogin";





const PanelMain = () => {

    const context = useContext(AppContext);


    return (
        <>
        {context.user.id == undefined ? (
            <div>
                <PanelLogin/>
            </div>
            
        )
            : (
                <div>
                    <PanelHome/>
                </div>
            )
        }
        </>
    )
}

export default PanelMain;