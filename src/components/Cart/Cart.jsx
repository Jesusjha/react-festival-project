import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  return (
    <main className="cart__container">
      <p className="cart__title--p">YOUR PURCHASE</p>
      <section className="cart__purchase--items"></section>
      <section className="cart__price--container">
        <article className="cart__price--money">
          <p>100€</p>
          <p>Tax: 21%</p>
          <p>TOTAL: 100€</p>
        </article>
        <article className="cart__checkout--container">
          <Link to='/checkout'>
            <button className="cart__checkout--btn" type='button'>CHECKOUT</button>
          </Link>
        </article>
      </section>
    </main>
  )
}

export default Cart