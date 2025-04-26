import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const ChalanDetails = () => {
  const [challanNo,setChallanNo]=useState('')
  const [ewayBill,setEwayBill]=useState('')
  const [clientInvoice,setClientInvoice]=useState('')
  const[delNo,setDelNo]=useState('')
  const[gpsNo,setGpsNo]=useState('')
  const [ftNo,setFtNO]=useState('')
  const [bill, setBill] = useState([]);
  const [invoice,setInvoice]=useState([])
  const navigation=useNavigation()

  function addEwayBill() {
  let obj={
    id: Math.floor(Math.random() * 100) + 1,
    value:''
  }
  setBill([...bill,obj])
  }
  function addClientInvoice(){
    let obj={
        id:Math.floor(Math.random() * 100) + 1,
        value:''
    }
    setInvoice([...invoice,obj])
  }

  function submit(){
    let info={
      challanNo,
      ewayBill,
      clientInvoice,
      delNo,
      gpsNo,
      ftNo,
      bill,
      invoice
    }
    navigation.navigate('Dashboard',{info})
  }
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={styles.main}>
          <View style={{margin: 10, flexDirection: 'row', gap: 2}}>
            <Text>Mandatory fields</Text>
            <Text style={{color: 'red'}}>*</Text>
          </View>
          <View style={{margin: 8}}>
            <Text style={{alignSelf: 'center', color: 'blue', fontSize: 25}}>
              Identification Information
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Challan No</Text>
              <Text style={{color: 'red'}}>*</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Enter Challan No" style={styles.input} value={challanNo} onChangeText={(text)=>setChallanNo(text)} />
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.text}>E-Way Bill No 1</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.inputContainer, {width: '75%'}]}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter E-Way Bill No1"
                  value={ewayBill}
                  onChangeText={(text)=>setEwayBill(text)}
                />
             
      
              <Image source={{ uri: "https://i.ibb.co/sf4nVYK/qrcode-removebg-preview.png" }} style={{ width: 50,height:40,}} />

              </View>
              <View>
                <TouchableOpacity
                onPress={addEwayBill}
                  style={{
                    height: 48,
                    backgroundColor: 'blue',
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 12,
                  }}>
                  <Text style={{color: 'white', fontSize: 35}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            {bill.map((e,index) => {
              return (
               
                  <View  key={e.id}style={[styles.inputContainer, {width: '95%'}]}>
                    <TextInput
                    value={e.value}
                      style={styles.input}
                      placeholder={`Enter E-Way Bill No ${index+2}`}
                      onChangeText={(text)=>{
                        const updatedBill = [...bill];
                        updatedBill[index].value = text;
                        setBill(updatedBill);
                      }
                      }
                    />
                   <Image source={{ uri: "https://i.ibb.co/sf4nVYK/qrcode-removebg-preview.png" }} style={{ width: 50,height:40,}} />
                  </View>
                
              );
            })}
          </View>
          <View>
            <View>
              <Text style={styles.text}> Client Invoice 1</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.inputContainer, {width: '75%'}]}>
                <TextInput
                  style={styles.input}
                  placeholder="Client Invoice 1"
                  value={clientInvoice}
                  onChangeText={(text)=>setClientInvoice(text)}
                />
               <Image source={{ uri: "https://i.ibb.co/sf4nVYK/qrcode-removebg-preview.png" }} style={{ width: 50,height:40,}} />
              </View>
              <View>
                <TouchableOpacity
                onPress={addClientInvoice}
                  style={{
                    height: 48,
                    backgroundColor: 'blue',
                    width: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 12,
                  }}>
                  <Text style={{color: 'white', fontSize: 35}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            {invoice.map((e,index) => {
              return (
               
                  <View  key={e.id}style={[styles.inputContainer, {width: '95%'}]}>
                    <TextInput
                    value={e.value}
                      style={styles.input}
                      placeholder={`Client Invoice ${index+2}`}
                      onChangeText={(text)=>{
                        let updatedInvoice=[...invoice]
                        updatedInvoice[index].value=text
                        setInvoice(updatedInvoice)
                      }}
                    />
                 <Image source={{ uri: "https://i.ibb.co/sf4nVYK/qrcode-removebg-preview.png" }} style={{ width: 50,height:40,}} />
                  </View>
                
              );
            })}
          </View>
          <View>
            <View>
              <Text style={styles.text}>Del No</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Enter Del No" style={styles.input}  value={delNo} onChangeText={(text)=>setDelNo(text)}/>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.text}>GPS No</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Enter GPS No" style={styles.input}  value={gpsNo} onChangeText={(text)=>setGpsNo(text)}/>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.text}>Freight Tiger NO</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter Freight Tiger No"
                style={styles.input}
                value={ftNo}
                onChangeText={(text)=>setFtNO(text)}
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
            onPress={submit}
              style={{
                backgroundColor: 'green',
                height: 50,
                width: '50%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: 5,
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderColor: 'grey',
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
  },
  input: {
    width: '85%',
    fontSize: 19,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
    width: '95%',
  },
  icon: {
    marginLeft: 10,
  },
});

export default ChalanDetails;
