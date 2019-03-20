import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {loadState} from "../../common/LocalSave";
import OrderService from "../../service/OrderService";

export default class ContactForm extends Component {
  orderProduct = (e) => {
    e.preventDefault();
    //lấy giá trị input thông tin người dùng
    let name = this.getName.value;
    let phone = this.getPhoneNumber.value;
    let address = this.getAddress.value;

    //lấy giá trị(cart+total) trong localstorage -->init reducer
    let addedItems = loadState("shoppingCart") || [];

    let data = {"cart": addedItems, personal: {name, phone, address}};
    OrderService.postOrder(data);
    // this.getName.value = "";
  }

  render() {
    return (
        <div className="register">
          <form className="form" onSubmit={this.orderProduct}>
            <h3 className="form__title">THÔNG TIN CÁ NHÂN</h3>
            <div className="form-element">
              <label>Họ và Tên<span className="upper-text">*</span></label>
              <input className="form-element__name" ref={(input) => this.getName = input}/>
            </div>
            <div className="form-element">
              <label>Địa chỉ<span className="upper-text">*</span></label>
              <input className="form-element__address" ref={(input) => this.getAddress = input}/>
            </div>
            <div className="form-element">
              <label>Điện thoại<span className="upper-text">*</span></label>
              <input className="form-element__phone" ref={(input) => this.getPhoneNumber = input}/>
            </div>
            <div className="form-element form-element__button">
              <button type="submit">Gửi</button>
              <Link to="/cart" >Quay về</Link>
            </div>
          </form>
        </div>
    );
  }

}
