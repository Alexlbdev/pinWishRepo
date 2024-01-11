import React from 'react';
import Content from "./Content";
import {useSelector} from "react-redux";
import WelcomeContent from "./WelcomeContent";

const Body = () => {
    const user = useSelector(state => state.user);
    if (user) {
        return (
            <>
                <p>It's Body</p>
                <Content/>
            </>
        );
    } else {
        return (
            <>
                <p>It's Body</p>
                <WelcomeContent />
            </>
        );
    }
};

export default Body;