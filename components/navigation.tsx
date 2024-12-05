import * as React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from 'next/link';
import ThemeToggle from './ThemeToggler';
import useMediaQuery from '@mui/material/useMediaQuery';
import { m, Variants } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

/* FRAMER m VARIANTS */

const navLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '-1vw',
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', mass: 2.5, stiffness: 25 },
  },
};

const drawerWidth = 240;
const navItems = ['About', 'Work', 'Projects', 'Contact'];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function DrawerAppBar(props) {
  const IsNotDesktop = useMediaQuery('(max-width:600px)');
  const [isMobile, setIsMobile] = React.useState(false);
  const theme = useTheme();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sendDataToGTM = useGTMDispatch();

  let handleNavDesktopClick = (e) =>
    sendDataToGTM({
      event: 'click_internal',
      element: 'link',
      detail: e,
      device: 'desktop',
      section: 'navigation_head',
    });

  let handleNavMobileClick = (e) =>
    sendDataToGTM({
      event: 'click_internal',
      element: 'link',
      detail: e,
      device: 'mobile',
      section: 'navigation_head',
    });

  React.useEffect(() => {
    setIsMobile(IsNotDesktop);
  }, [IsNotDesktop]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="http://www.evro.dev" className="no-underline">
        <Typography
          variant="h6"
          component="div" // Use "div" instead of Framer Motion if not animating
          sx={{
            textDecoration: 'none', // Removes underline
            cursor: 'pointer',
            textAlign: 'center',
            fontWeight: 'bold',
            color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
            textDecorationLine: 'none'
          }}
        >
          &#60;evan.rosa/&#62;
        </Typography>
      </Link>



      <Divider />
      <List className="mobile-list">
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={() => handleNavMobileClick(item)}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between', // Space between the logo and navigation
              alignItems: 'center', // Center vertically
              gap: 2, // Adds spacing between elements in flex items
              width: '100%', // Ensures the toolbar spans full width
            }}
          >
            <Link href="/" className="text-dor no-underline">
              <Typography
                variant="h6"
                component="div" // Use "div" instead of Framer Motion if not animating
                sx={{
                  textDecoration: 'none', // Removes underline
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
                  textDecorationLine: 'none'
                }}
              >
                &#60;evan.rosa/&#62;
              </Typography>
            </Link>


            <Box
              sx={{
                display: { xs: 'none', sm: 'flex', md: 'flex' },
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => (
                <Link href={`/#` + item} passHref key={item}>
                  <Button
                    onClick={() => handleNavDesktopClick(item)}
                    key={item}
                    sx={{ textTransform: 'capitalize' }}
                    variants={navLinkVariants}
                    component={m.div}
                  >
                    <Typography className="count" variant="body2">
                      {item}
                    </Typography>
                  </Button>
                </Link>
              ))}

              <m.div variants={navLinkVariants}>
                <ThemeToggle aria-label="Toggle Theme Colors" />
              </m.div>
            </Box>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: 'none' },
                  ml: 'auto', // Ensures alignment on the far right
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            ) : null}
          </Toolbar>

        </AppBar>
      </HideOnScroll>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
