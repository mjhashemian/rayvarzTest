import AboutCompany from "../../modules/about/AboutCompany";
import AboutDesigner from "../../modules/about/AboutDesigner";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <AboutCompany/>
      <AboutDesigner/>
    </div>
  );
};

export default About;
