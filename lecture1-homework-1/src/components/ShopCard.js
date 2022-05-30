import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({info}) {
  return (
    <div className="ShopCard">
        {info.name}<br/>
        <small>{info.color}</small><br/>
        <img src={info.img} alt={info.name} width="200" height="200" /><br/>
        ${info.price} <button>ADD TO CART</button>
    </div>
  )
}

ShopCard.propTypes = {
    info : PropTypes.object.isRequired
}

export default ShopCard
