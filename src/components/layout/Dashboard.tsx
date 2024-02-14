import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="w-full min-h-[100vh] relative">
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
