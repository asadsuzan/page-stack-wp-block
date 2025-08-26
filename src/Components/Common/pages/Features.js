import { Award, Shield, Zap } from 'lucide-react'
import React from 'react'
import NumericLabel from '../NumericLabel'
import PageTitle from '../PageTitle';

const Features = ({ section }) => {
    const { title, order, description, buttons } = section || {};
    return (

        <section className="features-section">
            <div className="bg-overlay"></div>
            <div className="circle-blur"></div>
            <NumericLabel label={order} />

            <div className="container">
                <div className="text-block">
                    {/* <h2>
                        Institutional-Grade
                        <br />
                        <span className="text-gradient">Infrastructure</span>
                    </h2> */}
                    <PageTitle title={title} />
                    <p>
                        Stack&#39;s scalable digital-first and AI-powered operational infrastructure ensures every fund benefits from uniformity in processes, compliance, reporting, and risk management.
                    </p>

                    <div className="feature-list">
                        {[
                            { icon: <Award />, text: "99.9% Uptime Guarantee" },
                            { icon: <Shield />, text: "Enterprise Security Standards" },
                            { icon: <Zap />, text: "Real-time Performance Monitoring" }
                        ].map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <span className="feature-text">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="buttons">
                        <button className="btn-primary">Learn More</button>
                        <button className="btn-secondary">Documentation</button>
                    </div>
                </div>

                <div className="image-grid">
                    <div className="column">
                        <div className="image-block cyan"></div>
                        <div className="image-block purple"></div>
                    </div>
                    <div className="column mt-8">
                        <div className="image-block green"></div>
                        <div className="image-block orange"></div>
                    </div>
                </div>
            </div>
        </section>




    )
}

export default Features