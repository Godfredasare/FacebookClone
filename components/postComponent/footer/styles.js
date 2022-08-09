import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
  

    likeCount:{
     flexDirection: 'row',
     alignItems: 'center',
     padding: 11

    },

    likeImage:{
        width: 30,
        height: 30,
    },

    count:{
        alignSelf: 'center',
        fontSize: 10,
        color: '#828282'
    },

    comsh:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    comment:{
        color: '#828282'
    },

    share:{
        color: '#828282'
    },

    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#e3ebd8',
        margin: 2,
   },

  iconsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },

  shares:{
    width: 32,
    height: 32,
    tintColor: '#828282'
  }
});

export default styles