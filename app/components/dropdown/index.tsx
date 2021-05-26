import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { UserItemModel } from '../../redux/models';


interface DropDownProps {
    data: Array<any>,
    onSelect: (item: any) => void
}

const DropDown = (props: DropDownProps) => {
    const [selected, setSelected] = React.useState<UserItemModel>();
    const [isShown, showOptions] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (props.data[0]) {
            setSelected(props.data[0])
        }
    }, [props.data])
    return (
        <View style={styles.container}>
            <Pressable onPress={() => showOptions(!isShown)} style={styles.subview}>
                <Text style={styles.filterTitle}>{selected?.name || 'Filter albums by owner'}</Text>
            </Pressable>
            {isShown ? <View style={styles.subContainer}>
                <FlatList
                    data={props.data}
                    ItemSeparatorComponent={() => <View style={styles.seperator} />}
                    renderItem={({ item, index }) => {
                        return <Pressable onPress={() => {
                            setSelected(item);
                            showOptions(false);
                            props.onSelect(item);
                        }} style={[styles.userItem, selected?.id == item.id ? { backgroundColor: '#2980b9' } : null]}>
                            <Text style={{ color: '#fff' }}>{item.name}</Text>
                        </Pressable>
                    }}
                />
            </View> : null
            }
        </View >
    );
};

export default DropDown;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'relative',
        width: '70%'
    },
    subview: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 12
    },
    filterTitle: {

    },
    seperator: {
        height: 0.5,
        backgroundColor: '#fff'
    },
    subContainer: {
        backgroundColor: '#3498db',
        width: '100%',
        position: 'absolute',
        top: 45,
        zIndex: 99999,
        height: 300
    },
    userItem: {
        padding: 12,
    }
});
