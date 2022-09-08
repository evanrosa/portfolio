import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../themes/color-context';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

export default function ThemeToggle() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const sendDataToGTM = useGTMDispatch()


  let themeToggleClick = (e) => sendDataToGTM({ event: 'click_internal', element: 'navigation_head', detail: 'theme_toggle', category: theme.palette.mode })

  const handleClick = () => {
    themeToggleClick;
    colorMode.toggleColorMode;
  };



  return (
    <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
