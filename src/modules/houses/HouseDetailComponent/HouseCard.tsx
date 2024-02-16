import House from '../../../../public/icons/house.jpg';

import Location from '../../../../public/icons/location.png';
import Bath from '../../../../public/icons/bath.png';
import Bed from '../../../../public/icons/bed.png';
import Brick from '../../../../public/icons/brick.png';
import Euro from '../../../../public/icons/euro.png';
import Square from '../../../../public/icons/square.png';
import Warehouse from '../../../../public/icons/warehouse.png';
import ActionCards from '../../../components/common/ActionCards/ActionCards';
import { Spin } from 'antd';

interface IHouseCard {
  data: IHouses;
  loader: boolean;
}

const HouseCard: React.FC<IHouseCard> = ({ data, loader }) => {
  return (
    <>
      {loader ? (
        <Spin className="w-full h-full flex justify-center items-center" />
      ) : (
        <div className="flex flex-col justify-start w-[50%] bg-[#fff] rounded-[16px]">
          <img src={House} className="h-[300px] w-full rounded-[16px]" alt="" />
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-[95%] flex justify-between mt-2">
              <h1 className="text-[25px] font-[700]">
                {data?.streetName}
                {data?.houseNumber}
              </h1>
              <ActionCards />
            </div>
            <div className="w-[95%]  flex justify-start mt-2 gap-2">
              <img className="w-[25px]" src={Location} alt="" />
              <h4 className="text-[14px] font-[400]">
                {data?.postalCode}
                {data?.city}
              </h4>
            </div>
            <div className="w-[95%] flex justify-start mt-4 gap-4">
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Euro} alt="" />
                <h4 className="text-[14px] font-[400]">{data?.price}</h4>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Square} alt="" />
                <h4 className="text-[14px] font-[400]">{data?.size}</h4>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Brick} alt="" />
                <h4 className="text-[14px] font-[400]">built in 1990</h4>
              </div>
            </div>
            <div className="w-[95%] flex justify-start mt-4 gap-4">
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Bed} alt="" />
                <h4 className="text-[14px] font-[400]">{data?.bedrooms}</h4>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Bath} alt="" />
                <h4 className="text-[14px] font-[400]">{data?.bathrooms}</h4>
              </div>
              <div className="flex gap-2 items-center">
                <img className="w-[25px]" src={Warehouse} alt="" />
                <h4 className="text-[14px] font-[400]">
                  {data?.garage ? 'yes' : 'no'}
                </h4>
              </div>
            </div>
            <div className="w-[95%] flex justify-start mt-5">
              {data?.description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HouseCard;
