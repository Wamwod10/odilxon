import { useEffect } from 'react'
import "./about.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='about'>
            <div className="container">
                <div data-aos="fade-right" className="about__box">
                    <h2 className="about__title">Odilxon Kamolov</h2>
                    <div className="about__first-box">
                        <div className="about__div">
                            <p className="about__txt">Yoshi</p>
                            <p className="about__text">24</p>
                        </div>
                        <div className="about__line"></div>
                        <div className="about__div">
                            <p className="about__txt">Bo'yi</p>
                            <p className="about__text">174</p>
                        </div>
                        <div className="about__line"></div>
                        <div className="about__div">
                            <p className="about__txt">Vazni</p>
                            <p className="about__text">70,3</p>
                        </div>
                    </div>
                    <div className="about__first-box">
                        <div className="about__div">
                            <p className="about__txt">G'alaba</p>
                            <p className="about__text green">6</p>
                        </div>
                        <div className="about__line"></div>
                        <div className="about__div">
                            <p className="about__txt">Mag'lubiyat</p>
                            <p className="about__text red">4</p>
                        </div>
                        <div className="about__line"></div>
                        <div className="about__div">
                            <p className="about__txt">Durrang</p>
                            <p className="about__text orange">0</p>
                        </div>
                        <div className="about__line"></div>
                        <div className="about__div">
                            <p className="about__txt">Qoldirilgan</p>
                            <p className="about__text gray">1</p>
                        </div>
                    </div>
                    <div className="about__first-box">
                        <div className="about__div">
                            <p className="about__txt">KO/TKO | SUB | DEC | DQ</p>
                            <p className="about__text green">2 | 4 | 0 </p>
                        </div>
                        <div className="about__div">
                            <p className="about__txt">KO/TKO | SUB | DEC | DQ</p>
                            <p className="about__text red">1 | 0 | 3 | 0</p>
                        </div>
                    </div>
                </div>
                <img data-aos="fade-left" src="12.jpg" alt="" />
            </div>
        </div>
    )
}

export default About