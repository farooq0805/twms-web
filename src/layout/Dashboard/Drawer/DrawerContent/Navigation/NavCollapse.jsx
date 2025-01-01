import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material-UI
import { Collapse, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
// Project import
import NavItem from './NavItem';

export default function NavCollapse({ item, level }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

    const nestedItems = item.children?.map((menuItem) => {
      switch (menuItem.type) {
        case 'collapse':
          return <NavCollapse key={menuItem.id} item={menuItem} level={level + 1} />;
        case 'item':
          return <NavItem key={menuItem.id} item={menuItem} level={level + 1} />;
        default:
          return (
            <Typography key={menuItem.id} variant="h6" color="error" align="center">
              Invalid menu type
            </Typography>
          );
      }
    });

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleToggle} sx={{ pl: level * 2, color: '#fff' }}>
          <ListItemText primary={item.title} />
          {open ? <DownOutlined /> : <UpOutlined />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems}
        </List>
      </Collapse>
    </>
  );
}
