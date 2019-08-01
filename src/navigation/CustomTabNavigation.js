import React, { Component } from 'react';

import MainTabNavigator from './BasicTabNavigator'

class CustomTabNavigation extends Component {
    static router = MainTabNavigator.router
    state = {
        loading: true,
        error: undefined,
        data: []
    }

    getEvents = async () => {
        this.setState({
            loading: true,
            error: undefined
        })

        try {
            const data = await fetch('http://181.229.213.140:4205/events');
            const json = await data.json();
            this.setState({
                loading: false,
                error: undefined,
                data: json
            });
        } catch (error) {
            this.setState({
                loading: false,
                error
            });
        }
    }

    componentDidMount(){
        this.getEvents();
    }

    render() {
        const { navigation } = this.props;
        const { data, loading, error } = this.state;

        return (
            <MainTabNavigator screenProps={ { error, loading, data, getEvents: this.getEvents } } navigation={ navigation } />

        );
    }
}

{
    /* EL NAVIGATION ES RESIVIDO POR PROPS GRACIAS AL "createAppContainer" LA OTRA FORMA DE HACERLO ES CON EL "withNavigation" */
}

export default CustomTabNavigation;