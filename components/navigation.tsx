import * as React from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import ThemeToggle from './ThemeToggler';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  window?: () => Window;
}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const drawerWidth = 240;
const navItems = ['About', 'Experience', 'Work', 'Contact'];

function HideOnScroll(props: Props) {
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

export default function DrawerAppBar(props: Props) {
  const IsNotMobile = useMediaQuery('(min-width:600px)');
  const IsNotDesktop = useMediaQuery('(max-width:600px)');
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setIsDesktop(IsNotMobile);
    setIsMobile(IsNotDesktop);
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link href="/">
        <Typography variant="h6" sx={{ my: 2, cursor: 'pointer' }}>
          &#60;evro.eth/&#62;
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
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
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link href="/">
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
              >
                {' '}
                &#60;evro.eth/&#62;{' '}
              </Typography>
            </Link>

            <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, alignItems: 'center', textAlign: 'center' }}>
              {navItems.map((item) => (
                <Link href={`#` + item} passHref>
                  <Button key={item} sx={{ textTransform: 'capitalize' }}>
                    <Typography className="count" variant="body2">
                      {item}
                    </Typography>
                  </Button>
                </Link>
              ))}

              <ThemeToggle />
            </Box>
            {isMobile ? (
              <Link href="/">
                <Typography variant="h6" component="div" sx={{ cursor: 'pointer' }}>
                  {' '}
                  &#60;evro.eth/&#62;{' '}
                </Typography>
              </Link>
            ) : null}
            <div />
            <Box>
              {!isDesktop ? <ThemeToggle /> : null}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, ml: 1, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
