import HouseOverView from '../../../../public/icons/houseOverView.jpg';
import Bath from '../../../../public/icons/bath.png';
import Bed from '../../../../public/icons/bed.png';
import Square from '../../../../public/icons/square.png';
import ActionCards from '../../../components/common/ActionCards/ActionCards';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setId } from '../../../store/id';

const HouseCard: React.FC<IHouseCard> = ({
  streetName,
  houseNumber,
  postalCode,
  price,
  city,
  bathroom,
  bedroom,
  size,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="w-[65%] !min-h-[200px] overflow-hidden mt-6 flex flex-row justify-center items-center bg-[#fff] rounded-[16px]">
      <div
        onClick={() => {
          navigate(`/house-detail/${id}`);
          dispatch(setId(id));
        }}
        className="w-[85%]  cursor-pointer  flex justify-between items-start"
      >
        <div className="flex justify-start items-center gap-8">
          <div className="">
            <img className="w-40 rounded-[8px]" src={HouseOverView} alt="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-y-4">
            <h1 className="text-[20px] font-[700]">
              {streetName} {houseNumber}
            </h1>
            <h2 className="text-[16px] font-[400]">€ {price}</h2>
            <h3 className="text-[14px] font-[300] text-[#797979]">
              {postalCode} {city}
            </h3>
            <div className="flex gap-2">
              <img className="w-5" src={Bed} alt="" />
              <p>{bedroom}</p>
              <img className="w-5" src={Bath} alt="" />
              <p>{bathroom}</p>
              <img className="w-5" src={Square} alt="" />
              <p>{size}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <ActionCards id={id} />
      </div>
    </div>
  );
};

export default HouseCard;
