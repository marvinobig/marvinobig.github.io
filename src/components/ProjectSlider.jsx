import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';

const ProjectSlider = ({ projects }) => {
    const sliderOptions = {
        pagination: false,
        drag: true,
        autoplay: true,
        lazyLoad: true,
        cover: true,
        height: "600px",
        classes: {
            prev: "splide__arrow--prev project-slider-btn",
            next: "splide__arrow--next project-slider-btn",
        }
    }

    const sliderContainer = {
        border: "2px solid #272727",
    }

    const sliderHeaderStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "transparent",
        margin: "30px",
    }

    const sliderHeaderSectionStyle = {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "transparent",
    }

    const textStyle = {
        width: "fit-content",
        color: "#fcfcfc",
        backgroundColor: "#272727",
        padding: "10px 20px"
    }

    const skillContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        width: "fit-content",
        backgroundColor: "#272727",
        padding: "12px"
    }

    const skillImgStyle = {
        backgroundColor: "transparent",
        maxWidth: "30px"
    }

    const linkStyle = {
        fontWeight: 'normal',
        backgroundColor: "#272727",
        color: "#fcfcfc",
        padding: "10px 20px",
        border: "2px solid #272727",
        textDecoration: "underline",
    }

    return (
        <article>
            <h2>Projects</h2>
            <Splide options={sliderOptions} tag="section" hasTrack={false} aria-label="My Skills" style={sliderContainer} className='sliderContainer'>
                <SplideTrack>
                    {projects.map((project, index) => (
                        <SplideSlide key={index}>
                            <header style={sliderHeaderStyle}>
                                <h3 style={textStyle}>{project.name}</h3>

                                <p style={textStyle}>{project.description}</p>

                                <section style={skillContainerStyle}>
                                    {project.technologies.map((tech, index) => (
                                        <img key={index} src={tech.img.src} alt={tech.alt} style={skillImgStyle} />
                                    ))}
                                </section>

                                <section style={sliderHeaderSectionStyle}>
                                    <a style={linkStyle} href={project.live} target='_blank'>View</a>
                                    <a style={linkStyle} href={project.github} target='_blank'>Code</a>
                                </section>
                            </header>
                            <img src={project.img.src} alt={project.name} />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </article>
    );
}

export default ProjectSlider;
