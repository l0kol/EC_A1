import React, {useContext} from 'react';
import { AppContext } from '../Context/context';


const Error = () => {
    const {setModalContent} = useContext(AppContext);

    setModalContent('This page does not exist 🤯!');

    return (
        <div className="d-flex flex-row justify-content-center flex-wrap">
            <h1> This page does not exist :) </h1>
        </div>
    )
};

export default Error