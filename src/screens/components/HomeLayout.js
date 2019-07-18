import React from 'react';
import {View} from 'react-native';

const HomeLayout = (props) => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};

export default HomeLayout;