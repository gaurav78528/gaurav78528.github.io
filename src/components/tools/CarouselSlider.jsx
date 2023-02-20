import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselSlider() {
  return (
    <Carousel responsive={responsive} autoPlay={true}   
    customTransition="ease-in 1s"
    autoPlaySpeed={2000}
    infinite={true}
    removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
    >
      <div>
        <img src="https://img.icons8.com/color/512/git.png" alt="Gitlogo" />
        <p>Git</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/ios-glyphs/512/github.png"
          alt="GitHub"
        />
         <p>GitHub</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
          alt="Netlify"
        />
         <p>Netlify</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/material-outlined/512/verge.png"
          alt="Vercel"
        />
         <p>Vercel</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
          alt="Postman"
        />
        <p>Postman</p>
      </div>
      <div>
        <img
          src="https://img.icons8.com/color/512/visual-studio-code-2019.png"
          alt="Visual Studio Code"
        />
        <p>Visual Studio Code</p>
      </div>
    </Carousel>
  );
}

export default CarouselSlider;
