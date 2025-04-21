import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: 'This is Home',
            drawerLabel: "Home"
          }}
        />
        

        <Drawer.Screen
          name="about"
          options={{
            title: 'This is about us page',
            drawerLabel: "About"
          }}
        />

        <Drawer.Screen
          name="(tabs)" // <-- Folder yitwa (tabs)
          options={{
            title: 'Tabs Navigation',
            drawerLabel: "Main Tabs"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
