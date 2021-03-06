import * as React from 'react';
import { ListRenderItemInfo, Dimensions, Text, View, StyleSheet, Pressable } from 'react-native';
import { AlbumItemProps } from '../../redux/models';
import { ImageComp } from '../imageComp';
const { width, height } = Dimensions.get('window');

interface AlbumHomeItemProps extends ListRenderItemInfo<AlbumItemProps> {
    viewStyles?: any
    onAlbumSelect: () => void
}

const AlbumHomeItem = (props: AlbumHomeItemProps) => {
    return (
        <Pressable onPress={props.onAlbumSelect} style={[styles.container, props.viewStyles]}>
            <ImageComp
                resizeMode='center'
                containerStyle={styles.imageContainer}
                style={styles.imageContainer}
                source={{ uri: props.item.thumbnailUrl }} />
            <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 12 }}>
                <Text numberOfLines={2} style={styles.title}>{props.item.title}</Text>
            </View>
        </Pressable>
    );
};

export { AlbumHomeItem };

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 18
    },
    imageContainer: {
        width: width / 2.5,
        height: 100,
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 10
    }
});
