import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GetData = ({ capturedImage }) => {
  return (
    <View style={styles.getdata}>
      <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
      {/* Your other UI components */}
    </View>
  );
};

const styles = StyleSheet.create({
  capturedImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  // Rest of your styles
});

export default GetData;
