import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import HomeScreen from './screens/home'
import SearchScreen from './screens/search'
import ActivityScreen from './screens/activity'
import ProfileScreen from './screens/profile'
import UploadScreen from './screens/upload'



const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: 
      { screen: HomeScreen,  
          navigationOptions:
          {  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
                  </View>),  

              activeColor: '#000000',  
              inactiveColor: '#000000', 
   
                  
          }  
      },  
      Search: { screen: SearchScreen,  
        navigationOptions:{  
            tabBarLabel:'Search',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'search'}/>  
                </View>),  
            activeColor: '#000000',  
            inactiveColor: '#000000',  
              
        }  
    },



    Activity:{ screen: ActivityScreen,
      navigationOptions:{
        tabBarLabel:'Activity',
        tabBarIcon: ({tintColor}) =>(
          <View>
              <Icon style={[{color: tintColor}]} size={25} name={'heart'} />
          </View>
          ),
          activeColor: '#000000',  
            inactiveColor: '#000000', 


      }

    },

    Profile: { screen: ProfileScreen,  
      navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
              </View>),  
          activeColor: '#000000',  
          inactiveColor: '#000000',   
      }  
    }

  },
  {  
    initialRouteName: "Profile",  
    activeColor: '#000000',  
    inactiveColor: '#000000', 
    barStyle: { backgroundColor: '#ffffff' },    
  
  },  
  
  
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator);  
