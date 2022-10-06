import { SafeAreaView, StatusBar, ImageBackground, StyleSheet, Text} from 'react-native';

// imagenes & logo
import image from '../../assets/images/background.png';

const FiltroAutomatizado2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1, alignItems: "center", justifyContent: "center"}}>
                <Text>FiltroAutomatizado2</Text>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        width: "100%",
        maxHeight: "68%" 
    },
});

export default FiltroAutomatizado2;