import { doc, getDoc } from 'firebase/firestore';
import ArrowBack from '../../../components/common/ArrowBack/ArrowBack';
import HouseCard from './HouseCard';
import { db } from '../../../firebase.config';
import { useSelector } from 'react-redux';
import { selectId } from '../../../store/id';
import { useEffect, useState } from 'react';
const HouseDetail = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const id = useSelector(selectId);
  const [data, setData] = useState<IHouses>({});
  async function getData() {
    const docRef = doc(db, 'houses', id);

    setLoader(true);
    const docSnap = await getDoc(docRef);
    setLoader(false);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log('No such document!');
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full flex justify-center items-center mb-10">
      <div className="w-[80%] h-[650px] mt-10">
        <ArrowBack />
        <div className="flex justify-between mt-5  h-[600px]">
          <HouseCard data={data} loader={loader} />
          <div className="flex justify-center w-[30%] bg-[#FFF] rounded-[16px]">
            h
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
