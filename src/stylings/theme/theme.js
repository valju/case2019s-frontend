import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";
import red from "@material-ui/core/colors/red";

const paletteNormal = {};
const paletteYellow = {
  primary: yellow
};
const paletteRed = { primary: red };

export const theme = createMuiTheme({
  palette: paletteRed,
  typography: {
    fontSize: "10rem",
    fontFamily: "'Open Sans', sans-serif'"
  }
});
