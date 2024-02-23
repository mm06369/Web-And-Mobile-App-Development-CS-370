// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import Home from "./src/pages/Home";

// class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Welcome to React Native!</Text>
//       </View>
//     );
//   }
// }


// export default App;
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/pages/Home";
import AddNoteScreen from "./src/pages/AddNote";
import NoteDetailsScreen from "./src/pages/NoteDetails";


const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NoteDetails" component={NoteDetailsScreen} />
          <Stack.Screen name="AddNote" component={AddNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

// //Reference: CHATGPT was used for creating some widgets. 
