import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RNCamera } from "react-native-camera"; // Import RNCamera from the library
import { FontFamily, Color } from "../GlobalStyles";

const Camera = () => {
  const onCapture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log(data.uri); // You can use the captured image data as needed
  };

  return (
    <View style={styles.camera}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      >
        {({ camera, status }) => {
          if (status !== "READY") return <View />;
          return (
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <Text style={styles.ambil}>Ambil</Text>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 16,
    backgroundColor: "#141414",
    position: "absolute",
    width: "100%",
  },
  ambil: {
    width: "57.83%",
    top: "34.38%",
    left: "21.08%",
    fontSize: 20,
    fontFamily: FontFamily.robotoRegular,
    color: Color.whiteLight,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: "7.58%",
    width: "42.56%",
    top: "77.01%",
    right: "28.72%",
    bottom: "15.4%",
    left: "28.72%",
    position: "absolute",
  },
  camera: {
    flex: 1,
    backgroundColor: "#fff",
  },
  preview: {
    flex: 1,
  },
});

export default Camera;
