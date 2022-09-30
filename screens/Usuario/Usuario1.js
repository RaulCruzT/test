import { SafeAreaView, StyleSheet, Text } from "react-native";


const Usuario1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Usuario1</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Usuario1;