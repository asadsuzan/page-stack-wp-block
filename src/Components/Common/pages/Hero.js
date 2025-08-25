import { ArrowRight, Play } from 'lucide-react'


const Hero = ({ section }) => {
    return (
        <section className="hero-section">
            <div className="hero-overlay" />
            <div className="hero-number">01</div>

            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-text-content">
                            <h1 className="hero-title">
                                Deep
                                <br />
                                <span className="hero-title-gradient">
                                    Specialization
                                </span>
                            </h1>
                            <p className="hero-description">
                                Crafting extraordinary experiences through precision engineering and innovative design methodologies.
                            </p>
                        </div>

                        <div className="hero-buttons">
                            <button className="hero-button-primary">
                                <span>Explore More</span>
                                <ArrowRight className="arrow-icon" />
                            </button>
                            <button className="hero-button-secondary">
                                <div className="hero-play-button">
                                    <Play className="hero-play-icon" />
                                </div>
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-main-card"></div>
                        <div className="hero-accent-card-1"></div>
                        <div className="hero-accent-card-2"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero