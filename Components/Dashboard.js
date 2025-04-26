import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Dashboard = ({route}) => {
  const {info} = route.params;
  return (
    <View style={{flex:1}}>
      {
        info?
       <View style={{gap:2}}>
         {info.challanNo? <View style={{flexDirection:"row"}}>
          <Text style={styles.text}>Challan No:-</Text>
          <Text>{info.challanNo}</Text>
          </View>:null}
         {info.ewayBill? <View style={{flexDirection:"row"}}>
          <Text style={styles.text}>E-Way Bill No 1:-</Text>
          <Text>{info.ewayBill}</Text>
          </View>:null}
          <View>
            {info.bill.length
              ? info.bill.map((e, index) => {
                  return (
                    <View key={e.id} style={{flexDirection:"row"}}>
                      <Text style={styles.text}>{`E-Way Bill No ${index + 2}:-`}</Text>
                      <Text> {e.value}</Text>
                    </View>
                  );
                })
              : null}
          </View>
          {info.clientInvoice?
          <View style={{flexDirection:"row"}}>
          <Text style={styles.text}>Client Invoice 1:-</Text>
          <Text>{info.clientInvoice}</Text>
          </View>:null}
          <View>
            {info.invoice.length
              ? info.invoice.map((e, index) => {
                  return (
                    <View key={e.id} style={{flexDirection:"row"}}>
                      <Text style={styles.text}>{`Client Invoice${index + 2}:-`}</Text>
                      <Text>{e.value}</Text>
                    </View>
                  );
                })
              : null}
          </View>
          {info.delNo?
          <View style={{flexDirection:"row"}}>
          <Text style={styles.text}>Del No:-</Text>
          <Text>{info.delNo}</Text>
          </View>:null}
          {info.gpsNo?
          <View style={{flexDirection:"row"}}>
          <Text style={styles.text}>Gps No:-</Text>
          <Text>{info.gpsNo}</Text>
          </View>:null}
          {info.ftNo?
          <View style={{flexDirection:"row"}}>
          <Text  style={styles.text}>Freight Tiger No:-</Text>
          <Text>{info.ftNo}</Text>
          </View>:null}
        </View>:<Text style={{alignSelf:"center",margin:"auto"}}>No Data Found</Text>
      }
    </View>
  );
};
const styles=StyleSheet.create({
  text:{
    color:"rgb(0, 0, 0)",
     fontWeight: 'bold'
  }
})

export default Dashboard;
