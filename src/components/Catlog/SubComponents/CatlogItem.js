import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import ReduxButton from "../../GlobalComponents/ReduxButton";
import GLOBAL from "../../Utils/Globals";

const CatlogItem = props => {
  const { catlogItem, cart, onPressAddtoCart } = props;
  var cartMap = [];
  cart.map(item => {
    console.log("item", item.id);
    cartMap.push(item.id);
  });
  var addedToCart = cartMap.includes(catlogItem.id);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: catlogItem.image }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
      <Text style={styles.textName}>{catlogItem.name}</Text>
      <Text style={{ marginVertical: 5 }}>{catlogItem.description}</Text>
      <View style={styles.viewPriceButton}>
        <View style={{ flex: 1 }}>
          <Text style={styles.priceText}>
            {GLOBAL.RUPPEE_SYMBOL + " " + catlogItem.price}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <ReduxButton
            title={addedToCart ? "Already in Cart" : "Add to Cart"}
            onPress={() => {
              onPressAddtoCart(catlogItem.id);
            }}
            disabled={addedToCart}
            style={{ backgroundColor: addedToCart ? "green" : "black" }}
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
  viewPriceButton: { flexDirection: "row", alignItems: "center" },
  priceText: { fontSize: 18, color: "green", fontWeight: "600" }
});

export default CatlogItem;
