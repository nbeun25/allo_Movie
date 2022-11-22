import React from "react";

const Favorbtn = ({ action }) => {
    return (
        <div className="btn-favor" onClick={action}>
            <h3>Favoris</h3>
        </div>

    )
}

export default Favorbtn