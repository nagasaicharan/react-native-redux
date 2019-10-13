import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import ReduxButton from "../../GlobalComponents/ReduxButton";
import GLOBAL from "../../Utils/Globals";

const CartItem = props => {
  const { cartItem, onPressRemove } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cartItem.image }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.textName}>{cartItem.name}</Text>
      <Text style={styles.textDescription}>{cartItem.description}</Text>
      <View style={styles.priceView}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textPrice}>
            {GLOBAL.RUPPEE_SYMBOL + " " + cartItem.price}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <ReduxButton
            title={"remove"}
            onPress={() => {
              onPressRemove(cartItem.id);
            }}
            style={{ backgroundColor: "tomato" }}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 5,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15
  },
  imageStyle: { width: 150, height: 150, alignSelf: "center" },
  textName: { fontSize: 18, color: "black", fontWeight: "600" },
  textDescription: { marginVertical: 5 },
  priceView: { flexDirection: "row", alignItems: "center" },
  textPrice: { fontSize: 18, color: "green", fontWeight: "600" }
});

export default CartItem;
