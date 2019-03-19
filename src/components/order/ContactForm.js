import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class ContactForm extends Component{
  render() {
    return (
      <div className="container">
        <div className="register">
          <form className="form">
            <h3 className="form__title">THÔNG TIN CÁ NHÂN</h3>
            <div className="form-element">
              <label>Họ và Tên<span className="upper-text">*</span></label>
              <input className="form-element__name" />
            </div>
            <div className="form-element">
              <label>Địa chỉ<span className="upper-text">*</span></label>
              <input className="form-element__address"/>
            </div>
            <div className="form-element">
              <label>Điện thoại<span className="upper-text">*</span></label>
              <input className="form-element__phone"/></div>
            <div className="form-element form-element__button">
              <button onClick="location.href='payment-sucess.html'" type="button">Gửi</button>
              <button onClick="location.href='shopping-cart.html'" type="button"><i className="fa fa-undo"></i>Quay lại
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}
