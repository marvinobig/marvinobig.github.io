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
        height: "500px"
    }

    const sliderTextStyling = {
        margin: "20px 0 0 30px"
    }

    const sliderContainer = {
        border: "1px solid black",
    }


    return (
        <article>
            <h2>Projects</h2>
            <Splide options={sliderOptions} tag="section" hasTrack={false} aria-label="My Skills">
                <div style={sliderContainer}>
                    <SplideTrack>
                        {projects.map((project, index) => (
                            <SplideSlide key={index}>
                                <img src={project.img} alt={project.name} />
                                <div style={sliderTextStyling}>
                                    <div>
                                        <h3>{project.name}</h3>
                                        <a href={project.live}>View</a>
                                        <a href={project.github}>Code</a>
                                    </div>
                                    
                                    <p>{project.description}</p>
                                    <div>
                                        {project.technologies.map((tech, index) => (
                                            <img key={index} src={tech.img} alt={tech.alt} />
                                        ))}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </div>
            </Splide>
        </article>
    );
}

export default ProjectSlider;
