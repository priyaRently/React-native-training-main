import react from 'react';
import {
    Text, View, StyleSheet, SafeAreaView,
    ScrollView, StatusBar, SectionList
} from 'react-native';

const DATA = [
    {
        title: "Main Dishes",
        data: ['Pizza', 'Burger', 'Pasta']
    },
    {
        title: "Sides",
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
    },
    {
        title: "Drinks",
        data: ['Water', 'Coke', 'Beer']
    },
    {
        title: "Desserts",
        data: ['Cheese Cake', 'Ice Cream']
    }
];
const Item = ({ title }) => (
    <View style={style.item}>
        <Text style={style.title}>{title}</Text>
    </View>
);

const componentFunc = () => {
    return (
        <SafeAreaView style={style.container}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={style.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 10,
        marginHorizontal: 16
    },
    item: { backgroundColor: 'cadetblue', padding: 20, marginVertical: 8 },
    header: { fontSize: 32, backgroundColor: 'indianred', fontWeight: 'bold', textAlign: 'center' },
    title: { fontSize: 24, color: 'white' }
});

export default componentFunc;