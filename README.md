
##  Getting Started


###  Prerequisites

Before getting started with NNE-editor, ensure you have `npm` installed.

###  Installation


1. Clone the NNE-editor repository:
```sh
git clone https://github.com/Abhinav-Khot/NNE-editor
```

2. Navigate to the project directory:
```sh
cd NNE-editor
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm install
```




###  Usage
Run NNE-editor using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
 npm run dev
```

## CP_Mode

The `CP_Mode` is a mode to fetch test cases from popular programming platforms and evaluate them against your code.

This is currently not deployed to the main website.
You can still use it on the preview website(https://nne-editor-git-cpmode-abhinav-khots-projects.vercel.app/) but this requires you to run the `src/server/server.js` script present in the `CP_mode` branch locally first.



A GIF of the working is provided below.
![working gif](https://github.com/user-attachments/assets/c250620a-a8c4-46f7-9a15-136f0b8a28b7)

The code for it is available on branch `CP_mode` The instructions to set this up are :
- Note that you need to have the `competitive companion` browser extension installed.

1. Switch to the `CP_mode` branch
```sh
git checkout CP_mode
```

2. Install dependencies
```sh
npm install
```
3. Start the server
```sh
cd src/server
node server.js
```

4. Start the App
```sh
npm run dev
```
