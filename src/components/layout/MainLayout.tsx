import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../services/reactQuery';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  // the main layout is the first layout of the app and we config the react-query and api client in it
  return (
    <main className="w-full">
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </main>
  );
}
