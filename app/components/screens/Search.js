import { StyleSheet, Text, View } from 'react-native';


export default function Search() {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
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