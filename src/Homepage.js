//Interactive Process: NA

import landingImage from './images/landing-page-image.jpg';
import Footer from './Footer';

function Homepage() {
    return (
      <div className="homepage">
        <img className = "landing-image" src = {landingImage} />
        
        <div className = "organization-details">
            <h1 className = "organization-name"> CHAMPIONS DEN </h1>
            <h2 className = "slogan"> Where Every Game Matters </h2>
        </div>

        <Footer />
      </div>
    );
  }
  
export default Homepage;