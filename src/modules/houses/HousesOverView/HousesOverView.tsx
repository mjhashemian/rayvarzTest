import HouseOverView from '../../../../public/icons/houseOverView.jpg';
import Bath from '../../../../public/icons/bath.png';
import Bed from '../../../../public/icons/bed.png';
import Square from '../../../../public/icons/square.png';
import ActionCards from '../../../components/common/ActionCards/ActionCards';
import { useNavigate } from 'react-router-dom';

const HouseCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/house-detail')}
      className="w-[65%] cursor-pointer !min-h-[200px] overflow-hidden mt-6 flex flex-row justify-center items-center bg-[#fff] rounded-[16px]"
    >
      <div className="w-[95%] flex justify-between">
        <div className="flex justify-start items-center gap-8">
          <div className="">
            <img className="w-40 rounded-[8px]" src={HouseOverView} alt="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-y-4">
            <h1 className="text-[20px] font-[700]">Stokvisstraat 132</h1>
            <h2 className="text-[16px] font-[400]">€ 500.000</h2>
            <h3 className="text-[14px] font-[300] text-[#797979]">
              1011 AA Amsterdam
            </h3>
            <div className="flex gap-2">
              <img className="w-5" src={Bed} alt="" />
              <p>1</p>
              <img className="w-5" src={Bath} alt="" />
              <p>1</p>
              <img className="w-5" src={Square} alt="" />
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="">
          <ActionCards />
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
