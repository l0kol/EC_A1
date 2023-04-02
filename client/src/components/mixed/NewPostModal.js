import React, {useState, useEffect, useContext, useCallback} from 'react';
import {AppContext} from "../../Context/context";
import {InputGroup,Button, Spinner, Dropdown, Form} from "react-bootstrap";
import {motion} from 'framer-motion'
import { Formik } from 'formik';
import * as yup from 'yup';

const NewPostModal = () => {
    const context = useContext(AppContext);

    const postSchema = yup.object({
        title: yup.string().required(),
        content: yup.string().required(),
    });


    const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
        context.setIsCreateOrderModalOpen({open: false})
    }
    }, []);

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

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
      }, [escFunction]);



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
            <h3 > Nova objava </h3> 
                
                <div className='modal-confirm-container-input'> 
            
                        <Formik
                            validationSchema={postSchema}
                            initialValues={{
                                title: '',
                                content: '',
                            }}
                            onSubmit={(values, {setSubmitting, resetForm}) => {
                                setSubmitting(true);
                                confirm(values.title, values.content);
                                resetForm();
                                setSubmitting(false);
                            }}      
                        >
                        {}
                        {( {
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            errors,
                        }) => (
                    <Form id='orderForm' noValidate onSubmit={handleSubmit}>
                    <InputGroup style={{width: "14.5rem"}} >
                        <Form.Control 
                                onChange={handleChange}
                                type="string"
                                placeholder={'Naslov'}
                                name="title"
                                value={values.title}
                                isInvalid={!!errors.title}
                                onBlur={handleBlur}
                            />
                        <Form.Control.Feedback type="invalid" tooltip >
                                {errors.title}
                        </Form.Control.Feedback>
                    </InputGroup>
                    <InputGroup style={{width: "14.5rem", height: "10rem", marginTop: "1rem"}} >
                        <Form.Control 
                                onChange={handleChange}
                                type="string"
                                placeholder={'Vsebina'}
                                name="content"
                                value={values.content}
                                isInvalid={!!errors.content}
                                onBlur={handleBlur}
                                componentClass="textarea" 
                            />
                        <Form.Control.Feedback type="invalid" tooltip >
                                {errors.content}
                        </Form.Control.Feedback>
                    </InputGroup>
                    
                    
                    <Button variant="btn btn-success active" type='submit' style={{backgroundColor: "green", margin: "1rem"}}>Potrdi</Button>
                    <Button variant="btn btn-danger" style={{backgroundColor: "red", margin: "1rem"}} onClick={() => {
                        context.SetCreatePostModal({open: false})
                    }}>
                    Prekliči
                    </Button>
                    </Form>
                        )}
                    </Formik>
            
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

export default NewPostModal