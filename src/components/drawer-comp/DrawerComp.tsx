import React, { useState } from "react";
import {Drawer, List, ListItemButton, ListItemIcon, IconButton, Box, Typography, Tabs, Tab} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const DrawerComp = () => {
  const [openDraw, setOpenDraw] = useState(false); 
   const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <>
      <React.Fragment>
<Drawer open={openDraw} onClose={() => setOpenDraw(false)} >
  <List>
    <ListItemButton>
<ListItemIcon>
<CloseIcon onClick={()=> setOpenDraw(!openDraw)}/>
<Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: '100%' }}
    >
      <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider'}} // Додайте minWidth для вкладок
        >
          <Tab label="Очікується валідація" {...a11yProps(0)}/>
          <Tab label="Необроблені заявки" {...a11yProps(1)} />
          <Tab label="Проводиться верифікація" {...a11yProps(2)} />
          <Tab label="Проводиться валідація" {...a11yProps(3)} />
          <Tab label="Відхилені заявки" {...a11yProps(4)} />
          <Tab label="Архів заявок" {...a11yProps(5)} />
          <Tab label="Донори" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
</ListItemIcon>
    </ListItemButton>
  </List>
</Drawer>
{window.innerWidth < 480 && <IconButton onClick={()=> setOpenDraw(!openDraw)}>
  <MenuIcon />
</IconButton>}
        </React.Fragment>    
        </>
    )
}


