import { ArrowRight, Mail, Shield, Users, Zap } from 'lucide-react'
import React from 'react'
import NumericLabel from '../NumericLabel'
import PageTitle from '../PageTitle';
import PageDescription from '../PageDescription';

const Contact = ({ section }) => {
    const { order, title, description, buttons } = section || {};
    return (
        <section className="contact-section">
            <div className="overlay"></div>
            <div className="circle-top"></div>
            <div className="circle-bottom"></div>
            <NumericLabel label={order} />

            <div className="container">
                <div className="text-center">
                    <div className="space-y-8">
                        {/* <h2>
                            Ready to
                            <br />
                            <span className="text-gradient">Transform</span>
                            <br />
                            Your Stack?
                        </h2> */}

                        <PageTitle title={title} />

                        {/* <p>
                            Join the revolution of institutional-grade infrastructure. Let&#39;s build something extraordinary together.
                        </p> */}
                        <PageDescription {...{ description }} />

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