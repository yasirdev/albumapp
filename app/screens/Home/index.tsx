import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getAlbums } from '../../redux/services/user';

interface HomeProps { }

const Home = (props: HomeProps) => {
    useEffect(() => {
        getAlbums()
    }, []);

    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {}
});
