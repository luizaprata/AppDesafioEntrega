# Requirements
To run  this project, you should have installed:
- brew
- yarn
- node
- react-native
- react-native-cli
- xcode
- cocoapods
- android studio

## Android
- Once you have a device/emulator running, open the terminal and type `adb devices` to see a list of available devices
- Run `adb -s <emulator/device name> reverse tcp:8081 tcp:8081`
- Directly by command line: `react-native run-android`

## iOS
- On the `/ios` folder, run `pod install`

### On Xcode
- Run (double click) on the `Estabelecimentos.xcworkspace` file
- And then, just run the project

### On command line
- Go to the project root folder: `cd ..`
- Run `react-native run-ios`

# How to run the tests?
Currently we have a linter, unit and integration tests

You can run the linter with:
```shell
yarn linter
```

You can run all the tests with:
```shell
yarn test
```
