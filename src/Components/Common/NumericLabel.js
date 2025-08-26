import React from 'react'

const NumericLabel = ({ label }) => {
    let displayLabel = label;
    if (/^\d$/.test(label)) {
        displayLabel = `0${label}`;
    }
    return (
        <div className="psnl_numeric_label">{displayLabel}</div>
    )
}

export default NumericLabel