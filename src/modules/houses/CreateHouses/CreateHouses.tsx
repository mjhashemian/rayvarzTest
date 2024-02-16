import ArrowBack from '../../../components/common/ArrowBack/ArrowBack';
import CreateHousesForm from './CreateHousesForm/CreateHousesForm';

const CreateHouses = () => {
  return (
    <div className="w-[100%] flex justify-center items-start bg-house bg-no-repeat bg-cover">
      <div className="w-[65%] flex flex-col mt-10">
        <ArrowBack />
        <h1 className="text-[20px] font-[700] mt-5">Create new listing</h1>
        <div className="w-full mt-5 ">
          <CreateHousesForm />
        </div>
      </div>
    </div>
  );
};

export default CreateHouses;
