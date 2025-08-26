import { ArrowRight, Mail, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import NumericLabel from '../NumericLabel'

const Contact = ({ section }) => {
    return (
        <section className="contact-section">
            <div className="overlay"></div>
            <div className="circle-top"></div>
            <div className="circle-bottom"></div>
            <NumericLabel label={section?.order} />

            <div className="container">
                <div className="text-center">
                    <div className="space-y-8">
                        <h2>
                            Ready to
                            <br />
                            <span className="text-gradient">Transform</span>
                            <br />
                            Your Stack?
                        </h2>

                        <p>
                            Join the revolution of institutional-grade infrastructure. Let&#39;s build something extraordinary together.
                        </p>

                        <div className="space-y-6">
                            <div className="cta-buttons">
                                <button className="btn-primary">
                                    <Mail className="w-5 h-5" />
                                    <span>Get Started Today</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className="btn-secondary">Schedule Demo</button>
                            </div>

                            <div className="features">
                                <div className="feature-item">
                                    <Shield className="w-4 h-4" />
                                    <span>Enterprise Security</span>
                                </div>
                                <div className="feature-item">
                                    <Users className="w-4 h-4" />
                                    <span>24/7 Support</span>
                                </div>
                                <div className="feature-item">
                                    <Zap className="w-4 h-4" />
                                    <span>Instant Setup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact