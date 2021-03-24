import React from "react";
import { plusCounter, minusCounter } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, View, StyleSheet, StatusBar, Text,} from "react-native";

const counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((data) => data.counter);
  return (
    <View style={styles.container}>
      <StatusBar
            animated
            barStyle="dark-content"
            backgroundColor="transparent"
          />
      
      <Text style={styles.persentase}>{counter + "%"}</Text>
      
      <View style={styles.atasbawah}>
        <TouchableOpacity
          style={styles.tombolTambah}
          onPress={() => dispatch(plusCounter(counter))}
        >
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tombolKurang}
          onPress={() => dispatch(minusCounter(counter))}
         >
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: "#fff",
    paddingTop: 250,
    margin: 10,
  },
  atasbawah: {
    flex: 1,
  },  
  persentase: {
    fontSize: 60,
    marginLeft: 20,
    marginRight: 20,
    color: '#000000',
    fontWeight: "bold",
  },
   text: {
    fontSize: 60,
    color: "#ffffff",
    fontWeight: "bold",
  },
  tombolKurang: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  tombolTambah: {
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
});

export default counter;
