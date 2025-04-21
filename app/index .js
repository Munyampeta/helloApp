import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Home = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to this app</Text>

            <TouchableOpacity style={styles.button}>
                <Link href="./auth/login" style={styles.linkText}>Login</Link>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=> router.push('/auth/register')}>
                <Text style={styles.linkText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    button: {
        backgroundColor: '#4a90e2',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    linkText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
