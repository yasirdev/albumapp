import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ImageComp } from '../imageComp';
interface AlbumHomeItemProps { }

const AlbumHomeItem = (props: AlbumHomeItemProps) => {
    return (
        <View style={styles.container}>
            <Text>AlbumHomeItem</Text>
        </View>
    );
};

export { AlbumHomeItem };

const styles = StyleSheet.create({
    container: {}
});
