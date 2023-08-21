import { View, StyleSheet, Text } from "react-native";


export default function Navbar() {

    return(
        <View style={styles.container}>
            <Text>Texte</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 64,
        backgroundColor: '#FFF',
    }
});
