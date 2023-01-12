import {React} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import SEARCHSVG from '../assets/icons/search.svg';

const SearchBar = () => {
    return (
        <View style={styles.background}>
          {/* <SEARCHSVG/> */}
          <Text>Search bar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DEDEDE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 8
    }
})

export default SearchBar;