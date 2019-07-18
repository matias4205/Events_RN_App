import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Layout from './components/EventsListLayout';
import EventItem from './components/EventItem';
import Separator from './components/EventItemSeparator';

import data from '../../moks/events_moks.json';

class EventsList extends Component {
    keyExtractor = (item) => item.id.toString();

    itemSeparator = () => <Separator />

    renderEmpty = () => <Text>No hay sugerencias</Text>

    renderItem = ({item}) => <EventItem title={item.description} date={item.date} type={item.type} />

    render() {
        return (
            <Layout>
                <FlatList data={ data } renderItem={ this.renderItem } ListEmptyComponent={ this.renderEmpty } ItemSeparatorComponent={ this.itemSeparator } keyExtractor={ this.keyExtractor } />
            </Layout>
        );
    }
}

export default EventsList;