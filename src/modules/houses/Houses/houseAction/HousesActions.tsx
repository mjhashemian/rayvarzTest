import FilterAction from './Fiters/FilterBox';
import SearchBox from './Search/SearchBox';

const HousesAction = () => {
  return (
    <div className="w-[65%] h-[100px] flex justify-between items-center mt-5">
      <SearchBox />
      <FilterAction/>
    </div>
  );
};

export default HousesAction;
