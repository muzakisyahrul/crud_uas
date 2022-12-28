import React, {Component} from "react";
import { Button, Text, TouchableOpacity, View, FlatList, Dimensions, StyleSheet, SafeAreaView,TextInput } from "react-native";
import {Card} from "react-native-paper";
import axios from 'axios';
import style from "./styles";
import GLOBALS from './Global';
const width = Dimensions.get('window').width


const base_url = GLOBALS.BASE_URL+'mobil/';

class MobilAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            isLoading:false,
            nama:"",
            merek:"",
            bahan_bakar:"",
            harga:""
        };
      }

     onSubmitFormHandler =  async (event) => {
        var nama = this.state.nama;
        var merek = this.state.merek;
        var bahan_bakar = this.state.bahan_bakar;
        var harga = this.state.harga;
        var merek = this.state.merek;
        if (nama.trim()=="") {
          alert("Nama Tidak Boleh Kosong");
          return;
        }
        if (merek.trim()=="") {
            alert("Merek Tidak Boleh Kosong");
            return;
        }
        if (bahan_bakar.trim()=="") {
            alert("Bahan Bakar Tidak Boleh Kosong");
            return;
        }
        if (harga.trim()=="") {
            alert("Harga Tidak Boleh Kosong");
            return;
        }
        this.setState({isLoading:true});
        try {
          const response = await axios.post(base_url, {
            nama,
            merek,
            bahan_bakar,
            harga
          });
          if (response.status === 201) {
            alert("Data Berhasil Ditambahkan");
           this.setState({isLoading:false});
            this.props.navigation.goBack();
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
            alert(error.message);
         this.setState({isLoading:false});
        }
      };
 
      render() {
        return(
          <View style={{backgroundColor:'black',height:'100%'}}>
            <Card style={{padding:20,margin:20,backgroundColor:"#fff"}}>
            <View style={{flex1:1,padding:24}}>
                <SafeAreaView>
                    <Text style={style.label}>Nama Mobil</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Masukkan Nama Mobil"
                        placeholderTextColor="grey"
                        color='black'
                        onChangeText={(text)=>this.setState({nama:text})} 
                        value={this.state.nama}
                    />

                    <Text style={style.label}>Merek Mobil</Text>
                    <TextInput style={style.input}
                        placeholder="Masukkan Merek Mobil"
                        placeholderTextColor="grey"
                        color='black'
                        onChangeText={(text)=>this.setState({merek:text})} 
                        value={this.state.merek}
                    />

                    <Text style={style.label}>Bahan Bakar</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Masukkan Bahan Bakar Mobil"
                        placeholderTextColor="grey"
                        color='black'
                        onChangeText={(text)=>this.setState({bahan_bakar:text})} 
                        value={this.state.bahan_bakar}
                    />
                

                    <Text style={style.label}>Harga Mobil</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={style.input}
                        placeholder="Masukkan Harga Mobil"
                        placeholderTextColor="grey"
                        color='black'
                        onChangeText={(text)=>this.setState({harga:text})} 
                        value={this.state.harga}
                    />

                    <TouchableOpacity onPress={this.onSubmitFormHandler}
                    disabled={this.state.isLoading}>
                    <View style={styles.btnContainerStyle}>
                        <Text style={styles.btnTextStyle}> SIMPAN </Text>
                    </View>
                </TouchableOpacity>

                </SafeAreaView>
            </View>
        </Card>
        </View>
        );
      }

 
}
const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    //width: width / 1.1,
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

export default MobilAdd;