import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1495127Navigator from '../features/BlankScreen1495127/navigator';
import Settings95126Navigator from '../features/Settings95126/navigator';
import UserProfile95119Navigator from '../features/UserProfile95119/navigator';
import Settings95118Navigator from '../features/Settings95118/navigator';
import Settings95116Navigator from '../features/Settings95116/navigator';
import SignIn295114Navigator from '../features/SignIn295114/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1495127: { screen: BlankScreen1495127Navigator },
Settings95126: { screen: Settings95126Navigator },
UserProfile95119: { screen: UserProfile95119Navigator },
Settings95118: { screen: Settings95118Navigator },
Settings95116: { screen: Settings95116Navigator },
SignIn295114: { screen: SignIn295114Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
