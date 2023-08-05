import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Camera = () => {
  	
  	return (
    		<View style={styles.camera}>
      			<View style={styles.rectangleParent}>
        				<View style={styles.groupChild} />
        				<Text style={styles.ambil}>Ambil</Text>
      			</View>
    		</View>);
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
    		width: "100%"
  	},
  	ambil: {
    		width: "57.83%",
    		top: "34.38%",
    		left: "21.08%",
    		fontSize: 20,
    		fontFamily: FontFamily.robotoRegular,
    		color: Color.whiteLight,
    		textAlign: "center",
    		position: "absolute"
  	},
  	rectangleParent: {
    		height: "7.58%",
    		width: "42.56%",
    		top: "77.01%",
    		right: "28.72%",
    		bottom: "15.4%",
    		left: "28.72%",
    		position: "absolute"
  	},
  	camera: {
    		borderRadius: 46,
    		backgroundColor: "#fff",
    		flex: 1,
    		height: 844,
    		overflow: "hidden",
    		width: "100%"
  	}
});

export default Camera;
