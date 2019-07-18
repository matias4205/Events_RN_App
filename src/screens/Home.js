import React, { Component } from 'react';
import { Text } from 'react-native';

import Layout from './components/HomeLayout';
import EventList from '../components/events/EventsList';

class Home extends Component {
    render() {
        return (
            <Layout>
                <EventList />
            </Layout>
        );
    }
}

export default Home;