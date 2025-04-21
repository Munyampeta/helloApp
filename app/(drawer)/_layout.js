import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer"
export default function RootLayout() {
    return (
        <GestureHandlerRootView>
            <Drawer>
                <Drawer.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        drawerLabel: "Home"
                    }}
                />

                <Drawer.Screen
                    name="about"
                    options={{
                        title: 'About',
                        drawerLabel: "About"
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}