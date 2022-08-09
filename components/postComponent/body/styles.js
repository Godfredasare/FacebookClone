

import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container:{

    },

    postText:{
      marginTop: 10,
      marginLeft: 10,
      marginRight: 30,
      marginBottom: 10,
      fontWeight: '400',
      fontSize: 17
    },

    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        resizeMode: 'cover'
    }
});

export default styles