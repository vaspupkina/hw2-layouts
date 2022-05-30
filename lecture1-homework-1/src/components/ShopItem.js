import React from 'react'
import PropTypes from 'prop-types'

function ShopItem({info}) {
    return (
        <div className="ShopItem">
            <img src={info.img} alt={info.name} width="64" height="64" />
            &nbsp;
            {info.name}
            &nbsp;
            <small>{info.color}</small>
            &nbsp;
            ${info.price}
            &nbsp;
            <button>ADD TO CART</button>
        </div>
    )
}

ShopItem.propTypes = {
    info : PropTypes.object.isRequired
}

export default ShopItem
