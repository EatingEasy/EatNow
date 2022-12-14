import { StyleSheet, Text, View } from 'react-native';


export default function Account() {
    return (
        <View style={styles.container}>
            <Text>Account</Text>
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