import ArrowBack from '../../../components/common/ArrowBack/ArrowBack';
import HouseCard from './HouseCard';
const HouseDetail = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] h-[650px] ">
        <ArrowBack />
        <div className="flex justify-between mt-5 h-[600px]">
          <HouseCard />
          <div className="flex justify-center w-[30%] bg-[#FFF] rounded-[16px]">
            h
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
