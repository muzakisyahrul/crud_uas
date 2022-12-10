import React, {Component} from "react";
import {Text, View,  Button,SafeAreaView,TextInput} from "react-native";
import {Card} from "react-native-paper";
import axios from 'axios';
import style from "./styles";
import GLOBALS from './Global';


const base_url = GLOBALS.BASE_URL+'mobil/';

class MobilEdit extends Component {
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

        this.id_edit = this.props.route.params.id;
        
      }

      componentDidMount() {
        this.getData();
      }

      getData(){
        axios.get(base_url+this.id_edit)
        .then((response) => {
            console.log(response.data)
            var data = response.data;
            this.setState({nama:data.nama});
            this.setState({merek:data.merek});
            this.setState({bahan_bakar:data.bahan_bakar});
            this.setState({harga:data.harga.toString()});
        })
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
          const response = await axios.put(base_url+this.id_edit, {
            nama,
            merek,
            bahan_bakar,
            harga
          });
          if (response.status === 200) {
            alert("Data Berhasil Diubah");
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
            <Card style={{padding:20,margin:20,backgroundColor:"#fff"}}>
            <View style={{flex1:1,padding:24}}>
                <SafeAreaView>
                    <Text style={style.label}>Nama Mobil</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Masukkan Nama Mobil"
                        onChangeText={(text)=>this.setState({nama:text})} 
                        value={this.state.nama}
                    />

                    <Text style={style.label}>Merek Mobil</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Masukkan Merek Mobil"
                        onChangeText={(text)=>this.setState({merek:text})} 
                        value={this.state.merek}
                    />

                    <Text style={style.label}>Bahan Bakar</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Masukkan Bahan Bakar Mobil"
                        onChangeText={(text)=>this.setState({bahan_bakar:text})} 
                        value={this.state.bahan_bakar}
                    />
                

                    <Text style={style.label}>Harga Mobil</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={style.input}
                        placeholder="Masukkan Harga Mobil"
                        onChangeText={(text)=>this.setState({harga:text})} 
                        value={this.state.harga}
                    />

                    <Button
                    title="Simpan"
                    onPress={this.onSubmitFormHandler}
                    disabled={this.state.isLoading}
                />
                </SafeAreaView>
            </View>
        </Card>
        );
      }

 
}

export default MobilEdit;