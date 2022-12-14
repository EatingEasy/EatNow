import { StyleSheet, Text, View } from 'react-native';


export default function FriendCard() {
    return (
        <View style={styles.container}>
            <Text>Friend Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#dff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });