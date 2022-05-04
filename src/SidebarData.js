import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IconName  from "react-icons/bs";
 
// import * as IconName  from "react-icons/gi";

 

export const SidebarData = [
    {
        title: 'Register',
        path: '/',
        icon: <IconName.BsPen />,
        cName: 'nav-text'
      },
  {
    title: 'Login',
    path: '/login',
    icon: <IconName.BsPen />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IconName.BsPen/>,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard ',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Piechart ',
    path: '/chart',
    icon: <IconName.BsFillPieChartFill />,
    cName: 'nav-text'
  },
  {
    title: 'User Details',
    path: '/user',
    icon: <IconName.BsPersonLinesFill />,
    cName: 'nav-text'
  },
   
];