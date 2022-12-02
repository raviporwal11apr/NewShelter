import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mb-5">
            <img src={loading} alt="Spinner" />
        </div>
    )
}

export default Spinner
