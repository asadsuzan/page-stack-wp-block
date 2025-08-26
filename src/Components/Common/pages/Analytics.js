import React from 'react'
import NumericLabel from '../NumericLabel'

const Analytics = ({ section }) => {
    return (
        <section className="analytics-section">
            <div className="overlay"></div>
            <div className="blob-top"></div>
            <div className="blob-bottom"></div>
            <NumericLabel label={section?.order} />

            <div className="analytics-container">
                <div className="analytics-grid">
                    {/* Left */}
                    <div className="analytics-left">
                        <div className="stack">
                            <h2 className="analytics-title">
                                Real-time
                                <br />
                                <span className="text-gradient">Analytics</span>
                            </h2>
                            <p className="analytics-desc">
                                Gain deep insights into your business performance with our advanced analytics dashboard and
                                real-time reporting capabilities.
                            </p>
                        </div>

                        <div className="stats-grid">
                            {[
                                { metric: "99.9%", label: "Uptime", color: "green" },
                                { metric: "2.3s", label: "Load Time", color: "blue" },
                                { metric: "150K+", label: "Active Users", color: "purple" },
                                { metric: "24/7", label: "Monitoring", color: "cyan" }
                            ].map((stat, i) => (
                                <div key={i} className="stat-card">
                                    <div className={`stat-metric ${stat.color}`}>{stat.metric}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="chart-card">
                        <div className="chart-stack">
                            <div className="chart-header">
                                <h3 className="chart-title">Performance Overview</h3>
                                <div className="chart-dots">
                                    <div className="chart-dot green"></div>
                                    <div className="chart-dot blue"></div>
                                    <div className="chart-dot purple"></div>
                                </div>
                            </div>

                            {/* Simulated Chart Bars */}
                            <div className="bar-stack">
                                {[
                                    { label: "Revenue", value: 85, color: "green" },
                                    { label: "Users", value: 92, color: "blue" },
                                    { label: "Conversion", value: 78, color: "purple" },
                                    { label: "Retention", value: 88, color: "cyan" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bar-item">
                                        <div className="bar-row">
                                            <span className="label">{item.label}</span>
                                            <span className="value">{item.value}%</span>
                                        </div>
                                        <div className="bar-track">
                                            <div className={`bar-fill ${item.color}`} style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Analytics