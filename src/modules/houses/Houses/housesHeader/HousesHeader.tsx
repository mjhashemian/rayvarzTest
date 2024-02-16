import { Button } from '@mui/material';

const HousesHeader = () => {
  return (
    <div className="w-[65%] h-[100px] flex justify-between items-center mt-5">
      <h1 className="text-2xl font-[700]">Houses</h1>
      <Button className="w-[20%] h-[50px] !bg-[#d35400] !text-[#FFF] cursor-pointer">
        + CREATE NEW
      </Button>
    </div>
  );
};

export default HousesHeader;
