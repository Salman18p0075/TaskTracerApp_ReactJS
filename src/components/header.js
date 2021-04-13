import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'

const Header = ({title,onAdd,showAdd}) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Buttons color={showAdd ? 'Red' : 'Green'} text={showAdd ? 'Hide' : 'Add'} onClick={onAdd} />
            
        </header>
    )
}

Header.defaultProps = { 
    title:'task tracker',
}

Header.propTypes = {
    title:PropTypes.string,
    color:PropTypes.string,
    text:PropTypes.string,
    
}

export default Header
