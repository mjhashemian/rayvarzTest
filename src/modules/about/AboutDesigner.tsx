import Logo from '../../../public/icons/logo.svg';
const AboutDesigner = () => {
  return (
    <div className="w-[65%] flex flex-col justify-center">
      <h1 className="text-[20px] font-[700]">Design and Development</h1>
      <div className="flex justify-start items-center ">
        <img className="w-32" src={Logo} alt="" />
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[400]"> By DTT </h3>
          <a href="#">www.d-tt.nl</a>
        </div>
      </div>
    </div>
  );
};

export default AboutDesigner;
