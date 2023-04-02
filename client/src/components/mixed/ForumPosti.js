import {Col, Container, ListGroup, Row, Spinner, CloseButton, Card, Button} from "react-bootstrap";

import { AppContext } from "../../Context/context";

import {useContext, useEffect, useState} from "react";


import NewPostModal from "./NewPostModal";




const ForumPosti = () => {

    const context = useContext(AppContext);
    const [posts, setPosts] = useState([])

    useEffect (() => {
        //Display time of post as and hours and minutes
       let mappedPosts = context.posts["posts"].map ((post) => {
             let date = new Date(post.createdAt);
             console.log(date.getHours() + ":" + date.getMinutes())
             post.time = date.getHours() + ":" + date.getMinutes();
        })

        setPosts(mappedPosts)
    
    }, [context.posts])
    

    return (
        <Container className="d-flex flex-column" style={{backgroundColor:"#F2E0C2", height:"800px", fontFamily: "DOS"}}>
        <Row style={{marginTop:"10px", textAlign:"center"}} >
            <h1>> Narocnine</h1>
        </Row>
            {
                context.posts["posts"].map((post) => (
                    <Row>
                        <Col>
                            <Card style={{width: "100%", backgroundColor: "#C0322A", color: "white", border: "none", borderRadius: "10px", padding: "10px", margin: "10px"}}>
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Subtitle style={{position: "absolute", top: 8, right: 8, alignSelf: "end", justifyItems: "start"}}>{post.time}</Card.Subtitle>
                                    <Card.Text >
                                        {post.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))
            }
            
            <Button style={{position: "absolute", bottom: "10px", right: "10px", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "#C0322A", border: "none", fontSize: "1rem",backgroundColor: "#6CB4EE", border: "none", textDecoration:"none", fontSize:"14px", boxShadow:"1px 1px 3px 3px #22242E" }} onClick={() => context.SetCreatePostModal({open:true})}>Nova</Button>

            <CloseButton style={{position: "absolute", top: "10px", right: "10px"}} onClick={() => context.setActiveForum({type: "", clicked: false})}/>

        <NewPostModal/>

        </Container>
        
    )
}

export default ForumPosti;