import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, FlatList, Alert } from 'react-native';
import { AlbumHomeItem } from '../../components';
import DropDown from '../../components/dropdown';
import { AlbumItemProps, UserItemModel } from '../../redux/models';
import { getAlbums, getUsers } from '../../redux/services/home';
const { height } = Dimensions.get('window');
import {
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
interface HomeProps {
    navigation: NavigationScreenProp<NavigationState>
}
const initialState = {
    albums: [],
    loading: true,
    users: [] as Array<UserItemModel>,
    selectedUser: {} as UserItemModel,
    userId: 0
}

const Home = (props: HomeProps) => {
    let homeProps: HomeProps = props;
    const [
        { userId, albums, loading, users, selectedUser }, setState
    ] = useState(initialState);

    const updateState = (newState: any) => {
        setState(prevState => ({ ...prevState, ...newState }));
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    useEffect(() => {
        fetchAlbums(selectedUser.id);
    }, [selectedUser]);

    const fetchUsers = () => {
        getUsers()
            .then(res => {
                let users = res as Array<UserItemModel>;
                updateState({ users, selectedUser: users[0] })
            }).catch(err => {
                updateState({ users: [] })
            })

    }
    const fetchAlbums = (userId: number) => {
        updateState({ loading: true });
        getAlbums(userId)
            .then(res => {
                updateState({ userId, albums: res, loading: false })
            }).catch(err => {
                updateState({ userId, albums: [], loading: false })
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.filterOptionsView}>
                <DropDown data={users} onSelect={(user) => updateState({ selectedUser: user })} />
            </View>
            <FlatList
                refreshing={loading}
                data={albums}
                extraData={albums}
                contentContainerStyle={{ flex: 1 }}
                ListHeaderComponent={() => <View style={{ height: 35 }} />}
                ListFooterComponent={() => <View style={{ height: 35 }} />}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                onRefresh={() => userId && fetchAlbums(userId)}
                ListEmptyComponent={() => <View style={styles.noAlbumsView}>
                    <Text style={styles.listEmptyText}>{userId ? 'No Albums Found!' : 'Please select owner to fetch albums'}</Text>
                </View>}
                renderItem={props => {
                    let item: AlbumItemProps = props.item
                    return <AlbumHomeItem onAlbumSelect={() => homeProps.navigation.navigate('photos', { id: item.id })} {...props} />
                }}
            />
        </View >
    );
};

export default Home;

const styles = StyleSheet.create({
    listEmptyText: {
        color: '#fff',
        fontSize: 18
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
        backgroundColor: '#2980b9'
    }
});
