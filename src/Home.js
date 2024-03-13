import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

function Home() {

    const typedTarget = useRef(null);
    const [highlightSocialLinks, setHighlightSocialLinks] = useState(false);

    useEffect(() => {
        if (typedTarget.current) {
            const typed = new Typed(typedTarget.current, {
                strings: ["Front-end Developer.", "Marketer.", "Writer."],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 1000,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    const socialClick = (event) => {
        event.preventDefault(); // Prevent default anchor action
        setHighlightSocialLinks(true);
        setTimeout(() => {
            setHighlightSocialLinks(false);
        }, 5000); // Resets the style after 5 seconds
    };

    const socialLinkStyle = highlightSocialLinks ? {
        background: "#90e0ef",
        boxShadow: "0 0 10px #90e0ef",
        color: "black",
    } : {};
    
    return (
        <>
        <header className="header">
        <span className="logo">
          <i className="fa-solid fa-code"></i>
        </span>
        <nav className="navbar">
          <a href="#home" style={{ '--i': 1 }} className="active">Home</a>
          <a href="#about" style={{ '--i': 2 }} className="active">About</a>
          <a href="#portfolio" style={{ '--i': 3 }}>Portfolio</a>
          <a href="#contact" style={{ '--i': 4 }} id="contact" onClick={socialClick}>Contact</a>
        </nav>
        </header>
        <section id="home">
            <div className="h-content">
                <h3>Hi, I am</h3>
                <h1>Juan Alvarado</h1>
                <h3>And I'm a <br /><span className="multi" ref={typedTarget}></span></h3>
                <p> With a keen eye for design and a passion for creating seamless digital experiences, I strive to bring ideas to life through code.</p>
                <div className="social">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" style={socialLinkStyle}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="mailto:someone@example.com" target="_blank" rel="noreferrer noopener" style={socialLinkStyle}><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer noopener" style={socialLinkStyle}><i className="fa-brands fa-github"></i></a>
                </div>
                <a href="https://drive.google.com/file/d/1vG61H6pV7ELcXsfl7YgHIwVCTkOkCgpa/view?usp=sharing" target="_blank" rel="noreferrer noopener" className="btn">Download Resume</a>
            </div>
            <div className="box">
                <a href="#m3-o" className="link-1" id="m3-c">Click Me!</a>
                <div className="modal-container" id="m3-o" style={{ '--m-background': 'var(--global-background)' }}>
                    <div className="modal" style={{ '--m-shadow': '0 0 10rem 0' }}>
                    <h1 className="modal__title">Welcome to my Portfolio!</h1>
                    <p className="modal__text">
                    Just saying hello from my vacation in Barcelona. This is me, enjoying the moment away from it all.
                    </p>
                    <div className="imgbox">
                    <img src="https://lh3.googleusercontent.com/pw/ABLVV86YOBe18UqyrvoHqmOZRhbJQJ6uzTLsA7nSZPWq3inPDzBchQxqMsrxsCks_-EwsBpwar3W-bdax4JyU-ztoe_F5VcGRhlKz0-Mgu4BTJ3Mejg4uuU=w2400" alt="Juan Alvarado" />
                    </div>
                    <a href="#home" className="link-2" aria-label="Home Page"></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home