import React, {useEffect} from 'react'; // Import useEffect here
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import './Nav.css'
import './Root.css'
import './hcontent.css'
import './About.css'
import './Portfolio.css'

function App() {
    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const options = {
        root: null, // observes intersections relative to the viewport
        threshold: 0.5, // trigger when 50% of the element is in the viewport
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            switch(entry.target.id) {
              case 'home':
                document.body.style.backgroundColor = '#0d1b2a';
                break;
              case 'about':
                document.body.style.backgroundColor = '#1d2d44';
                break;
              case 'portfolio':
                document.body.style.backgroundColor = '#E1EBEE;';
                break;
              default:
                // Optionally, handle an unexpected section id or do nothing
                break;
            }
          }
        });
      }, options);
  
      sections.forEach(section => {
        observer.observe(section);
      });
  
      // Cleanup function to unobserve when component unmounts
      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }, []);
  
    return (
      <>
      <Home />
      <About />
      <Portfolio />
      </>
        
    )
  }
  
  export default App;