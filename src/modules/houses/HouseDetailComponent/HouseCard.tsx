import House from '../../../../public/icons/house.jpg';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Location from '../../../../public/icons/location.png';
import Bath from '../../../../public/icons/bath.png';
import Bed from '../../../../public/icons/bed.png';
import Brick from '../../../../public/icons/brick.png';
import Euro from '../../../../public/icons/euro.png';
import Square from '../../../../public/icons/square.png';
import Warehouse from '../../../../public/icons/warehouse.png';

const HouseCard = () => {
  return (
    <div className="flex flex-col justify-start w-[50%] bg-[#fff] rounded-[16px]">
      <img src={House} className="h-[300px] w-full rounded-[16px]" alt="" />
      <div className="w-full flex flex-col justify-start items-center">
        <div className="w-[95%] flex justify-between mt-2">
          <h1 className="text-[25px] font-[700]">Stokvistraat 132</h1>
          <div className="w-[10%] flex gap-2">
            <CreateIcon className="cursor-pointer" style={{ color: 'red' }} />
            <DeleteIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="w-[95%]  flex justify-start mt-2 gap-2">
          <img className="w-[25px]" src={Location} alt="" />
          <h4 className="text-[14px] font-[400]">1011 AA Amsterdam</h4>
        </div>
        <div className="w-[95%] flex justify-start mt-4 gap-4">
          <div className="flex gap-1">
            <img className="w-[25px]" src={Euro} alt="" />
            <h4 className="text-[14px] font-[400]">500,000</h4>
          </div>
          <div className="flex gap-1">
            <img className="w-[25px]" src={Square} alt="" />
            <h4 className="text-[14px] font-[400]">120 m2</h4>
          </div>
          <div className="flex gap-1">
            <img className="w-[25px]" src={Brick} alt="" />
            <h4 className="text-[14px] font-[400]">built in 1990</h4>
          </div>
        </div>
        <div className="w-[95%] flex justify-start mt-4 gap-4">
          <div className="flex gap-1">
            <img className="w-[25px]" src={Bed} alt="" />
            <h4 className="text-[14px] font-[400]">1</h4>
          </div>
          <div className="flex gap-1">
            <img className="w-[25px]" src={Bath} alt="" />
            <h4 className="text-[14px] font-[400]">1</h4>
          </div>
          <div className="flex gap-1">
            <img className="w-[25px]" src={Warehouse} alt="" />
            <h4 className="text-[14px] font-[400]">yes</h4>
          </div>
        </div>
        <div className="w-[95%] flex justify-center mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          corrupti adipisci dolores minus, ad consectetur atque voluptate, sed
          laborum praesentium error repellendus expedita earum illum magnam,
          debitis ratione cum porro veniam magni! Praesentium
        </div>
      </div>
    </div>
  );
};

export default HouseCard