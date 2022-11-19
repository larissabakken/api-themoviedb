# App NAME

### Software prerequisites

Install the below tools/packages

| Serial No   | Software           | Version   | Installation site |
| :---------: | :----------------: | :-------: | :---------------- |
| 1           | Node.js            | >= 16.17.0  | [Install NodeJS](https://nodejs.org/en/download/) |
| 2           | yarn               | >= 1.22.0 | [Install Yarn](https://yarnpkg.com/)      |
| 3           | react-native       | >= 0.69.6 | [Install react-native](https://www.npmjs.com/package/react-native) |
| 5           | expo                | >= 46.0.16 | [Install Expo](https://www.npmjs.com/package/exp) |


### Setup Instructions

#### System setup
1. Clone the repo with `git clone [REPO_URL]` command
2. Switch to the project's root directory in terminal
3. Install the dependencies by running `yarn`
4. Once, 'npm install' is completed, run `expo start` or `yarn start` to start the expo and react-native server
5. If it shows a QR code on the terminal as a result of 'expo start' command, then you are good to go!

You can write your env specific config variables on `.env` file and import them from `react-native-dotenv` package as mentioned [here](https://github.com/zetachang/react-native-dotenv#usage).

Ignore the first step on 'Mobile setup' instructions given below if you already have 'Expo' app installed on your phone.

#### Mobile setup
1. Install 'Expo' application on your android/iOS device. You can find the links to Android and iOS apps [here](https://expo.io/tools#client).
2. Scan the QR code shown on the terminal.
3. Once the QR code is successfully scanned, it will take few seconds to load and render the app.

#### Note 
