import React from 'react';
import { Layers, ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({
    sections,
    currentSection,
    onScrollToSection,
    logoText = 'STACK',
    className = ''
}) => {
    return (
        <nav className={`nav ${className}`}>
            <div className="nav__container">
                <div className="nav__logo">
                    <div className="nav__logo-icon">
                        <Layers className="nav__logo-icon-svg" />
                    </div>
                    <span className="nav__logo-text">{logoText}</span>
                </div>

                <div className="nav__menu">
                    {sections.map((section, index) => (
                        <button
                            key={section.id}
                            onClick={() => onScrollToSection(index)}
                            className={`nav__menu-item ${currentSection === index
                                ? 'nav__menu-item--active'
                                : 'nav__menu-item--inactive'
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>

                <div className="nav__controls">
                    <button
                        onClick={() => onScrollToSection(Math.max(0, currentSection - 1))}
                        className="nav__control-btn"
                        disabled={currentSection === 0}
                    >
                        <ChevronLeft className="nav__control-icon" />
                    </button>
                    <button
                        onClick={() => onScrollToSection(Math.min(sections.length - 1, currentSection + 1))}
                        className="nav__control-btn"
                        disabled={currentSection === sections.length - 1}
                    >
                        <ChevronRight className="nav__control-icon" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;