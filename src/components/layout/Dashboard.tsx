import { Outlet } from 'react-router-dom';
import Header from '../common/Header';

function DashboardLayout() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <div className="">
        <Header/>
      </div>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
