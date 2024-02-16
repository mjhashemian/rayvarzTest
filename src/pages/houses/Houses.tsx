import HousesAction from '../../modules/houses/Houses/houseAction/HousesActions';
import HousesHeader from '../../modules/houses/Houses/housesHeader/HousesHeader';
import HouseCard from '../../modules/houses/HousesOverView/HousesOverView';

const Houses = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <HousesHeader />
      <HousesAction />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </div>
  );
};

export default Houses;
