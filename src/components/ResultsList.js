import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ResturantDetail } from "./ResturantDetail";
import { withNavigation } from "react-navigation";

const ResultsList = ({title, resturants, navigation}) => {
    if(!resturants.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                data={resturants}
                horizontal={true}
                keyExtractor={(currentResturant) => currentResturant.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResturantDetail', {id: item.id})}>
                            <ResturantDetail resturantDetails={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultsList);