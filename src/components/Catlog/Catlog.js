import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Util from "../Utils/Util";
import { connect } from "react-redux";
import store from "../Utils/Redux/Store";
import { actionTypes } from "../Utils/Redux/Reducers/CatlogReducer";
import { actionTypes as cartActionTypes } from "../Utils/Redux/Reducers/CartReducer";
import CatlogItem from "./SubComponents/CatlogItem";
import { bindActionCreators } from "redux";
import Title from "../GlobalComponents/Title";

const catlogData = require("./Utils/CatlogData.json");
class Catlog extends Component {
  componentDidMount() {
    this.checkDataAvailable();
  }
  checkDataAvailable = () => {
    if (this.props.catlog.length === 0) {
      this.loadData();
    }
  };
  addToCart = itemid => {
    store.dispatch({
      type: cartActionTypes.ADD_CART_ITEMS,
      payload: itemid
    });
    Util.showToast("Item Added");
  };
  loadData = () => {
    store.dispatch({
      type: actionTypes.ADD_CATLOG_ITEMS,
      payload: catlogData
    });
  };
  renderCatlog = ({ item }) => {
    return (
      <CatlogItem
        catlogItem={item}
        cart={this.props.cart}
        onPressAddtoCart={itemid => {
          this.addToCart(itemid);
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.viewContainer}>
        <Title title="Catlog" />
        <FlatList
          data={this.props.catlog}
          renderItem={this.renderCatlog}
          keyExtractor={(item, index) => {
            return item.id.toString();
          }}
          extraData={this.props.cart}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  catlog: state.catlog,
  cart: state.cart
});
const ActionCreators = Object.assign({}, cartActionTypes.ADD_CART_ITEMS);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 15
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catlog);