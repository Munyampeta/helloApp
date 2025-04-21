import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Profile = () => {
  const [likes, setLikes] = useState(0);
  const handleLikes = ()=>{
    setLikes(likes + 1);
  }
  return (
    <View>
      <Text>This is profiles</Text>
      <Text>{likes}</Text>
      <Button onPress={handleLikes} title='Like'/>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})