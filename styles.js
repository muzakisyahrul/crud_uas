import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    containerCenter:{
        flex: 1,flexDirection: 'column',alignItems: 'center',justifyContent:'center'
    },
    buttonMenu:{
        width: "90%", margin: 10
    },

    tinyLogo: {
        width: 50,
        height: 50,
      },
   
    cardUtama:{
        shadowColor:{width:0,height:2},
        shadowOpacity:0.5,
        marginHorizontal:5,
        marginVertical:10,
        padding:20
    },
   
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        marginBottom:10
    },
  
    detail:{
        fontSize:15,
        color:"#000"
    },
    label:{
        color:"#000",
        fontWeight:'bold',
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom:20,
        backgroundColor:"#fff",
        borderColor:"#acb0b0",
        borderRadius:5
      },
});

export default styles;