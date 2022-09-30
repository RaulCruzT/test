import { SafeAreaView, StyleSheet, Text } from "react-native";


const Publicar1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Publicar1</Text>
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

export default Publicar1;