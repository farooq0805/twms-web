import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import VehicleMasterPage from 'pages/vehicle-master';
import DealerMasterPage from 'pages/dealer-master';
import VendorMasterPage from 'pages/vendor-master';
import TripsPage from 'pages/trips';
import LoadPlanningPage from 'pages/load-planning';
import RoutePlanningPage from 'pages/route-planning';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const PartMasterPage = Loadable(lazy(() => import('pages/part-master/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'part-master',
      element: <PartMasterPage />
    },
    {
      path: 'vehicle-master',
      element: <VehicleMasterPage />
    },
    {
      path: 'dealer-master',
      element: <DealerMasterPage />
    },
    { path: 'vendor-master', element: <VendorMasterPage /> },
    {
      path: '/',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'trips',
      element: <TripsPage />
    },
    {
      path: 'load-planning',
      element: <LoadPlanningPage />
    },
    {
      path: 'route-planning',
      element: <RoutePlanningPage />
    }
  ]
};

export default MainRoutes;
