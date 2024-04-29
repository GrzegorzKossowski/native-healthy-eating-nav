import useAuth from '../hooks/useAuth';
import TabNavigator from '../screens/tab-creens/TabNavigator';
import StackNavigator from '../screens/stack-screens/StackNavigator';

export default function AppWrapper() {
    const { auth } = useAuth();

    return <>{auth.token ? <TabNavigator /> : <StackNavigator />}</>;
}
