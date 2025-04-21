import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

export default function EarnScreen() {
  const [likes, setLikes] = useState(0);
  const [points, setPoints] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [topUpAmount, setTopUpAmount] = useState('');

  // RATE: 10 likes = 1 point
  const calculatePoints = () => {
    const earnedPoints = Math.floor(likes / 10);
    setPoints(points + earnedPoints);
    setLikes(likes % 10);
  };

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  // Withdraw function: 1 point = 100 RWF or 0.1 USD
  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);

    if (isNaN(amount) || amount <= 0) {
      Alert.alert("Error", "Shyiramo umubare w'amafaranga");
      return;
    }

    const pointsToWithdraw = Math.ceil(amount / 100); // 100 RWF = 1 point

    if (points >= pointsToWithdraw) {
      setPoints(points - pointsToWithdraw);
      Alert.alert("Withdraw Successful", `Wakuyeho RWF ${amount}`);
    } else {
      Alert.alert("Failed", "Points zawe ntizihagije");
    }

    setWithdrawAmount('');
  };

  const handleTopUp = () => {
    const amount = parseFloat(topUpAmount);

    if (isNaN(amount) || amount <= 0) {
      Alert.alert("Error", "Shyiramo amafaranga ushaka kongeraho");
      return;
    }

    const pointsToAdd = Math.floor(amount / 100); // 100 RWF = 1 point
    setPoints(points + pointsToAdd);
    Alert.alert("Top-Up Successful", `Wongeyeho RWF ${amount}`);
    setTopUpAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Likes: {likes}</Text>
      <Text style={styles.title}>Your Points: {points}</Text>

      <Button title="Add Like" onPress={handleLike} />

      <View style={styles.btn}>
        <Button title="Calculate Points" onPress={calculatePoints} />
      </View>

      <Text style={styles.section}>Withdraw (100 RWF = 1 Point)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter RWF to withdraw"
        keyboardType="numeric"
        value={withdrawAmount}
        onChangeText={setWithdrawAmount}
      />
      <Button title="Withdraw" onPress={handleWithdraw} color="#ff4444" />

      <Text style={styles.section}>Top-Up (100 RWF = 1 Point)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter RWF to top up"
        keyboardType="numeric"
        value={topUpAmount}
        onChangeText={setTopUpAmount}
      />
      <Button title="Top-Up" onPress={handleTopUp} color="#44cc44" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff'
  },
  title: {
    fontSize: 20, marginVertical: 10
  },
  section: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  btn: {
    marginVertical: 10
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '80%',
    marginVertical: 10
  }
});
