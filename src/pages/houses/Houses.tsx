import HousesAction from '../../modules/houses/Houses/houseAction/HousesActions';
import HousesHeader from '../../modules/houses/Houses/housesHeader/HousesHeader';
import HouseCard from '../../modules/houses/HousesOverView/HousesOverView';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';

const Houses = () => {
  const [houses, setHouses] = useState<Array<IHouses>>([{}]);
  const [loader, setLoader] = useState<boolean>(false);
  const usersCollectionRef = collection(db, 'houses');
  useEffect(() => {
    const getUsers = async () => {
      setLoader(true);
      const data = await getDocs(usersCollectionRef);
      setHouses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoader(false);
    };
    getUsers();
  }, []);

  return (
    <div
      key={Math.random()}
      className="w-full flex flex-col justify-start items-center"
    >
      <HousesHeader />
      <HousesAction />
      {loader ? (
        <Spin />
      ) : (
        houses.map((house: IHouses) => {
          return (
            <HouseCard
              streetName={house?.streetName}
              houseNumber={house?.houseNumber}
              postalCode={house.postalCode}
              price={house?.price}
              city={house?.city}
              bathroom={house?.bathrooms}
              bedroom={house?.bedrooms}
              size={house?.size}
              id={house?.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Houses;
