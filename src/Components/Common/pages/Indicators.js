import React from 'react'

const Indicators = ({ sections, handleClick, currentSection, className = "" }) => {
    return (

        <div className={`indicators ${className}`}>
            {sections.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`indicators__dot ${currentSection === index
                        ? 'indicators__dot--active'
                        : 'indicators__dot--inactive'
                        }`}
                />
            ))}
        </div>
    )
}

export default Indicators