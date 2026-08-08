import { useState } from 'react';
import chefwormGif from '../../public/chefworm.gif';

const projects = [
    {
        id: 'chef-worm',
        title: 'Chef Worm',
        summary: 'A arcade game built in Lua for PICO-8.',
        details: 'Worm wants to cook a pizza, help her by collecting the ingredients, but avoid rain!',
        link: 'https://gracedo.itch.io/chef-worm',
        image: chefwormGif,
        alt: 'GIF of Chef Worm project',
    },
    {
        id: 'Coming soon...',
        title: 'Coming soon...',
        summary: 'More projects are on the way!',
    }
];

function Software({ nightMode }: { nightMode: boolean }) {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div
            className="SoftwareContainer"
            id="software"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100dvh',
                width: '100%',
                maxWidth: '100vw',
                overflowX: 'hidden',
                textAlign: 'center',
                paddingBottom: '6vh',
                position: 'relative',
                boxSizing: 'border-box',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                width: '100%',
                maxWidth: '100%',
                padding: '0 1.5rem',
                boxSizing: 'border-box',
            }}>
                <div
                    className="SoftwareRow"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'stretch',
                        width: '100%',
                        maxWidth: 'min(100%, 1300px)',
                        position: 'relative',
                        gap: 'clamp(1.5rem, 4vw, 3rem)',
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        className="SoftwareNav"
                        style={{
                            flex: '0 1 260px',
                            minWidth: '0',
                            width: '100%',
                            maxWidth: '100%',
                            padding: '0 0.5rem 0 0',
                            alignSelf: 'stretch',
                            textAlign: 'left',
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {projects.map((project) => {
                                const isActive = selectedProject.id === project.id;
                                return (
                                    <button
                                        key={project.id}
                                        onClick={() => setSelectedProject(project)}
                                        style={{
                                            textAlign: 'left',
                                            padding: '0.35rem 0.5rem',
                                            background: 'transparent',
                                            border: 'none',
                                            outline: 'none',
                                            color: isActive ? (nightMode ? '#fff' : '#111') : (nightMode ? '#d7d7d7' : '#666'),
                                            cursor: 'pointer',
                                            fontFamily: 'Lexend',
                                            fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                                            fontWeight: isActive ? 700 : 500,
                                            width: '100%',
                                            borderRadius: '0.5rem',
                                        }}
                                    >
                                        {project.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div
                        style={{
                            width: '1px',
                            alignSelf: 'stretch',
                            margin: '0.25rem 0',
                            background: 'linear-gradient(to bottom, rgba(101, 87, 138, 0) 0%, rgba(101, 87, 138, 0.45) 20%, rgba(101, 87, 138, 0.45) 80%, rgba(101, 87, 138, 0) 100%)',
                            opacity: nightMode ? 0.35 : 0.25,
                            flexShrink: 0,
                        }}
                    />

                    <div
                        className="SoftwarePanel"
                        style={{
                            flex: '1 1 min(320px, 100%)',
                            minWidth: '0',
                            width: '100%',
                            maxWidth: '100%',
                            padding: '1.25rem 0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.25rem',
                            height: 'clamp(540px, 70vh, 680px)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            alignSelf: 'stretch',
                        }}
                    >
                        <div style={{ height: '3.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'Lexend',
                                    color: nightMode ? '#fff' : '#111',
                                    margin: 0,
                                    textDecoration: 'none',
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <span>{selectedProject.title}</span>
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                        <div style={{ height: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <p style={{ fontFamily: 'Lexend', color: nightMode ? '#7fd1a8' : '#2e8b57', margin: 0, lineHeight: 1.6 }}>
                                {selectedProject.summary}
                            </p>
                        </div>
                        <div style={{ height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <p style={{ fontFamily: 'Lexend', color: nightMode ? '#d8cee8' : '#555', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
                                {selectedProject.details}
                            </p>
                        </div>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'clamp(220px, 30vw, 300px)' }}>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.alt}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '1rem',
                                    alignSelf: 'center',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Software;