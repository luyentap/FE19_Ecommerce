import {ADD_QUANTITY, ADD_TO_CART, PRODUCT_FETCH_SUCCESS, REMOVE_ITEM, SUB_QUANTITY} from "../actions/ActionTypes";
import {combineReducers} from 'redux'
import ProductService from "../service/ProductService";
import React from "react";
import {loadState} from "../common/LocalSave";

//lấy giá trị(cart+total) trong localstorage -->init reducer
let initTotal = loadState("total")||0;
let initAddedItems = loadState("shoppingCart")||[];

let initSate = {
  products_new: [],
  products_hot: [],
  products_best: [],
  addedItems:initAddedItems,
  total: initTotal
}

export const productReducer = (state=initSate, action) =>{
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS :
      return Object.assign({},state,action.products)
    case ADD_TO_CART :
      //tìm kiếm sản phẩm vừa mới thêm vào
      var addedItem = state.products_hot.find(item=>item.id == action.id);
      //kiểm tra có tồn tại hay ko
      var existed_item= state.addedItems.find(item=> action.id == item.id);
      if(existed_item) {
        addedItem.quantity += 1
        return{
          ...state,
          total: state.total + addedItem.new_price
        }
      }
      else{
        addedItem.quantity = 1;
        //tính toán lại giá trị tổng mới
        let newTotal = state.total + addedItem.new_price
        return{
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total : newTotal
        }
      }
    case REMOVE_ITEM:
      //calculating the total
      var itemToRemove= state.addedItems.find(item=> action.id == item.id);
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
      console.log(itemToRemove);

      var new_items = state.addedItems.filter(item=> action.id != item.id);
      return{
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    case ADD_QUANTITY:
      var addedItem = state.addedItems.find(item=> item.id === action.id);
      addedItem.quantity += 1;

      var newTotal = state.total + addedItem.new_price;
      console.log("total",state.total);
      return{
        ...state,
        addedItems: [...state.addedItems],
        total : newTotal
      }
    case SUB_QUANTITY:
      var addedItem = state.addedItems.find(item=> item.id === action.id);
      //Nếu số lượng bằng 0, gỡ sản phẩm ra khỏi list
      if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.new_price
        return{
          ...state,
          addedItems: new_items,
          total: newTotal
        }
      }
      else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.new_price
        return{
          ...state,
          addedItems: [...state.addedItems],
          total: newTotal
        }
      }
    default: // need this for default case
      return state
  }
}
