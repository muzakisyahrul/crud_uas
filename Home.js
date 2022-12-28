import { Button, Text, TouchableOpacity, View, Dimensions, StyleSheet } from "react-native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import style from "./styles";

const width = Dimensions.get('window').width


const Home = ({navigation}) =>{
    return (
        <View style={style.containerCenter}>
            <Text style={{fontSize:20,marginBottom:20, color:'white'}}>Pilihan Anda?</Text>
            <View style={style.buttonMenu}>

                <TouchableOpacity onPress={()=>navigation.navigate('Mobil')}>
                    <View style={styles.btnContainerStyle}>
                        <Text style={styles.btnTextStyle}> Daftar Mobil </Text>
                    </View>
                </TouchableOpacity>
            </View> 
            
        </View>
      );
}

const styles = StyleSheet.create({
    btnContainerStyle: {
      backgroundColor: 'red',
      paddingVertical: 8,
      width: width / 1.1,
      borderRadius: 5
    },
    btnTextStyle: {
      color: '#ffffff',
      fontSize: 16,
      textTransform: 'uppercase',
      textAlign: 'center',
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'Quicksand-Medium'
    }
  })

export default Home;