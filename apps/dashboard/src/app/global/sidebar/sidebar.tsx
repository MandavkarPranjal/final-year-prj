import { useState, useEffect } from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import hospLogo from '../../../../public/assets/hospLogo.png';
import { User } from '../../context/user-data-transfer';

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
}: {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('User') ?? '{}'));
    // console.log('sidebar user', user);
  }, []);

  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          background: `${colors.primary[400]} !important`,
        },
        '& .ps-menu-icon': {
          backgroundColor: 'transparent !important',
        },
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-button:hover': {
          color: '#868dfb !important',
        },
        '& .ps-active': {
          color: '#94e2cd !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  {user?.role}
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={hospLogo}
                  style={{ cursor: 'pointer' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  WellAppoint
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                ></Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {!user?.role.includes('DOCTOR') && (
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            {user?.role.includes('ADMIN') && (
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            <Item
              title="Appointments"
              to="/appointment"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            {!user?.role.includes('DOCTOR') && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Pages
              </Typography>
            )}
            {user?.role.includes('ADMIN') && (
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            {!user?.role.includes('DOCTOR') && (
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            {!user?.role.includes('DOCTOR') && (
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            {!user?.role.includes('DOCTOR') && (
              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: '15px 0 5px 20px' }}
              >
                Charts
              </Typography>
            )}

            {!user?.role.includes('DOCTOR') && (
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            {!user?.role.includes('DOCTOR') && (
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
