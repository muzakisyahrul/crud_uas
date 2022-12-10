import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image,Text, View} from "react-native";

import style from "./styles";

import Home from "./Home";
import Mobil from "./Mobil";
import MobilAdd from "./MobilAdd";
import MobilEdit from "./MobilEdit";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ title: 'SplashScreen', headerShown: false }}
          />
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: "Home",
          headerTitleStyle:{
            fontWeight:'bold',
          },
          headerBackVisible:false
      }}
        />

        {/* Start Route CRUD Mobil */}
         <Stack.Screen name="Mobil" component={Mobil}
          options={{
            title: "Daftar Mobil",
          }}
        />

        <Stack.Screen name="MobilAdd" component={MobilAdd}
          options={{
            title: "Tambah Mobil",
          }}
        />
        <Stack.Screen name="MobilEdit" component={MobilEdit}
          options={{
            title: "Edit Mobil",
          }}
        />
        {/* End Route CRUD Mobil */}
             
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SplashScreen = ({ navigation }) => {
  setTimeout(() => { 
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Home',
            params: {},
          },
        ],
      })
    )
  }, 3000)
  return <View style={style.containerCenter}>
   <Image  style={style.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
        <Text style={{marginTop:20,color:'#000',fontSize:20}}>Loading....</Text>
  </View>;
};



