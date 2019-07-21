import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import Layout from './components/HomeLayout';
import EventList from '../components/events/EventsList';

class Home extends Component {
    render() {
        const { data } = this.props.screenProps;
        const filterFunc = this.props.navigation.getParam('filterFunc');
        const events = data.filter(filterFunc)

        return (
            <Layout>
                <EventList data={events} />
                <Text style={styles.footer} > Made with ❤ by @matias4205 </Text>
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center'
    }
});

export default Home;