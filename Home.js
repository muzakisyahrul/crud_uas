import { Button, Text, View } from "react-native";
import style from "./styles";

const Home = ({navigation}) =>{
    return (
        <View style={style.containerCenter}>
            <Text style={{fontSize:20,marginBottom:20}}>Pilihan Anda?</Text>
            <View style={style.buttonMenu}>
                <Button
                    onPress={()=>navigation.navigate('Mobil')}
                    title="Daftar Mobil"
                    color="#FF3D00"
                />
            </View> 
            <View style={[style.buttonMenu]}>
                <Button
                    onPress={()=>null}
                    title="Daftar Buku"
                    color="#FF3D00"
                />
            </View> 
        </View>
      );
}

export default Home;