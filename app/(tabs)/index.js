import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TabHome = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> "Rate my dog"</Text>
      <Image
        source={require('../../img/img.jpg')}
        style={styles.image}
      />
      <View style={styles.likeSection}>
        <TouchableOpacity onPress={handleLike}>
          <FontAwesome name='heart' size={40} color={'red'} />
        </TouchableOpacity>
        <Text style={styles.likesText}>{likes} Likes</Text>
      </View>
    </View>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  likeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  likesText: {
    fontSize: 18,
    marginLeft: 10,
  },
});
