import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const HomeLayout = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {props.children}
            </ScrollView>
            
            <View style={styles.footer}>
                { props.footer }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        backgroundColor: '#EAEAEA',
        paddingVertical: 15,
        elevation: 2
    }
})

export default HomeLayout;