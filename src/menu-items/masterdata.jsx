// assets
import { LoginOutlined, ProfileOutlined, DatabaseFilled } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  DatabaseFilled
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Master Data',
  type: 'collapse',
  children: [
    {
      id: 'partMaster',
      title: 'Part Master',
      type: 'item',
      url: '/part-master',
      icon: icons.DatabaseFilled,
      breadcrumbs: true
    },
    {
      id: 'vehicleMaster',
      title: 'Vehicle Master',
      type: 'item',
      url: '/vehicle-master',
      icon: icons.DatabaseFilled
    },
    {
      id: 'dealerMaster',
      title: 'Dealer Master',
      type: 'item',
      url: '/dealer-master',
      icon: icons.DatabaseFilled
    },
    {
      id: 'vendorMaster',
      title: 'Vendor Master',
      type: 'item',
      url: '/vendor-master',
      icon: icons.DatabaseFilled
    }
  ]
};

export default pages;
