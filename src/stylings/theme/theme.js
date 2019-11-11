import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import red from "@material-ui/core/colors/red";
import { blueGrey } from "@material-ui/core/colors";

const paletteNormal = {primary: blueGrey};
//const paletteYellow = {primary: yellow};
//const paletteRed = { primary: red };

export const theme = createMuiTheme({
  palette: paletteNormal,
  typography: {
    fontSize: 10,
    fontFamily: "'Open Sans', sans-serif'"
  }
});
