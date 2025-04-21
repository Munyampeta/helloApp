import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={()=> router.navigate('../(drawer)')}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({})