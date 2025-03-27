// assets
import { PictureOutlined, FileImageOutlined } from '@ant-design/icons';

// icons
const icons = {
  PictureOutlined,
  FileImageOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const albums = {
  id: 'albums',
  title: 'Albums',
  type: 'group',
  children: [
    {
      id: 'Albums',
      title: 'Albums',
      type: 'item',
      url: '/',
      icon: icons.PictureOutlined
    },
    {
      id: 'AddAlbums',
      title: 'Add Albums',
      type: 'item',
      url: '/add-album',
      icon: icons.FileImageOutlined
    }
  ]
};

export default albums;
