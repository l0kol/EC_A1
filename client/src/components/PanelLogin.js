import {Button, Card, Form, FormControl, InputGroup, Row, Col} from "react-bootstrap";

import { AppContext } from "../Context/context";

import {useContext} from "react";

import imageBg from "../images/front-bg.gif";

import { Formik } from 'formik';
import * as yup from 'yup';



const PanelLogin = () => {

    const context = useContext(AppContext);

    const registratonSchema = yup.object().shape({
        name: yup.string()
            .required("Email je potreben")
            .min(3, "Name must be at least 3 characters long"),
        email: yup.string()
            .required("Email je potreben"),
        password: yup.string()
            .required("Geslo je potrebno")
            .min(8, "Geslo mora biti dolgo vsaj 8 znakov"),
        passwordConfirm: yup.string()
            .required("Geslo je potrebno")
            .oneOf([yup.ref('password'), null], 'Gesli se morata ujemati')
      });
    
    const loginSchema = yup.object().shape({
        email: yup.string()
            .required("Polje email je obvezno"),
        password: yup.string()
            .required("Polje geslo je obvezno")
        });
    
        let register = async (registerPlayerId, registerName, registerEmail) => {
            try {
                let data = await context.apiUserRegister(registerPlayerId, registerName, registerEmail);
                context.setNote((prevState) => {
                    return({
                      ...prevState,
                      msg: "Check you email!",
                      heading: 'Successfully registered',
                      show: true,
                      type: 'success'
                    });
                  });
            } catch (e) {
                console.log(e)
                context.setNote((prevState) => {
                    return({
                      ...prevState,
                      msg: e.message,
                      heading: 'Error',
                      show: true,
                      type: 'danger'
                    });
                  });
            }
        }
    
    
        let login = async (email, loginPassword) => {
            try {
                //Login user
                let data = await context.apiUserLogin(email, loginPassword);
    
                //Set cookies
                await context.setCookie("authToken", data.token);
    
                //Set cookies in context variables
                context.setAuthToken(data.user.id);
    
                //Set user
                context.setUser({
                    state: data.user.state,
                    id: data.user.id,
                    type: data.user.type,
                    name: data.user.name,
                });
    
                // context.setNote((prevState) => {
                //     return({
                //       ...prevState,
                //       msg: data.message,
                //       heading: 'Success',
                //       show: true,
                //       type: 'success'
                //     });
                //   });
    
    
                window.location.reload(true)
    
    
            } catch (e) {
                // console.log(e)
                // context.setNote((prevState) => {
                //     return({
                //       ...prevState,
                //       msg: e.response.data.message,
                //       heading: 'Error',
                //       show: true,
                //       type: 'danger'
                //     });
                //   });
            }
        }
    


    return (
        <div  style={{backgroundImage: `url(${imageBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", imageRendering: "pixelated", height: "800px"}}>
            <div className="d-flex flex-row justify-content-center flex-wrap" style={{paddingTop: "15%"}}>
                <div className={"d-flex p-3"}>
                    {/* <Card as={Row} style={{width: '25rem', borderRadius: "8px"}} size="lg">
                    <Card.Header style={{backgroundColor: "#F0C808"}}><h5>Register</h5></Card.Header>
                    <Formik
                        validationSchema={registratonSchema}
                        initialValues={{
                            registerPlayerId: '',
                            name: '',
                            email: '',
                        }}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            register(values.registerPlayerId, values.name, values.email);
                            resetForm();
                            setSubmitting(false);
                        }}                      
                        >
                        {}
                        {( {
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            values,
                            touched,
                            errors,
                            dirty
                        }) => (
                        <Form noValidate onSubmit={handleSubmit} >
                            
                            <Form.Group className="mb-3 p-2" controlId="validationFormik01" style={{textAlign: "start"}}>
                                <Form.Label >Player Id</Form.Label>
                                <Form.Control 
                                    onChange={handleChange}
                                    type="number"
                                    placeholder="Your student ID"
                                    name="registerPlayerId"
                                    value={values.registerPlayerId}
                                    isInvalid={!!errors.registerPlayerId && touched.registerPlayerId}
                                    isValid={touched.registerPlayerId && !errors.registerPlayerId}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid" style={{position: "absolute"}}>
                                    {errors.registerPlayerId}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid" style={{position: "absolute"}}>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3 p-2" controlId="validationFormik02" style={{textAlign: "start"}}>
                                <Form.Label id="input-user-name">User Name</Form.Label>
                                <Form.Control 
                                    onChange={handleChange} 
                                    type="text"
                                    placeholder="NameS[urname]"
                                    name="name"
                                    value={values.name}
                                    isInvalid={!!errors.name && touched.name}
                                    isValid={touched.name && !errors.name}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid" style={{position: "absolute"}}>
                                    {errors.name}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid" style={{position: "absolute"}}>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3 p-2" controlId="validationFormik03" style={{textAlign: "start"}}>
                                <Form.Label id="input-user-email">Email</Form.Label>
                                <Form.Control 
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    placeholder="xx@student.uni..."
                                    value={values.email}
                                    isInvalid={!!errors.email && touched.email}
                                    isValid={touched.email && !errors.email}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid" style={{position: "absolute"}}>
                                    {errors.email}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid" style={{position: "absolute"}}>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="d-flex justify-content-end p-2">
                                <Button variant="dark" type="submit" className="p-2" disabled={isSubmitting || !dirty}>
                                    Register
                                </Button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    </Card> */}
                </div>
                <div className={"d-flex p-3"}>
                    <Card className="d-flex" style={{width: '24rem', borderRadius: "8px"}} size="lg">
                    <Formik
                        validationSchema={loginSchema}
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            setSubmitting(true);
                            login(values.email, values.password);
                            resetForm();
                            setSubmitting(false);
                        }}                      
                        >
                        {}
                        {( {
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            isSubmitting,
                            values,
                            touched,
                            errors,
                            dirty
                        }) => (
                    <Form noValidate onSubmit={handleSubmit} style={{backgroundColor: "#F2E0C2"}}>
                        <Card.Header style={{backgroundColor: "#C0322A"}}><h5 style={{fontFamily: "DOS", fontSize: "2rem", color: "white"}}>Prijava</h5></Card.Header>
                        <Form.Group className="mb-3 p-2" controlId="validationFormikLogin01" style={{textAlign: "start"}}>
                            <Form.Label style={{fontFamily: "DOS", fontSize: "1.5rem"}}>Email</Form.Label>
                            <Form.Control 
                                    onChange={handleChange}
                                    type="string"
                                    placeholder="Vas email"
                                    name="email"
                                    value={values.email}
                                    isInvalid={!!errors.email && touched.email}
                                    isValid={touched.email && !errors.email}
                                    onBlur={handleBlur}
                                />
                                <Form.Control.Feedback type="invalid" style={{position: "absolute"}}>
                                    {errors.email}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid" style={{position: "absolute"}}>
                                    Izgleda dobro!
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3 p-2" controlId="validationFormikLogin02" style={{textAlign: "start"}}>
                            <Form.Label style={{fontFamily: "DOS", fontSize: "1.5rem"}} >Geslo</Form.Label>
                            <Form.Control 
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="********"
                                    name="password"
                                    value={values.password}
                                    isInvalid={!!errors.password && touched.password}
                                    isValid={touched.password && !errors.password}
                                    onBlur={handleBlur}
                                    autoComplete="on"
                                />
                                <Form.Control.Feedback type="invalid" style={{position: "absolute"}}>
                                    {errors.password}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="valid" style={{position: "absolute"}}>
                                    Izgleda dobro!
                                </Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-flex justify-content-end p-2" >
                            <Button variant="dark" type="submit" className="p-2" disabled={isSubmitting || !dirty} style={{marginTop: "2rem"}}>
                                Prijavi se
                            </Button>
                        </div>
                        </Form>
                        )}
                    </Formik>
                    </Card>
                </div>
            </div>
        </div>


    )
}

export default PanelLogin;