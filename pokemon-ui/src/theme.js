import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { red, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    fontFamily: ['Roboto', 'sans-serif'],
    palette: {
        primary: red,
        secondary: blue
    }
});

export default theme;
