import React from 'react'
import styles from './Sidebar.module.css'
import Logo from '../../images/adFeed_logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

type SidebarProps = {
  user: number
}

const Sidebar = ({ user }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/home",
      iconActive: <HomeIcon sx={{ color: "white" }} />,
      iconNotActive: <HomeIcon sx={{ color: "#FF5E06" }} />
    },
  ];
  const adminMenu = [
    {
      name: "Dashboard",
      path: "/admin/home",
      iconActive: <HomeIcon sx={{ color: "white" }} />,
      iconNotActive: <HomeIcon sx={{ color: "#FF5E06" }} />
    },
    {
      name: "Upload File",
      path: "/admin/upload",
      iconActive: <FileUploadIcon sx={{ color: "white" }} />,
      iconNotActive: <FileUploadIcon sx={{ color: "#FF5E06" }} />
    },
    {
      name: "Manage Users",
      path: "/admin/users",
      iconActive: <PersonIcon sx={{ color: "white" }} />,
      iconNotActive: <PersonIcon sx={{ color: "#FF5E06" }} />
    },
  ];
  const superAdminMenu = [
    {
      name: "Dashboard",
      path: "/admin/home",
      iconActive: <HomeIcon sx={{ color: "white" }} />,
      iconNotActive: <HomeIcon sx={{ color: "#FF5E06" }} />
    },
    {
      name: "Upload File",
      path: "/admin/upload",
      iconActive: <FileUploadIcon sx={{ color: "white" }} />,
      iconNotActive: <FileUploadIcon sx={{ color: "#FF5E06" }} />
    },
    {
      name: "Folders",
      path: "/admin/folders",
      iconActive: <DriveFolderUploadIcon sx={{ color: "white" }} />,
      iconNotActive: <DriveFolderUploadIcon sx={{ color: "#FF5E06" }} />
    },
  ]

  const menutobeRendered = user === 1 ? userMenu : (user === 2 ? adminMenu : superAdminMenu);
  return (
    <div className={styles.Sidebar}>
      <img src={Logo} alt="Logo" />
      <div className={styles.menu}>
        {menutobeRendered.map(menu => {
          const isActive = location.pathname === menu.path;
          return (
            <div
              className={`d-flex ${styles.menu_item} ${isActive && styles.active_menu_item} gap-4 mt-3`}
              onClick={() => {
                navigate(menu.path);
              }}
            >
              {isActive ? (menu.iconActive) : (menu.iconNotActive)}
              <Link className={isActive ? "text-white" : ''} to={menu.path}>{menu.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
