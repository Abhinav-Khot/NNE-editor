##  Getting Started

###  Prerequisites

Before getting started with NNE-editor, ensure you have `node` and `npm` installed.

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


**Using** [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
npm install
```


###  Usage
Run NNE-editor using the following command:
**Using** [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
 npm run dev
```

The Piston API is no longer accessible to the pubic as of Feb 15, 2026 ([See Link](https://github.com/engineer-man/piston?tab=readme-ov-file)) and thus running this project locally will not execute the code as expected. **Courtesy of `Engineer-Man` (the developer of Piston) we have obtained an authorization key and use this to run the [public website](https://nne-editor.vercel.app) (and the preview website for CP_Mode).** 


## CP_Mode

The `CP_Mode` is a mode to fetch test cases from popular programming platforms and evaluate them against your code.

This is currently not deployed to the main website.
You can still use it on the [preview website](https://nne-editor-git-cpmode-abhinav-khots-projects.vercel.app?_vercel_share=jfelIqNVOkFqwPiaQ1As9sfH108AgRkS) but this requires you to run the `src/server/server.js` script present in the `CP_mode` branch locally first.


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

(Again, as stated before, since Feb 15 2026, running this locally wont execute code since an authorization key is required and we have not exposed our key on GitHub.)
