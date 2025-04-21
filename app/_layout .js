import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                headerShown:false,
                title:"Home"
            }}
            />
            <Stack.Screen
            name="auth/login"
            options={{
                headerShown:false,
                title:"Login"
            }}
            /> 
                        <Stack.Screen
            name="auth/register"
            options={{
                headerShown:false,
                title:"Register"
            }}
            />            
        </Stack>
    );
}