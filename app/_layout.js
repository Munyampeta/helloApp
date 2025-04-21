import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Home"
                }}
            />
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                    title: "Home"
                }}
            />
            <Stack.Screen
                name="(drawer)"
                options={{
                    headerShown: false,
                    title: "Home"
                }}
            />            
            <Stack.Screen
                name="auth/login"
                options={{
                    headerShown: true,
                    title: "Login"
                }}
            />
            <Stack.Screen
                name="auth/register"
                options={{
                    headerShown: true,
                    title: "Register"
                }}
            />
        </Stack>
    );
}