import React from 'react';
import {useSelector} from "react-redux";


const Content = () => {
    const user = useSelector(state => state.user);
    return (
        <div>
            {user}
        </div>
    );
};

export default Content;