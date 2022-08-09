import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginLeft: 11,
        marginRight: 11,
       flex: 1,
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent: 'space-between',

    },

    profile: {
      flex: 1,
      flexDirection: 'row'
    },

    namePostedAt:{
      alighSelf: 'center',
      marginLeft: 5
    },

    name:{
      fontSize: 14,
      fontWeight: '400',
    },

    postedAt:{
      color: '#9fa6a1'
    },

    icons:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 61,
    },
});

export default styles