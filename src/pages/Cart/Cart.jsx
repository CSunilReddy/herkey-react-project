import React from 'react'
import { connect } from 'react-redux'
import CardComponent from '../../components/Card/CardComponent'
import { NavLink } from 'react-router-dom'

const Cart = ({cart}) => {
  return (
    <>
        <div className='productsSection'>
            <h3>Products in Cart</h3>
            {cart.length > 0 ? <CardComponent productsList = {cart}/> : <p>No products added to cart <NavLink to="/">Back</NavLink></p> }
        </div>
    </>
  )
}
const mapStateToProps = (state) => {
    return {cart: state.cart}
}
export default connect(mapStateToProps,null)(Cart)
