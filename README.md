# Manual setup

1. run `yarn` on each folder (`native`, `shared` and `web`)
2. `cd shared` then `yarn link`.
3. `cd web` then `yarn link shared`.
4. `cd native` then `yarn link shared`.

All the above can be eliminated once Yarn Workspaces starts working properly with projects bootstrapped with `react-native init`.
