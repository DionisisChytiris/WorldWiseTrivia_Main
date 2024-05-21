import React, { useState, useRef,useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";
import mapDataEn from "../../../data/worldMonuments/Map/MapEn";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = (width * 100) / height;

const Map = () => {
  const {mapMonumentsItem} =useSelector((state) => state.MonumentMapNames)
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * ASPECT_RATIO,
  });
  const [ltd, setLtd] = useState(37.78825);
  const [lng, setLng] = useState(-122.4324);
  const [zoom, setZoom] = useState(8);
  const [letter, setLetter] = useState("A");
  const [monument, setMonument] = useState("");
  const [loading, setLoading] = useState(true);

  const mapRef = useRef(null);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  const animateRegion = () => {
    mapRef.current.animateCamera(
      // { center: LocationRegion() },
      { center: LocationRegion(), zoom: zoom },
      { duration: 2000 }
    );
    setLtd(ltd), setLng(lng);
  };
  const LocationCoordinate = () => ({
    latitude: ltd,
    longitude: lng,
  });
  const LocationRegion = () => ({
    ...region,
    ...LocationCoordinate(),
  });

  const LetterButton = (props) => {
    const [scale, setScale]=useState(5)
    const [left, setLeft]=useState(0)
    const [color, setColor]=useState('transparent')
    return(
      <Pressable
        onPressIn={()=>(setScale(20),setLeft(70), setColor('lightgray'))}
        onPressOut={() => {
          setLetter(props.ltr);
          setLoading(true);
          setScale(5)
          setColor('transparent')
          // console.log("response");
        }}
      >
        <View style={{backgroundColor: color, paddingHorizontal: 20, paddingVertical: scale, marginLeft: left}}>
          <Text >{props.ltr}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        mapType={MAP_TYPES.TERRAIN}
        style={styles.map}
        initialRegion={region}
        provider={PROVIDER_GOOGLE}
        onRegionChange={onRegionChange}
      >
        <Marker
          coordinate={{
            latitude: ltd,
            longitude: lng,
          }}
        />
      </MapView>

      <View style={styles.letterButton}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AntDesign name="arrowleft" size={12} color="black" />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ gap: 0, flexDirection: "row" }}>
            <LetterButton ltr="A" />
            <LetterButton ltr="B" />
            <LetterButton ltr="C" />
            <LetterButton ltr="D-F" />
            <LetterButton ltr="G" />
            <LetterButton ltr="H-L" />
            <LetterButton ltr="M" />
            <LetterButton ltr="N-P" />
            <LetterButton ltr="R" />
            <LetterButton ltr="S" />
            <LetterButton ltr="T" />
            <LetterButton ltr="U-W" />
          </View>
        </ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AntDesign name="arrowright" size={12} color="black" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          {mapMonumentsItem.map((item, index) => {
            // const [test, setTest] =React.useState(1)
            return (
              <View
                key={index}
                style={item.ltr != letter ? styles.bubble1 : styles.bubble}
              >
                {item.ltr === letter && (
                  <Pressable
                    key={index}
                    style={[styles.button,{opacity: 1}]}
                    // onPressIn={()=>setTest(0.5)}
                    onPress={() => {
                      animateRegion(
                        setLtd(item.latitude),
                        setLng(item.longitude, setZoom(item.zoomLocation))
                      );
                      setLtd(item.latitude);
                      setLng(item.longitude);
                      // setTest(1)
                      Alert.alert(item.title,item.description)
                    }}
                  >
                    {loading && (
                      <ActivityIndicator size="large" color="#0000ff" />
                    )}
                    <Image
                      style={styles.img}
                      source={item.img}
                      resizeMode="contain"
                      onLoadEnd={() => setLoading(false)}
                    />
                    <View
                      style={{
                        flex: 1,
                        // height: '30%'
                      }}
                    >
                      <Text style={styles.buttonText}>{item.title}</Text>
                    </View>
                  </Pressable>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 20,
    margin: 5,
  },
  bubble1: {
    margin: 0,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  letterButton: {
    position: "absolute",
    top: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 7,
    flexDirection: "row",
    gap: 30,
    width: "95%",
  },
  button: {
    width: 149,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 149,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 11,
    textAlign: "center",
  },
});

export default Map;

// import { View, Text, Button } from "react-native";
// import React, { useState } from "react";
// import MapView from "react-native-maps";
// import { Marker, MAP_TYPES } from "react-native-maps";

// const Return = () => {
//   const [region, setRegion] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   const onRegionChange = (newRegion) => {
//     setRegion(newRegion);

//   };
//   const changeLocation = () => {
//     setRegion({
//       latitude: 40.7128,
//       longitude: -74.006,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });
//   };
//   const [ltd, setLtd] = React.useState(37.78825);
//   const [lngt, setLngt] = React.useState(-122.4324);

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//        ref={(ref) => {
//         map = ref;
//       }}
//       mapType={MAP_TYPES.STANDARD}
//         style={{ flex: 1 }}
//         initialRegion={region}
//         onRegionChange={onRegionChange}
//       >
//         <Marker
//           coordinate={{
//             latitude: ltd,
//             longitude: lngt,
//           }}
//           />
//       </MapView>
//       <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
//         <Button
//           title="Change Location"
//           onPress={() => {
//             setRegion({
//               latitude: 40.7128,
//               longitude: -74.006,
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             });
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Return;
