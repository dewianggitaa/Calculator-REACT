import React from 'react'
import './Screen.css'
import { Textfit } from 'react-textfit'

const Screen = ({value}) => {
    return (
        <Textfit className='screen'>
            {value}
        </Textfit>
    )
}

export default Screen