import {
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, View, StyleSheet, FlatList, Alert, Text, Button, Pressable, Image } from 'react-native';
import { PhotoItem } from '../../components';
import DropDown from '../../components/dropdown';
import { AlbumItemProps, UserItemModel } from '../../redux/models';
import { getAlbums, getPhotos, getUsers } from '../../redux/services/home';
import { ImageComp } from '../../components/imageComp';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const { height } = Dimensions.get('window');
interface HomeProps {
    navigation: NavigationScreenProp<NavigationState>;
    route: any
}
const initialState = {
    photos: [],
    loading: true,
    selectedPhotoUrl: '',
    selectedPhoto: {} as AlbumItemProps,
    selectedIndex: 0
}

const Album = (props: HomeProps) => {
    let album = props.route.params.album;

    const [
        { selectedPhoto, selectedIndex, photos, loading }, setState
    ] = useState(initialState);

    const updateState = (newState: any) => {
        setState(prevState => ({ ...prevState, ...newState }));
    }

    useEffect(() => {
        fetchPhotos();
        props.navigation.setOptions({ title: album.title })
    }, []);


    const fetchPhotos = () => {
        getPhotos(album.id)
            .then(res => {
                let selectedPhoto = res[0];
                updateState({ photos: res, selectedPhoto, selectedIndex: 0, loading: false })
            }).catch(err => {
                updateState({ photos: [], loading: false })
            })

    }

    let listViewRef = useRef<any>(null);

    const onPrev = (type: number) => {
        let _selectedIndex = selectedIndex;
        if (type == 1) _selectedIndex--
        else _selectedIndex++
        updateState({
            selectedPhoto: photos[_selectedIndex],
            selectedIndex: _selectedIndex
        });
        listViewRef.current.scrollToIndex({
            animated: true,
            index: Math.floor(_selectedIndex / 3),
        });
    }

    const isDisabled = (type: number) => {
        if (type == 1) return selectedIndex == 0
        else return selectedIndex == photos.length - 1
    }
    return (
        <View style={styles.container}>

            {selectedPhoto['url'] && <><View style={styles.imageContainerView}>
                <View style={{ position: 'absolute', width: '100%' }}>
                    <ImageComp
                        resizeMode={'cover'}
                        style={styles.mainImage}
                        containerStyle={styles.mainImage}
                        source={{ uri: selectedPhoto.url }}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable disabled={isDisabled(1)} onPress={() => onPrev(1)} style={[styles.nextPrevButton, isDisabled(1) ? { opacity: 0.5 } : null]}><Image style={styles.nextBtnImage} source={require('../../assets/prev.png')} /></Pressable>
                    <Pressable disabled={isDisabled(2)} onPress={() => onPrev(2)} style={[styles.nextPrevButton, isDisabled(2) ? { opacity: 0.5 } : null]}><Image style={styles.nextBtnImage} source={require('../../assets/next.png')} /></Pressable>
                </View>
            </View>

                <Text style={{ paddingHorizontal: 10, paddingVertical: 10, textAlign: 'center' }} numberOfLines={1}>{selectedPhoto.title}</Text>

            </>
            }
            <FlatList
                refreshing={loading}
                data={photos}
                onRefresh={() => fetchPhotos()}
                extraData={photos}
                numColumns={3}
                ref={listViewRef}
                renderItem={props => {
                    let photo = props.item as AlbumItemProps;
                    return <PhotoItem
                        isSelected={selectedPhoto.id == photo.id}
                        onImageSelect={() => updateState({
                            selectedIndex: props.index,
                            selectedPhoto: photo,
                        })} {...props} />
                }}
            />
        </View >
    );
};

export default Album;

const styles = StyleSheet.create({
    imageContainerView: {
        position: 'relative',
        height: 250,
        justifyContent: 'center',
    },
    mainImage: {
        width: '100%',
        height: 250
    },
    noAlbumsView: {
        flex: 1,
        // height: height - 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterOptionsView: {
        position: 'absolute',
        width: '100%',
        margin: 10,
        zIndex: 999,
        alignItems: 'flex-end'
    },
    container: {
        flex: 1,
        backgroundColor: '#bdc3c7'
    },
    nextPrevButton: {
        padding: 10,
    },
    nextBtnImage: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        tintColor: '#fff'
    }
});
