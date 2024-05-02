import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import { Image } from 'react-native';
import useAuth from '../../hooks/useAuth';
import COLORS from '../../styles/colors';
import EatMenuTab from './EatMenuTab';
import HomeTab from './HomeTab';
import MenuTab from './MenuTab';
import TrackMenuTab from './TrackMenuTab';

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
    const { auth } = useAuth();
    return (
        <Navigator
            initialRouteName='HomeTab'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeTab') {
                        return (
                            <Icon
                                source={
                                    focused
                                        ? 'home-circle'
                                        : 'home-circle-outline'
                                }
                                size={24}
                                color={color}
                            />
                        );
                    }
                    if (route.name === 'MenuTab') {
                        return (
                            <Icon
                                source={
                                    focused
                                        ? 'microsoft-xbox-controller-menu'
                                        : 'menu'
                                }
                                size={24}
                                color={color}
                            />
                        );
                    }
                    if (route.name === 'TrackMenuTab') {
                        return (
                            <Icon
                                source={
                                    focused
                                        ? 'map-marker'
                                        : 'map-marker-outline'
                                }
                                size={24}
                                color={color}
                            />
                        );
                    }
                    if (route.name === 'EatMenuTab') {
                        return (
                            <Icon
                                source={
                                    focused ? 'hamburger-check' : 'hamburger'
                                }
                                size={24}
                                color={color}
                            />
                        );
                    }
                },
                tabBarActiveTintColor: COLORS.accent,
                tabBarInactiveTintColor: COLORS.icons,
                tabBarStyle: {
                    backgroundColor: COLORS.primaryLight,
                },
                headerStyle: {
                    backgroundColor: COLORS.primaryDark,
                },
                headerLeft: () => (
                    <Image
                        source={require('../../../assets/burger32x32.png')}
                        style={{ width: 32, height: 32, marginLeft: 10 }}
                    />
                ),
            })}
        >
            <Screen
                name='MenuTab'
                component={MenuTab}
                options={{
                    tabBarLabel: 'Menu',
                    title: 'Menu',
                }}
            />
            <Screen
                name='TrackMenuTab'
                component={TrackMenuTab}
                options={{
                    tabBarLabel: 'Track',
                    title: 'Track',
                }}
            />
            <Screen
                name='EatMenuTab'
                component={EatMenuTab}
                options={{
                    tabBarLabel: 'Eat',
                    title: 'Eat',
                }}
            />
            <Screen
                name='HomeTab'
                component={HomeTab}
                options={{
                    tabBarLabel: 'Home',
                    title: 'Home',
                }}
            />
        </Navigator>
    );
};

export default TabNavigator;
