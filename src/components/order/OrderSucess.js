import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class OrderSucess extends Component{
  render() {
    return (
      <div>
      <div className="container" style="padding-top:40px">
        <div className="step-payment">
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 1:</div>
            <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 2:</div>
            <div className="step-payment__item__content">Thông tin thanh toán</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 3:</div>
            <div className="step-payment__item__content">Thông báo kết quả</div>
          </div>
        </div>
      </div>
      </div>
    );
  }

}
