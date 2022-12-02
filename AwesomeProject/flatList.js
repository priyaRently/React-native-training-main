import react from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList } from 'react-native';

const DATA = [
    { id: 'a', title: 'First' },
    { id: 'b', title: 'Second' },
    { id: 'c', title: 'Third' },
    { id: 'd', title: 'Four' },
    { id: 'e', title: 'Five' },
    { id: 'f', title: 'Six' },
    { id: 'g', title: 'Seven' },
    { id: 'h', title: 'Eight' },
    { id: 'i', title: 'Nine' },
    { id: 'j', title: 'Ten' }];

const Item = ({ title }) => (
    <View style={style.item}>
        <Text style={style.title}>{title}</Text>
    </View>
);
const componentFunc = () => {
    const renderItem = ({ item }) => (<Item title={item.title} />);
    return (
        <SafeAreaView style={style.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: { flex: 1, marginTop: 10 },
    item: {
        backgroundColor: 'pink',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: { fontSize: 32, color: 'black' }
});

export default componentFunc;