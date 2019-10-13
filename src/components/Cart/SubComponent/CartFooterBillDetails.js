import React from "react";
import { StyleSheet, View, Text } from "react-native";
import GLOBAL from "../../Utils/Globals";

const CartFooterBillDetails = props => {
  const { cartDetails } = props;
  var price = 0;
  cartDetails.forEach(item => {
    price = price + item.price;
  });

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.textTitle}>Total Price</Text>
      </View>
      <View style={styles.viewPrice}>
        <Text style={styles.textPrice}>
          {GLOBAL.RUPPEE_SYMBOL + " " + price}
        </Text>
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
    padding: 15,
    flexDirection: "row"
  },
  subContainer: { alignSelf: "flex-start" },
  textTitle: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
    color: "black"
  },
  viewPrice: { alignItems: "flex-end", flex: 1 },
  textPrice: { fontSize: 16, color: "black" }
});

export default CartFooterBillDetails;
