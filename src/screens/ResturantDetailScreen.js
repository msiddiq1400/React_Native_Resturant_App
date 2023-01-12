import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

export const ResturantDetailScreen = ({navigation}) => {
    const [resturantDetail, setResturantDetail] = useState(null);
    const id = navigation.getParam('id');

    const getSingleResturantDetail = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResturantDetail(response.data);
    }

    if(!resturantDetail) return;

    useEffect(() => {
        getSingleResturantDetail(id);
    }, [])

    return (
        <>
            <FlatList 
                data={resturantDetail.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <Image 
                            source={{uri: item}}
                            style={styles.image}
                        />
                    );
                }}  
            />
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
});