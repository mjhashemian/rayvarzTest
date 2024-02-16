import { Outlet } from 'react-router-dom';
import Header from '../common/Header/Header';

function DashboardLayout() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Header />
      <div className="w-full mt-[68px] bg-[#ebebeb] ">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
