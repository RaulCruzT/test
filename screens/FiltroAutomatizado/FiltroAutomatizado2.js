import { SafeAreaView, StatusBar, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

// imagenes & logo
import image from '../../assets/images/background.png';
import pets from '../../assets/images/pets.png';

// icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// state
import { useGlobalState } from '../../providers/hookstateProvider';

const FiltroAutomatizado2 = () => {
    const state = useGlobalState();
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
    
        if (!result.cancelled) {
            state.setImagen(result.uri);
        } else {
            console.log("algo ha fallado!")
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                <View style={styles.top}>
                <FontAwesome5 name="robot" size={40} color="black" />
                    <Text style={styles.title}>Hola, yo soy SamRobot</Text>
                </View>
                <View style={styles.content}>
                    <Text style={{textAlign: 'center', marginHorizontal: '6%'}}>Ahora deja que <Text syle={{fontWeight: 'bold'}}>SamRobot</Text> se encargue de buscar a tu mascota en redes sociales. Dale unos segundos, nosotros te avisamos cuando esté listo!</Text>
                    {state.getImagen() && <Image source={{ uri: state.getImagen() }} style={styles.selectedImage} />}
                    <TouchableOpacity style={[styles.rectangle, styles.shadow]} onPress={pickImage}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('Filtro Automatizado 3')}>Buscar a mi mascota</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{textAlign: 'center', textDecorationLine: 'underline'}} onPress={pickImage}>¿Modificar imagen?</Text>
                    </TouchableOpacity>
                </View>
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
    top: {
        height: '30%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '10%',
    },
    title: {
        color: '#060606',
        fontSize: 30,
        fontWeight: "500",
    },
    content: {
        height: '70%',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    rectangle: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#36A0AD',
        borderRadius: 20,
        height: 60,
        width: 230
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5
    },
    buttonText: {
        color: "#fff",
        fontSize: 18
    },
    selectedImage: {
        width: 180,
        height: 180,
        borderRadius: 20,
        marginTop: '5%'
    }
});

export default FiltroAutomatizado2;