import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import Mobil from "./Mobil";
import MobilAdd from "./MobilAdd";
import MobilEdit from "./MobilEdit";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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



