import { SafeAreaView, StatusBar, ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

// imagenes & logo
import image from '../../assets/images/background.png';
import pets from '../../assets/images/pets.png';

// icons
import { AntDesign } from '@expo/vector-icons';

// state
import { useGlobalState } from '../../providers/hookstateProvider';

const FiltroAutomatizado1 = () => {
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
        navigation.navigate("Filtro Automatizado 2");
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
                    <Text style={styles.title}>Sube una imagen</Text>
                </View>
                <View style={styles.content}>
                  <Text style={{textAlign: 'center', marginHorizontal: '6%'}}>Cuando subas una imagen de tu mascota perdida nuestro SamRobot se encargará de buscar en todas las redes sociales y nuestros datos a tu mascota</Text>
                  <TouchableOpacity style={[styles.circle, styles.shadow]} onPress={pickImage}>
                    <AntDesign name="camerao" size={100} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Consejos para subir tu imagen</Text>
                  </TouchableOpacity>
                  <Image source={pets} resizeMode="stretch" imageStyle={styles.image2}></Image>
                </View>
                {/* <Button title="Selecciona una imagen" onPress={pickImage} />
                {state.getImagen() && <Image source={{ uri: state.getImagen() }} style={{ width: 200, height: 200 }} />} */}
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
  image2: {
    marginTop: "10%",
    flex: 1,
    width: "100%",
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
  circle: {
    marginVertical: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#36A0AD'
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  }
});

export default FiltroAutomatizado1;
