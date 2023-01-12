import {React} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SearchSvg from '../assets/icons/search.svg';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
          <SearchSvg width="35" height="35" style={styles.svgStyle}/>
          <TextInput 
                placeholder='Search' 
                style={styles.textStyle}
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
           /> 
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: 'row',
        backgroundColor: '#DEDEDE',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 10
    },
    textStyle: {
        flex: 1,
        fontSize: 18
    },
    svgStyle: {
        marginHorizontal: 10,
        alignSelf: 'center'
    }
})

export default SearchBar;