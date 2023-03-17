# Mallsss
## Git instructions (Using cmd):
### Create own branch:
  1. git clone <git repo link>
  2. npm install & install dependencies
  3. git checkout -b <new_branch_name>

### To commit to own branch:
  1. git add .
  2. git commit -m "Type_any_message_here"
  3. git push -u origin <own_branch_name>
  - use git status whenever to check

### To commit to main:
  1. Commit to own branch first
  2. git checkout main
  3. git pull
  4. git merge <own_branch_name>
      - resolve any merge conflicts
  5. git push origin main

<hr>

  
Can try to code under the src folder. Create a sub-branch and code it in sub-branch first.

Priscilla - UserAuthentication + MallRecommendation
<br/>
Zhong Han - Store
<br/>
Nicole - History
<br/>
Kristine&Thaddeus - Settings (Includes Change Theme + Update Password + Logout)
<br/>
Zack - CarparkOrMall + Result

## Dependencies to Install
<br>
https://reactnavigation.org/docs/getting-started
<br>

### React Navigation
```
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

### React Navigation Stack & Native Stack
```
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
npm install @react-navigation/native-stack 
------------
npm install react-navigation
npm install react-navigation-stack
```
### React Native Map
```
npx expo install react-native-maps@1.3.2
```
### Expo Location
```
npx expo install expo-location
```
### React Native Map Direction
```
npm install react-native-maps-directions
```
### CSS Module Styling
```
npm install --save-dev babel-plugin-react-native-classname-to-style
npm install --save-dev babel-plugin-react-native-platform-specific-extensions
npm install react-native-css-transformer 
npm install react-native-paper
npm install typescript@4.9.4
npm install --save @types/react


```
