import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';

import Layout from './components/HomeLayout';
import EventList from '../components/events/EventsList';

class Home extends Component {
    render() {
        const { data, error, loading, getEvents } = this.props.screenProps;
        const filterFunc = this.props.navigation.getParam('filterFunc');
        const events = data.filter(filterFunc);

        return (
            <Layout footer={<Text style={styles.footerText} > Made with ❤ by @matias4205 </Text>} >
                <StatusBar backgroundColor="#2E166F" barStyle="light-content" />
                { loading && <ActivityIndicator style={styles.activity} size='large' />  }
                { error && <Text style={styles.error}> {error.message} </Text> }
                { !error && !loading && <EventList data={events} refreshing={loading} getEvents={getEvents} /> }
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    error: {
        marginTop: 20,
        color: '#fc2525',
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: 'Roboto'
    },
    activity: {
        marginTop: 20
    }
});

export default Home;