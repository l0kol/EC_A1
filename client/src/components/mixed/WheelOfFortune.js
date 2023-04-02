import React, {useState, useEffect, useContext, useCallback} from 'react';
import {AppContext} from "../../Context/context";
import {InputGroup, Button, Row, Col} from "react-bootstrap";
import {motion} from 'framer-motion'
import { Formik } from 'formik';
import * as yup from 'yup';

const WheelOfFortuneModal = () => {
    const context = useContext(AppContext);
   
      

    const confirm = async (title, body) => {
        try {
            let response = await context.apiForumPostCreate(title, body, "narocnine");
            console.log(response);

            let posts = context.posts;
            posts.posts.unshift(response);
            context.setPosts({ ...posts })


            context.SetCreatePostModal({open: false})
        } catch(err) {
            console.log(err)
        }
    };



    return (
        <div >
            {context.createPostModal.open == true ? (


            <div className={`${'modal-confirm-overlay show-modal-confirm'}`} >
            <motion.div 
              className="box"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.2,
                    type: "spring",
                    bounce: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
            <div className='modal-confirm-container' style={{backgroundColor: "white"}}>
            <h3 > Zavrti me </h3> 

            <img src="wheel_of_fortune.gif" alt="wheel" style={{width: "300px"}}/>

            
            <Row>
            <Col>
            <Button variant="btn btn-success active" type='submit' style={{backgroundColor: "green", margin: "1rem"}}>Zavrti</Button>
            
            </Col>
            <Col>
            <Button variant="btn btn-danger" style={{backgroundColor: "red", margin: "1rem"}} onClick={() => {
                context.SetCreatePostModal({open: false})
            }}>
            Prekliči
            </Button>
            </Col>
            </Row>
 
            <div className='modal-confirm-container-input'> 
            
                      
            
        </div>
                
            </div>
            </motion.div>
        </div>

            ): (
                <div></div>
            )}
        </div>
        
    )
};

export default WheelOfFortuneModal