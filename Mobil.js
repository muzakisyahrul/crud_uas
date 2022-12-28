import React, {Component } from "react";

import { Button, Text, TouchableOpacity, View, FlatList, Dimensions, StyleSheet } from "react-native";
import {Card} from "react-native-paper";
import axios from 'axios';
import style from "./styles";
import GLOBALS from './Global';
const width = Dimensions.get('window').width

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
        <View style={{flex1:1,padding:24,backgroundColor:'black',height:'100%'}}>
            
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MobilAdd')}>
                    <View style={styles.btnContainerStyle}>
                        <Text style={styles.btnTextStyle}> Tambah Data Mobil </Text>
                    </View>
            </TouchableOpacity>

            <FlatList style={{marginTop:20}}
            data={this.state.listData}
            keyExtractor={item=>item.id}
            renderItem={({ item }) => (
              <Card style={style.cardUtama}>
                <View>
                  <Text style={style.title}>{item.nama}</Text>
                  <Text style={style.detail}>Merek             : {item.merek}</Text>
                  <Text style={style.detail}>Bahan Bakar : {item.bahan_bakar}</Text>
                  <Text style={style.detail}>Harga             : Rp. {nominal_rupiah(item.harga)}</Text>

                </View>
                <View style={{flex: 1,flexDirection:'row',justifyContent:'flex-end',marginTop:20}}>
                  
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('MobilEdit', { id: item.id })}>
                    <View style={styles.btnContainerStyle1}>
                        <Text style={styles.btnTextStyle}> EDIT </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>this.delete_data(item.id)}>
                    <View style={styles.btnContainerStyle2}>
                        <Text style={styles.btnTextStyle}> DELETE </Text>
                    </View>
                  </TouchableOpacity>



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

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: 'green',
    paddingVertical: 8,
    width: width / 1.1,
    borderRadius: 5
  },
  btnContainerStyle1: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    width: width / 5,
    borderRadius: 5, marginRight:5
  },
  btnContainerStyle2: {
    backgroundColor: 'red',
    paddingVertical: 8,
    width: width / 5,
    borderRadius: 5
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    justifyContent: 'center', 
    alignItems: 'center',
    fontFamily: 'monsserat'
  }
})
export default Mobil;