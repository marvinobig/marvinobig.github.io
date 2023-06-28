import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/core';
import skills from "../data/skillData";

const ProjectSlider = () => {
    const options = {
        pagination: false,
        drag: true,
        autoplay: true,
        lazyLoad: true,
        cover: true,
        height: "600px"
    }
    return (
        <Splide options={options} tag="section" hasTrack={false} aria-label="My Skills">
            <section>
                <SplideTrack>
                    {skills.map((skill, index) => (
                        <SplideSlide key={index}>
                            <img src={skill.img} alt={skill.alt} />
                            <p>{skill.alt}</p>
                        </SplideSlide>
                    ))}
                </SplideTrack>
                <div className="splide__arrows">
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">Prev</button>
                        <button className="splide__arrow splide__arrow--next">Next</button>
                    </div>
                </div>
            </section>
        </Splide>
    );
}

export default ProjectSlider;
