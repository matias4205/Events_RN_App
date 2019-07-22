import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import Layout from './components/EventsListLayout';
import EventItem from './components/EventItem';
import Separator from './components/EventItemSeparator';

const EventsList = (props) => {
    const keyExtractor = (item) => item.id.toString();

    const itemSeparator = () => <Separator />

    const renderEmpty = () => <Text style={styles.empty}>No hay eventos! 😎</Text>

    const renderItem = ({item}) => <EventItem title={item.description} date={item.date} type={item.type} />

    return (
        <Layout>
            <FlatList data={ props.data } renderItem={ renderItem } ListEmptyComponent={ renderEmpty } ItemSeparatorComponent={ itemSeparator } keyExtractor={ keyExtractor } />
        </Layout>
    );
}

const styles = StyleSheet.create({
    empty: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 20
    }
});

export default EventsList;