// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - SHIPMENT PAGES ||============================== //

const shipment = {
  id: 'authentication',
  title: 'Shipment',
  type: 'collapse',
  children: [
    {
      id: 'trips',
      title: 'Trips',
      type: 'item',
      url: '/trips',
      icon: icons.LoginOutlined
    },
    {
      id: 'loadPlanning',
      title: 'Load Planning',
      type: 'item',
      url: '/load-planning',
      icon: icons.LoginOutlined
    },
    {
      id: 'routePlanning',
      title: 'Route Planning',
      type: 'item',
      url: '/route-planning',
      icon: icons.LoginOutlined
    }
  ]
};

export default shipment;
