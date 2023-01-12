import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const ResturantDetail = ({resturantDetails}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: resturantDetails.image_url}}
            />
            <Text style={styles.name}>{resturantDetails.name}</Text>
            <Text>{resturantDetails.rating} Stars, {resturantDetails.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
});
