
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

A GIF of the working is provided below.


 This is currently not deployed. The instructions to set this up are :
- Note that you need to have the `competitive companion` browser extension installed.

1. Switch to the `CP_mode` branch
```sh
git checkout CP_mode
```

2. Install dependencies
```sh
npm install
```
3. Start the Express server
```sh
cd src/server
node server.js
```

4. Start the App
```sh
npm run dev
```
