import { StyleSheet, Text, View } from 'react-native';


export default function PlaceCard() {
    return (
        <View style={styles.container}>
            <Text>Place Card</Text>
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