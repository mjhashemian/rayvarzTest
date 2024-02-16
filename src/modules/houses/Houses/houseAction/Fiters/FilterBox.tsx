import { FunctionComponent, useState } from 'react';
import './filters.css';
const FilterAction: FunctionComponent = () => {
  const [openWaterMeter, setOpenWaterMeter] = useState<boolean>(true);

  return (
    <div className="w-[30%] flex xl:h-[40px] h-[48px] bg-[#cecece] flex-row justify-between items-center rounded-[8px] auto-rows-max">
      <div className="tabs">
        <input
          onClick={() => {
            setOpenWaterMeter(true);
          }}
          type="radio"
          id="tab-waterMeter"
          name="tabs"
          defaultChecked={openWaterMeter}
        />
        <label className="tab text-[#FFF]" htmlFor="tab-waterMeter">
          Size
        </label>
        <input
          id="tab-dataLogger"
          onClick={() => {
            setOpenWaterMeter(false);
          }}
          type="radio"
          name="tabs"
          defaultChecked={!openWaterMeter}
        />
        <label className="tab text-[#FFF]" htmlFor="tab-dataLogger">
          Price
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
};

export default FilterAction;
