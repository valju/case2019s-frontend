import { createMuiTheme } from '@material-ui/core/styles';

export const defaultPalette = {
  /* Refer to the settings like this   theme.palette.primary.main */
  primary: {
    main: "#DDDDDD",
    light: "#000000"
  },
  secondary: {
    main: "#999999",
    light: "#BBBBBB"
  },

  background: {
    paper: "#DDEEFF",
    default: "#FFFFFF"
  },

  ourButton: { hoverText: "#3377AA" },
  hover: { main: "#450000" },
  accent: { main: "#88AA00" },


  // These three are from Material-UI Snackbar documentatation,
  error: { main: "#D32F2F" },
  warning: { main: "#FFA000" },
  information: { main: "#1976D2" },
  success: { main: "#43A047" },
};

// This is not part of the product as such, a technical test palette
export const redPalette = {
  primary: {
    main: "#FF3333",
    light: "#FF6666"
  },
  secondary: {
    main: "#FF8888",
    light: "#F44336"
  },

  background: {
    paper: "#FFBBBB",
    default: "#F2AEB8"
  },

  ourButton: { hoverText: "#FF2222" },
  hover: { main: "#FF9AD5" },
  accent: { main: "#AC3939" },

  // These three are from Material-UI Snackbar documentataion,
  // But now reddened
  error: { main: "#FF1111" },
  warning: { main: "#FF6600" },
  information: { main: "#B97446" },
  success: { main: "#CC9900" },
  textDecoration : {
    main: 'none',
  },

};

// This is not part of the product as such, a technical test palette
export const yellowPalette = {
  primary: {
    main: "#CC9900",
    light: "#CCFF66"
  },
  secondary: {
    main: "#FFFF99",
    light: "#FFFFAA"
  },

  background: {
    paper: "#FFFFE6",
    default: "#F2F2BF"
  },

  ourButton: { hoverText: "#AAAA11" },
  hover: { main: "#FFFF11" },
  accent: { main: "#BB7700" },

  // These three are from Material-UI Snackbar documentataion,
  // But now yellowed
  error: { main: "#FF6600" },
  warning: { main: "#FFCC00" },
  information: { main: "#66FFFF" },
  success: { main: "#CCFF33" },

};

const selectedPalette = redPalette;  //  defaultPalette | redPalette | yellowPalette
/* redPalette and yellowPalette are technical tools for finding
any hard-coded elements/colors = not
 using Material UI components and/or the theme colors
 Used from project to another, not customer's colors
 */

const theme = createMuiTheme({
  palette: {
    /* Refer to the settings like this   theme.palette.primary.main */
    primary: {
      main: selectedPalette.primary.main,
      light: selectedPalette.primary.light,
    },

    secondary: { main: selectedPalette.secondary.main, },

    background: {
      paper: selectedPalette.background.paper,
      default: selectedPalette.background.default
    },

    ourButton: { hoverText: selectedPalette.ourButton.hoverText, },
    hover: { main: selectedPalette.hover.main, },
    accent: { main: selectedPalette.accent.main, },

    error: { main: selectedPalette.error.main, },
    warning: { main: selectedPalette.warning.main, },
    information: { main: selectedPalette.information.main },
    success: { main: selectedPalette.success.main, },

    //https://spectrum.chat/material-ui/help/understanding-theming-especially-getcontrasttext~de612107-9256-4e74-ad63-453ab8a29812
    contrastThreshold: 4,
    tonalOffset: 0.1,


  },
  typography: {
      // Project's possible main font definitions here, otherwise Material-UI defaults
      body2:{
        color: selectedPalette.primary.main,

      },
     /*  a:{
        color: selectedPalette.primary.main,
      } */

  },
  overrides:{
    MuiListItemIcon:{
      root:{
        color:selectedPalette.primary.main,
      }
    }
  },


});

export default theme;

/*   Snackbar colors picked up 2019 from https://material-ui.com/demos/snackbars/
  error:          { main:       "#D32F2F" },
  warning:        { main:       "#FFA000" },
  information:    { main:       "#1976D2" },
  success:        { main:       "#43A047" },
*/
