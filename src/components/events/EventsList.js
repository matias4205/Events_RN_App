import React from 'react';
import { FlatList } from 'react-native';

import Layout from './components/EventsListLayout';
import EventItem from './components/EventItem';
import Separator from './components/EventItemSeparator';

const EventsList = (props) => {
    const keyExtractor = (item) => item.id.toString();

    const itemSeparator = () => <Separator />

    const renderEmpty = () => <Text>No hay sugerencias</Text>

    const renderItem = ({item}) => <EventItem title={item.description} date={item.date} type={item.type} />

    return (
        <Layout>
            <FlatList data={ props.data } renderItem={ renderItem } ListEmptyComponent={ renderEmpty } ItemSeparatorComponent={ itemSeparator } keyExtractor={ keyExtractor } />
        </Layout>
    );
}

export default EventsList;