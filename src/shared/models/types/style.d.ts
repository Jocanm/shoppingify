// import original module declarations
import 'styled-components';
import { breakpoints, colors, globals } from '../../styles';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        breakpoints: typeof breakpoints;
        colors: typeof colors;
        globals: typeof globals
    }
}