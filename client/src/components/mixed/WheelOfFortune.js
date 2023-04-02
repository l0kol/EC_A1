import React, {useState, useEffect, useContext, useCallback} from 'react';
import {AppContext} from "../../Context/context";
import {InputGroup, Button, Form} from "react-bootstrap";
import WheelOfFortune from "react-native-wheel-of-fortune";
import {motion} from 'framer-motion'
import { Formik } from 'formik';
import * as yup from 'yup';

const WheelOfFortuneModal = () => {
    const context = useContext(AppContext);
    const participants = [
        '%10',
        '%20',
        '%30',
        '%40',
        '%50',
        '%60',
        '%70',
        '%90',
        'FREE',
      ];
      const wheelOptions = {
            rewards: participants,
            knobSize: 50,
            borderWidth: 5,
            borderColor: '#000',
            innerRadius: 50,
            duration: 4000,
            backgroundColor: 'transparent',
            textAngle: 'horizontal',
            // knobSource: require('./assets/images/knoob.png'),
            getWinner: (value, index) => {
              this.setState({winnerValue: value, winnerIndex: index});
            },
            onRef: ref => (this.child = ref),
          };
      

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
            <h3 > Zavrtiii monaaa </h3> 

            <WheelOfFortune
            wheelOptions={wheelOptions}
            />
            <Button title="Press me" onPress={ () => { this.child._onPress() } } />

                
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