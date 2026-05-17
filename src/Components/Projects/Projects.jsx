import React, { useState } from 'react';
import './Projects.css';

export const Projects = () => {
  const [expandedDesc, setExpandedDesc] = useState({});
  const [expandedSkills, setExpandedSkills] = useState({});

  const projectList = [
    {
      id: 1,
      title: "Visio",
      pitch: "All-in-one AI-powered educational ecosystem and biometric attendance suite.",
      desc: "A sophisticated multi-tenant platform designed to automate school operations. Includes a dedicated attendance app utilizing advanced face-scanning algorithms for seamless, contact-less biometric verification.",
      features: ["Multi-tenant architecture", "Face-scanning biometric terminal", "Automated student promotion", "Parent-Teacher notification engine"],
      skills: ["Next.js", "Biometrics", "Node.js", "Real-time APIs", "Next.js", "Prisma"],
      live: "https://visio.school",
      git: "#",
      color: "#6366f1"
    },
    {
      id: 2,
      title: "Store Management",
      pitch: "A centralized commerce engine designed to orchestrate complex inventory and multi-channel sales for retail leaders.",
      desc: "A comprehensive enterprise-grade platform engineered to solve critical supply chain challenges for retailers. It provides deep visibility into stock movements, automated restocking logic, and granular sales performance analytics to drive profitability.",
      features: ["Low-stock automated alerts", "Real-time inventory sync", "Sales analytics dashboard", "Supplier & Order management"],
      skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Chart.js"],
      live: "https://storefrontend-sage.vercel.app/auth/register",
      git: "https://github.com/Md-Irshad-Alam/storefrontend/tree/main/src",
      color: "#2978b5"
    },
    {
      id: 3,
      title: "Sentinel Logs",
      pitch: "Real-time security monitoring and threat detection for any web application.",
      desc: "An advanced security layer that logs system threads and user activity in real-time. Features IP-level blocking and session recording to protect against suspicious activities with simple URL integration.",
      features: ["Suspicious activity warnings", "Real-time user session recording", "IP-level security blocking", "Plug-and-play URL integration"],
      skills: ["WebSockets", "Session Replay", "CyberSecurity", "Node.js", "Redis"],
      live: "#",
      git: "#",
      color: "#10b981"
    },
    {
      id: 4,
      title: "QuickRide",
      pitch: "Next-gen peer-to-peer ride-sharing platform with real-time geolocation.",
      desc: "A comprehensive ride-hailing app where users can register vehicles or book rides. Features a dynamic map interface for route tracking and automated fare calculation based on distance and traffic.",
      features: ["Driver/Rider registration", "Interactive Map integration", "Dynamic fare engine", "Proximity-based notifications"],
      skills: ["Google Maps API", "Geolocation", "React", "Express", "Socket.io"],
      live: "#",
      git: "#",
      color: "#f59e0b"
    }
  ];

  const toggleDesc = (id) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSkills = (id) => {
    setExpandedSkills(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className='section'>
        <h2 className='section__title different'>
          Featured <span className="different">Creations</span>
        </h2>
        <div className='projects_grid'>
          {projectList.map((project) => {
            const isDescExpanded = expandedDesc[project.id];
            const isSkillsExpanded = expandedSkills[project.id];
            const displaySkills = isSkillsExpanded ? project.skills : project.skills.slice(0, 5);
            const hasMoreSkills = project.skills.length > 5;

            return (
              <div className='project_card' key={project.id} style={{ '--project-color': project.color }}>
                <div className='project_info'>
                  <div className="project_header">
                    <span className="project_number">0{project.id}</span>
                    <h3 className='project_title'>{project.title}</h3>
                  </div>
                  
                  <p className="project_pitch">{project.pitch}</p>

                  <div className='project_desc_container'>
                    <p className={`project_desc ${isDescExpanded ? 'expanded' : 'truncated'}`}>
                      {project.desc}
                    </p>
                    {project.desc.length > 80 && (
                      <span className='show_more' onClick={() => toggleDesc(project.id)}>
                        {isDescExpanded ? ' [ Show Less ]' : ' [ Read Deeply ]'}
                      </span>
                    )}
                  </div>

                  <ul className="project_features">
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>

                  <div className='project_skills_container'>
                    <p className='project_skills'>
                      {displaySkills.join(", ")}
                      {!isSkillsExpanded && hasMoreSkills && (
                        <span className='skills_count' onClick={() => toggleSkills(project.id)}>
                          {` +${project.skills.length - 5} more`}
                        </span>
                      )}
                      {isSkillsExpanded && (
                        <span className='skills_count' onClick={() => toggleSkills(project.id)}>
                          {` Show Less`}
                        </span>
                      )}
                    </p>
                  </div>

                  <div className='project_buttons'>
                    <a href={project.git} target='_blank' rel='noreferrer' className='btn_modern btn_git'>
                      Git Repository
                    </a>
                    <a href={project.live} target='_blank' rel='noreferrer' className='btn_modern btn_live'>
                      Launch App
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
