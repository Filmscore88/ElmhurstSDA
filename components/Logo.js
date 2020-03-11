import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../image/logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 65,
    width: 65,
    borderRadius: 75
  }
});

export default Logo;
