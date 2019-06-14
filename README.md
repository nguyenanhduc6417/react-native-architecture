## React Native base architecture

This project structure was made thinking in productivity and easy maintenance.

#### What it brings ?

1. Redux for manage statement
2. Helper for make HTTP requests using Axios
3. Helper with Drawer, Tab and Stack navigation using react-navigation
4. Helper for store/cache data on device using AsyncStorage with a helper class
5. Custom Components like Loading,Card(View), Container with transitions, Container Scroll, Container Grid for responsive layout using flexbox (like Bootstrap), EditText / Button using Material Design, Calendar, Dropdown, Spinner, etc.
6. Centering global values like native Android: "strings" (to put all the strings values that will be used on the pages), sizes (to set the margin or fontSize default for buttons, containers, etc), theme (to set the color pallet of the theme) and the colors defaults.
7. Also, at "hocs" folder we have a HOC called "Loading", that is a big help for loading pages during a HttpRequest.
