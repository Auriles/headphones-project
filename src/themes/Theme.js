// Fichier Theme

import { ThemeProvider } from 'styled-components';
import theme from "../base/Typography";

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Theme;