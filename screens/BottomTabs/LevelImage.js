import { View, Text, Image } from "react-native";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Student = require('../../assets/more/student.png')
const University = require('../../assets/more/university.png')
const testImg = require('../../assets/more/pilot-removebg.png')

const level1 = 'Kid'
const level2 = 'Student'
const level3 = 'Teacher'

const LevelImage = () => {
  const [image, setImage] = React.useState(0);
  React.useEffect(() => {
    getItem1();
    getItem2();
    getItem3();
  }, []);


  const getItem1 = () => {
    try {
      AsyncStorage.getItem("score1").then((value) => {
        if (value != null) {
          let score1 = JSON.parse(value);
          setImage(score1);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  const getItem2 = () => {
    try {
      AsyncStorage.getItem("score2").then((value) => {
        if (value != null) {
          let score2 = JSON.parse(value);
          setImage(score2)
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  const getItem3 = () => {
    try {
      AsyncStorage.getItem("score3").then((value) => {
        if (value != null) {
          let score3 = JSON.parse(value);
          setImage(score3)
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      {!image ? 
        <Image
          source={testImg}
          style={{ width: 100, height: 180 }}
        />
      : null}
      {image ? 
        <Image
          source={testImg}
          style={{ width: 100, height: 180 }}
        />
      : null}
      <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18 }}>
        {image && level1}
        {image && level2}
        {/* {image ? level2 : null}
        {image ? level3 : null} */}
      </Text>
    </View>
  );
};

export default LevelImage;
