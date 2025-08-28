import { ArrowRight, Play } from "lucide-react";
import NumericLabel from "../NumericLabel";
import PageTitle from "../PageTitle";
import PageDescription from "../PageDescription";
import BtnGroup from "../Buttons/BtnGroup";

const Hero = ({ section }) => {
  const { order, title, description, buttons } = section || {};
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <NumericLabel label={section?.order} />

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-text-content">
              <PageTitle title={title} />
              {/* <p className="hero-description">
                                Crafting extraordinary experiences through precision engineering and innovative design methodologies.
                            </p> */}
              <PageDescription {...{ description }} />
            </div>

            {/* <div className="hero-buttons">
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
                        </div> */}
            <BtnGroup {...{ buttons }} />
          </div>

          <div className="hero-visual">
            <div className="hero-main-card"></div>
            <div className="hero-accent-card-1"></div>
            <div className="hero-accent-card-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
