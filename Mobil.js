import React, {Component } from "react";
import {Text, View, FlatList, Button} from "react-native";
import {Card} from "react-native-paper";
import axios from 'axios';
import style from "./styles";
import GLOBALS from './Global';

const base_url = GLOBALS.BASE_URL+'mobil/';

class Mobil extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listData:[]
    };
  }
    componentDidMount() {
      this.ambilListData()
      this.willFocusSubscription = this.props.navigation.addListener(
        'focus',
        () => {
          this.ambilListData()
        }
      );
    }
  
    componentWillUnmount() {
      this.willFocusSubscription();
    }

    async ambilListData(){
      await axios.get(base_url)
      .then((response) => {
          console.log(response.data)
          this.setState({listData:response.data});
      })
    };

    render() {
      return(
        <View style={{flex1:1,padding:24}}>
            <Button title="Tambah Data" onPress={()=>this.props.navigation.navigate('MobilAdd')} color="#33cc33" />
            <FlatList style={{marginTop:20}}
            data={this.state.listData}
            keyExtractor={item=>item.id}
            renderItem={({ item }) => (
              <Card style={style.cardUtama}>
                <View>
                  <Text style={style.title}>{item.nama}</Text>
                  <Text style={style.detail}>Merek: {item.merek}</Text>
                  <Text style={style.detail}>Bahan Bakar: {item.bahan_bakar}</Text>
                  <Text style={style.detail}>Harga: Rp. {nominal_rupiah(item.harga)}</Text>

                </View>
                <View style={{flex: 1,flexDirection:'row',justifyContent:'flex-end',marginTop:20}}>
                  <Button title="Edit" onPress={()=>this.props.navigation.navigate('MobilEdit', { id: item.id })} />
                  <Button title="Delete" color="#FF3D00" onPress={()=>this.delete_data(item.id)} />
                </View>
              </Card>
            )}/>
        </View>
      );   
  }

    
  delete_data = async (id) => {
    try {
      const response = await axios.delete(base_url+id,{});
      if (response.status === 200) {
        alert("Data Berhasil Dihapus");
        this.ambilListData();
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

function nominal_rupiah(bilangan){
  var	number_string = bilangan.toString();
  var sisa 	= number_string.length % 3;
	var rupiah 	= number_string.substr(0, sisa);
	var ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
		
  if (ribuan) {
    var separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }
  return rupiah;
}
export default Mobil;