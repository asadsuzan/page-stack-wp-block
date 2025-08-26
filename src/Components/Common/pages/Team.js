import React from 'react'
import NumericLabel from '../NumericLabel'

const Team = ({ section }) => {
    return (
        <section className="team-section">
            <div className="overlay"></div>
            <div className="circle-top"></div>
            <div className="circle-bottom"></div>
            <NumericLabel label={section?.order} />

            <div className="container">
                <div className="text-center">
                    <h2>
                        Meet Our
                        <br />
                        <span className="text-gradient">Expert Team</span>
                    </h2>
                    <p className="subtitle">
                        Passionate professionals dedicated to delivering exceptional results and innovative solutions.
                    </p>
                </div>

                <div className="team-grid">
                    {[
                        { name: "Alex Thompson", role: "CEO & Founder", expertise: "Strategic Vision", color: "pink" },
                        { name: "Maria Garcia", role: "CTO", expertise: "Technical Leadership", color: "violet" },
                        { name: "David Kim", role: "Lead Designer", expertise: "User Experience", color: "blue" },
                        { name: "Sarah Wilson", role: "Head of Operations", expertise: "Process Optimization", color: "green" }
                    ].map((member, index) => (
                        <div key={index} className="member">
                            <div className={`member-circle ${member.color}`}>
                                {member.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <p className="expertise">{member.expertise}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Team