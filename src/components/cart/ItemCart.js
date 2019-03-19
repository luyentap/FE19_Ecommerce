import React,{Component} from 'react';
import {Link} from 'react-router-dom'

export default class Itemcart extends Component{
  render() {
    const {id,img,name,brand,price,quantity,clickRemove,addQuantity,subQuantity} = this.props;
    return (
      <tr className="shopping-cart__table__tr">
        <td><img src={img}/></td>
        <td> {name}</td>
        <td>{price}<sup>đ</sup></td>
        <td>
          <p>{quantity}</p>
          <button  onClick={subQuantity}><i className="fa fa-arrow-left"></i> </button>
          <button onClick={addQuantity}><i className="fa fa-arrow-right"></i> </button>
        </td>
        <td>{price*quantity}<sup>đ</sup></td>
        <td>
          <button onClick={clickRemove} value="0"><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    );
  }
}
