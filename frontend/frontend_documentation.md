# The Frontend Documentation

How to update React Dependencies and start frontend:
```
yarn install
yarn start
```

## File Structure

The 'components' folder in src contains the folders for each page consisting of the respective .js, .jsx and .css files

Images are stored under the 'assets' folder in src within the folder corresponding to the page using the image

## Important Utils
### **Functional Components**
When using React, we greatly utilize functional components over class components as they are much easier to read and to test, with them being plain JavaScript functions. Thus, we end up with less code and make sure we always use best practices of programming. It is also easier to separate container and presentational components this way.  

<br />

### **MUI**
We also utilize the MUI, which is a library of UI components we can use to build React applications. MUI helps us make visually appealing systems quickly and easily, which also has the option for customization. For example, we use the Button component from MUI to style our buttons better. 
<br /><br />
Usage:
1. Install @mui/material and save in package.json dependencies<br />
> Installation using npm:
```
npm install @material-ui/core
```
> Installation using yarn:
```
yarn add @material-ui/core
```
2. For example, import Button component on top of .js / .jsx files: 
```
import Button from '@mui/material/Button';
```
3. Use Button component with icon name as icon parameter: 
```
<Button variant="contained">Hello World</Button>
```
4. We could also add more custom properties to style the Button component further. Properties such as: ```color, size, startIcon, endIcon, IconButton, etc.```

<br />

### **Iconify**
We also find iconify libraries to be useful when adding icons to our interface rather than "hardcoding" icons with images. For example, checkmark, cross, social media icons.<br /><br />
Usage:
1. Install @iconify/react and save in package.json dependencies<br />
> Installation using npm:
```
npm install --save-dev @iconify/react
```
> Installation using yarn:
```
yarn add --dev @iconify/react
```
2. Import Icon component on top of .js / .jsx files: 
```
import { Icon } from '@iconify/react';
```
3. Use Icon component with icon name as icon parameter: 
```
<Icon icon="mdi-light:home" />
```
4. We could also add more custom properties to style the Icon component further. Properties such as: ```inline, width, height, hFlip, vFlip, flip, rotate, color, onLoad.```
