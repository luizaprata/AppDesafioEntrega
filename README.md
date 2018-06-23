# Requirements
- brew
- yarn
- node
- react-native
- react-native-cli
- xcode
- cocoapods
- android studio

# Getting started
- Duplicar arquivo `./.env/.env.production` e renomear para `./.env/.env.development`

## Android
- Quando tiver device/emulator rodando, consulte a lista `adb devices` 
- Run `adb -s <emulator/device name> reverse tcp:8081 tcp:8081`
- Run `react-native run-android`
- Se precisar rodar o `.\gradlew clean` comentar a linha `apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"` (script tenta acessar as variaveis de ambiente fora do projeto) em `app:build.gradle` e depois da limpeza descomentar

# Tests
You can run the linter with:
```shell
yarn linter
```
You can run all the tests with:
```shell
yarn test
```
