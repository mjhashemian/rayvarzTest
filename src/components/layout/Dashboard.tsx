import { Outlet } from 'react-router-dom';
import Header from '../common/Header';

function DashboardLayout() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <div className="hidden md:hidden xl:block">{/* <SideBar /> */}</div>
      <Header />
      {/* <UserProfileDrawer open={openProfile} setOpen={setOpenProfile} /> */}
      <div
        style={{
          minHeight: 280,
          animation: 'ease-in-out',
        }}
        className=" w-full h-screen mt-[68px]"
      >
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
