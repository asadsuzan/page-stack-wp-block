import { useEffect, useRef, useState } from 'react';
import Indicators from './pages/Indicators';
import Navigation from './pages/Navigation';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Analytics from './pages/Analytics';

const Stack = ({ attributes }) => {


  const [currentSection, setCurrentSection] = useState(0);
  const scrollRef = useRef(null);

  const sections = [
    {
      "id": "hero",
      "label": "Hero",
      "order": 1,
      "title": [
        { "text": "Deep", "highlight": false },
        { "text": "Specialization", "highlight": true }
      ],
      "description": "Crafting extraordinary experiences through precision engineering and innovative design methodologies.",
      "buttons": [
        { "text": "Explore More", "url": "/explore", "isShow": true, "icon": "arrow-right" },
        { "text": "Watch Demo", "url": "/demo", "isShow": true, "icon": "play" }
      ],
      "visuals": [
        { "type": "card" },
        { "type": "decoration", "position": "top-right" },
        { "type": "decoration", "position": "bottom-left" }
      ]
    },
    {
      "id": "features",
      "label": "Features",
      "order": 2,
      "title": [
        { "text": "Institutional-Grade", "highlight": false },
        { "text": "Infrastructure", "highlight": true }
      ],
      "description": "Stack's scalable digital-first and AI-powered operational infrastructure ensures every fund benefits from uniformity in processes, compliance, reporting, and risk management.",
      "features": [
        { "icon": "award", "text": "99.9% Uptime Guarantee" },
        { "icon": "shield", "text": "Enterprise Security Standards" },
        { "icon": "zap", "text": "Real-time Performance Monitoring" }
      ],
      "buttons": [
        { "text": "Learn More", "url": "/learn-more", "isShow": true },
        { "text": "Documentation", "url": "/docs", "isShow": true }
      ],
      "visuals": [
        { "type": "block", "position": "left-top" },
        { "type": "block", "position": "left-bottom" },
        { "type": "block", "position": "right-top" },
        { "type": "block", "position": "right-bottom" }
      ]
    },
    {
      "id": "contact",
      "label": "Contact",
      "order": 3,
      "title": [
        { "text": "Ready to", "highlight": false },
        { "text": "Transform", "highlight": true },
        { "text": "Your Stack?", "highlight": false }
      ],
      "description": "Join the revolution of institutional-grade infrastructure. Let's build something extraordinary together.",
      "buttons": [
        { "text": "Get Started Today", "url": "/get-started", "isShow": true, "icon": "mail,arrow-right" },
        { "text": "Schedule Demo", "url": "/schedule-demo", "isShow": true }
      ],
      "highlights": [
        { "icon": "shield", "text": "Enterprise Security" },
        { "icon": "users", "text": "24/7 Support" },
        { "icon": "zap", "text": "Instant Setup" }
      ]
    },
    {
      "id": "team",
      "label": "Team",
      "order": 4,
      "title": [
        { "text": "Meet Our", "highlight": false },
        { "text": "Expert Team", "highlight": true }
      ],
      "description": "Passionate professionals dedicated to delivering exceptional results and innovative solutions.",
      "members": [
        { "name": "Alex Thompson", "role": "CEO & Founder", "expertise": "Strategic Vision" },
        { "name": "Maria Garcia", "role": "CTO", "expertise": "Technical Leadership" },
        { "name": "David Kim", "role": "Lead Designer", "expertise": "User Experience" },
        { "name": "Sarah Wilson", "role": "Head of Operations", "expertise": "Process Optimization" }
      ]
    },
    {
      "id": "analytics",
      "label": "Analytics",
      "order": 5,
      "title": [
        { "text": "Real-time", "highlight": false },
        { "text": "Analytics", "highlight": true }
      ],
      "description": "Gain deep insights into your business performance with our advanced analytics dashboard and real-time reporting capabilities.",
      "stats": [
        { "metric": "99.9%", "label": "Uptime" },
        { "metric": "2.3s", "label": "Load Time" },
        { "metric": "150K+", "label": "Active Users" },
        { "metric": "24/7", "label": "Monitoring" }
      ],
      "chart": [
        { "label": "Revenue", "value": 85 },
        { "label": "Users", "value": 92 },
        { "label": "Conversion", "value": 78 },
        { "label": "Retention", "value": 88 }
      ]
    }
  ]



  const scrollToSection = (index) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.offsetWidth;

      scrollRef.current.scrollTo({
        left: index * sectionWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const sectionWidth = scrollRef.current.offsetWidth;
      const newCurrentSection = Math.round(scrollLeft / sectionWidth);
      setCurrentSection(newCurrentSection);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (scrollRef.current) {
      const delta = e.deltaY;
      const threshold = 50; // Minimum scroll amount to trigger section change

      if (Math.abs(delta) > threshold) {
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down/right - go to next section
          scrollToSection(currentSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up/left - go to previous section
          scrollToSection(currentSection - 1);
        }
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <div className="bBlocksPageStack">

      <Navigation
        sections={sections}
        currentSection={currentSection}
        onScrollToSection={scrollToSection}
        logoText={attributes.logoText || 'STACK'}

      />
      <Indicators
        sections={sections}
        currentSection={currentSection}
        handleClick={scrollToSection}

      />
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className='scroll-container'
      >

        <Hero section={sections[0]} />
        <Features section={sections[1]} />
        <Contact section={sections[2]} />
        <Team section={sections[3]} />
        <Analytics section={sections[4]} />


      </div>
    </div>
  );
};

export default Stack;