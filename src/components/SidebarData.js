import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <HomeIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <DescriptionIcon />,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <DescriptionIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <DescriptionIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <DescriptionIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: 'Products',
    path: '/products',
    icon: <ShoppingCartIcon />,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <PeopleIcon />,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <EmailIcon />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <DescriptionIcon />,
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    icon: <HelpOutlineIcon />,
  },
];
