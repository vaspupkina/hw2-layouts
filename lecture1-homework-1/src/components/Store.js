import React from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import ListView from './ListView'

function Store({listMode, products, onSwitch}) {
    return (
    <div>
        <div style={{float: 'right', marginRight: 15, marginTop : 15, cursor: 'pointer'}}>
            <IconSwitch icon={listMode ? "view_module" : "view_list"} onSwitch={onSwitch} />
        </div>
        <br/><br/>
        {
            listMode ? <ListView items={products}/> : <CardsView cards={products}/> 
        }        
    </div>
    )
}

Store.propTypes = {
    listMode : PropTypes.bool.isRequired,
    products : PropTypes.arrayOf(PropTypes.object).isRequired,
    onSwitch : PropTypes.func.isRequired
}

export default Store