import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import MapView, { Callout, MAP_TYPES, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapDataEn from "../../../data/capitals/Map/MapEn";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = (width * 100) / height;

const Map = () => {
  const { mapCapitalsItem } = useSelector((state) => state.CapitalsMapNames);
  const { t } = useTranslation();
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
  const [capital, setCapital] = useState("San Francisco");
  const [weather, setWeather] = useState("");
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  const mapRef = useRef(null);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  const animateRegion = () => {
    mapRef.current.animateCamera(
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
    const [scale, setScale] = useState(5);
    const [left, setLeft] = useState(0);
    const [color, setColor] = useState("transparent");
    const [pad, setPad] = useState(0);
    return (
      <Pressable
        onPressIn={() => (
          setScale(20), setLeft(70), setPad(20), setColor("lightgray")
        )}
        onPressOut={() => {
          setLetter(props.ltr);
          setLoading(true);
          setScale(5);
          setPad(0);
          setColor("transparent");
          // console.log("response");
        }}
      >
        <View
          style={{
            backgroundColor: color,
            paddingHorizontal: pad,
            paddingVertical: scale,
            marginLeft: left,
          }}
        >
          <Text>{props.ltr}</Text>
        </View>
      </Pressable>
    );
  };

  // Weather API
  const fetchWeather = async () => {
    const result = await fetch(
      `${BASE_URL}?lat=${ltd}&lon=${lng}&appid=${API_KEY}&units=metric`
    );
    const data = await result.json();
    setWeather(data);
    // console.log(JSON.stringify(data, null, 2));
  };

  useEffect(() => {
    fetchWeather();
  }, [ltd]);

  if (!weather) {
    return <ActivityIndicator />;
  }

  // const localTime = () => {
  //   let dateTime = new Date(weather.dt * 1000 + weather.timezone * 1000);

  
  //   let hour = (dateTime.getHours() % 24) - 1;
  //   let ampm = hour >= 12 ? "pm" : "am";

  //   let minutes = dateTime.getMinutes();
  //   let weekday = dateTime.toLocaleString('default', { weekday: 'long' });
  //   let month = dateTime.toLocaleString('default', { month: 'short' });
  //   let date = dateTime.getDate();

  //   return `${hour} : ${minutes<10 ? 0: ''}${minutes} `;
  //   return `${hour} : ${minutes} `;
  //   return `${hour} : ${minutes} ${ampm} - ${weekday} , ${month} ${date}`;
  // };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        // provider={PROVIDER_GOOGLE}
        provider="google"
        mapType={MAP_TYPES.TERRAIN}
        style={styles.map}
        initialRegion={region}
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
          <View style={{ gap: 40, flexDirection: "row" }}>
            <LetterButton ltr={t("ltr1")} />
            <LetterButton ltr={t("ltr2")} />
            <LetterButton ltr={t("ltr3")} />
            <LetterButton ltr={t("ltr4")} />
            <LetterButton ltr={t("ltr5")} />
            <LetterButton ltr={t("ltr6")} />
            <LetterButton ltr={t("ltr7")} />
            <LetterButton ltr={t("ltr8")} />
            <LetterButton ltr={t("ltr9")} />
            <LetterButton ltr={t("ltr10")} />
            <LetterButton ltr={t("ltr11")} />
            <LetterButton ltr={t("ltr12")} />
            <LetterButton ltr={t("ltr13")} />
            <LetterButton ltr={t("ltr14")} />
          </View>
        </ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AntDesign name="arrowright" size={12} color="black" />
        </View>
      </View>

      <View style={styles.weatherContainer}>
        {/* <Text>{weather.name}</Text> */}
        <Text>{capital}</Text>
        <Text style={[styles.weatherText, {fontSize: 30}]}>
          {Math.round(weather.main.temp)}°C
        </Text>
        {/* <Text style={[styles.weatherText, {fontSize: 14}]}>
          {t("localtime")}
        </Text>
        <Text style={[styles.weatherText, {fontSize: 20}]}>
          {localTime()}
        </Text> */}
          {/* {weather.dt*1000-(weather.timezone*1000)} */}
      </View>

      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          {/* {mapDataEn.map((item, index) => { */}
          {mapCapitalsItem.map((item, index) => {
            return (
              <View
                key={index}
                style={item.ltr != letter ? styles.bubble1 : styles.bubble}
              >
                {item.ltr === letter && (
                  <Pressable
                    key={index}
                    style={styles.button}
                    onPress={() => {
                      animateRegion(
                        setLtd(item.latitude),
                        setLng(item.longitude, setZoom(item.zoomLocation))
                      );
                      setLtd(item.latitude);
                      setLng(item.longitude);
                      setCapital(item.capital);
                      Alert.alert(item.capital, item.description);
                    }}
                  >
                    {/* {loading && (
                      <ActivityIndicator size="large" color="#0000ff" />
                    )}
                    <Image
                      style={styles.img}
                      source={item.img}
                      resizeMode="contain"
                      onLoadEnd={() => setLoading(false)}
                    /> */}
                    <View style={styles.buttonText}>
                      <Text style={{ fontWeight: "500" }}>{item.capital}</Text>
                      <Text style={{ fontSize: 12 }}>{item.country}</Text>
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
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
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
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContainer: {
    position: "absolute",
    top: 70,
    left: 40,
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 20,
  },
  weatherText: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 10,
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
