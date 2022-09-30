import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// fondo
import image from '../../assets/images/background.png';

//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//state
import { useGlobalState } from '../../providers/hookstateProvider';


const FiltroManual2 = () => {

    const state = useGlobalState();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                <View style={styles.top}>
                    <Text style={styles.title}>Tipo de Mascota</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.column}>
                        <View style={styles.columnLeft}>
                                {
                                    (state.getTipoMascota() == "Perro") 
                                    ? 
                                        <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTipoMascota("")}>
                                            <FontAwesome5 name="dog" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                    : 
                                        <TouchableOpacity style={[styles.button]} onPress={() => state.setTipoMascota("Perro")}>
                                            <FontAwesome5 name="dog" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                }
                            <Text style={{fontSize: 16, marginTop: 8}}>Perro</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.columnRight}>
                                {
                                    (state.getTipoMascota() == "Gato") 
                                    ? 
                                        <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTipoMascota("Gato")}>
                                            <FontAwesome5 name="cat" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                    :
                                        <TouchableOpacity style={styles.button} onPress={() => state.setTipoMascota("Gato")}>
                                            <FontAwesome5 name="cat" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                }
                            <Text style={{fontSize: 16, marginTop: 8}}>Gato</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.title}>Sexo</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.column}>
                        <View style={styles.columnLeft}>
                                {
                                    (state.getSexo() == "Hembra") 
                                    ? 
                                        <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setSexo("")}>
                                            <Ionicons name="female" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                    : 
                                        <TouchableOpacity style={styles.button} onPress={() => state.setSexo("Hembra")}>
                                            <Ionicons name="female" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                }
                            <Text style={{fontSize: 16, marginTop: 8}}>Hembra</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.columnRight}>
                                {
                                    (state.getSexo() == "Macho") 
                                    ? 
                                        <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setSexo("")}>
                                            <Ionicons name="male" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                    :
                                        <TouchableOpacity style={styles.button} onPress={() => state.setSexo("Macho")}>
                                            <Ionicons name="male" size={100} color="#FF6600" />
                                        </TouchableOpacity>
                                }
                            <Text style={{fontSize: 16, marginTop: 8}}>Macho</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <TouchableOpacity style={styles.bottomArrow} onPress={() => navigation.navigate('Filtro Manual 3')}>
                <AntDesign name="arrowright" size={40} color="#36A0AD" />
            </TouchableOpacity>
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
        flex:0.8,
        paddingTop: '17%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: '7%',
        paddingLeft: '9%',
    },
    mid: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: '7%',
        paddingLeft: '9%',
    },
    title: {
        color: '#060606',
        fontSize: 21,
        fontWeight: "500",
    },
    bottom: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: "5%"
    },
    column: {
        width: '50%',
    },
    columnLeft: {
        paddingRight: '4%',
        alignItems: 'center',
        paddingLeft: '4%',
    },
    columnRight: {
        paddingLeft: '4%',
        alignItems: 'center',
        paddingRight: '4%',
    },
    button: {
        backgroundColor: '#ffffff',
        minWidth: 130,
        minHeight: 130,
        borderRadius: 10,
        shadowColor: '#C1C1C1',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: '2%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonClickeado: {
        backgroundColor: '#ffffff',
        minWidth: 130,
        minHeight: 130,
        borderRadius: 10,
        shadowColor: '#36A0AD',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: '2%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:"#36A0AD", 
        borderWidth:2
    },
    arrow: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '8%',
        shadowColor: '#C1C1C1',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    bottomArrow: {
        top: 0,
        left: 0,
        paddingLeft: "85%"
    }
});

export default FiltroManual2;