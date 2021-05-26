import * as React from 'react';
import { ListRenderItemInfo, Dimensions, Text, View, StyleSheet, Pressable } from 'react-native';
import { AlbumItemProps } from '../../redux/models';
import { ImageComp } from '../imageComp';
const { width, height } = Dimensions.get('window');

interface PhotoItemProps extends ListRenderItemInfo<AlbumItemProps> {
    onImageSelect: () => void;
    isSelected: boolean
}

const PhotoItem = (props: PhotoItemProps) => {
    return (
        <Pressable onPress={() => {
            props.onImageSelect();

        }} style={[styles.container, props.isSelected ? { borderColor: '#fff' } : null]}>
            <ImageComp
                resizeMode='cover'
                containerStyle={styles.imageContainer}
                style={styles.imageContainer}
                source={{ uri: props.item.thumbnailUrl }} />
            <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 7, paddingHorizontal: 12 }}>
                <Text numberOfLines={2} style={styles.title}>{props.item.title}</Text>
            </View>
        </Pressable>
    );
};

export { PhotoItem };

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 18
    },
    imageContainer: {
        width: '100%',
        height: 100,
    },
    container: {
        borderWidth: 2,
        borderColor: 'transparent',
        marginBottom: 12,
        width: width / 4,
        flexDirection: 'row',
        marginVertical: (width / 4) / 6,
        marginHorizontal: (width / 4) / 6
    }
});
