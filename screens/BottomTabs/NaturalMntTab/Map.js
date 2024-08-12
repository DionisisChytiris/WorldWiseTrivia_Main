import {  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,} from 'react-native'
import React, { useState, useRef,useCallback }  from 'react'
import { AntDesign } from "@expo/vector-icons";
import MapView, { MAP_TYPES, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MapDataEn from '../../../data/naturalMnts/Map/MapEn';
import MapDataEl from '../../../data/naturalMnts/Map/MapEl';
import MapDataEs from '../../../data/naturalMnts/Map/MapEs';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = (width * 100) / height;

const Map = () => {
  const dataMap = MapDataEs
  const {mapNaturalMntItem} =useSelector((state) => state.NaturalMntMapNames)
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
        provider={MapView.PROVIDER_GOOGLE}
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
            <LetterButton ltr={t("Ntrltr1")}/>
            <LetterButton ltr={t("Ntrltr2")}/>
            <LetterButton ltr={t("Ntrltr3")} />
            <LetterButton ltr={t("Ntrltr4")} />
            <LetterButton ltr={t("Ntrltr5")}/>
            <LetterButton ltr={t("Ntrltr6")} />
            <LetterButton ltr={t("Ntrltr7")} />
            <LetterButton ltr={t("Ntrltr8")} />
            <LetterButton ltr={t("Ntrltr9")}/>
            <LetterButton ltr={t("Ntrltr10")}/>
            <LetterButton ltr={t("Ntrltr11")} />
            <LetterButton ltr={t("Ntrltr12")}/>
            <LetterButton ltr={t("Ntrltr13")}/>
          </View>
        </ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AntDesign name="arrowright" size={12} color="black" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <ScrollView horizontal={true}>
          {mapNaturalMntItem.map((item, index) => {
          // {mapMonumentsItem.map((item, index) => {
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
  )
}

export default Map


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFill,
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
