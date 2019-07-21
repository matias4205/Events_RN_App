import React, { Component } from 'react';
import MainTabNavigator from './BasicTabNavigator'

import data from  '../moks/events_moks.json'; 

class CustomTabNavigation extends Component {
    static router = MainTabNavigator.router

    render() {
        const { navigation } = this.props;

        return (
            <MainTabNavigator screenProps={ { data } } navigation={ navigation } /> //ES SUPER IMPORTANTE PASARLE EL NAVIGATION
        );
    }
}

{
    /* EL NAVIGATION ES RESIVIDO POR PROPS GRACIAS AL "createAppContainer" LA OTRA FORMA DE HACERLO ES CON EL "withNavigation" */
}

export default CustomTabNavigation;