import React from 'react';

const HomeLayout = (props) => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};

export default HomeLayout;