import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// fondo
import image from '../../assets/images/background.png';

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//state
import { useGlobalState } from '../../providers/hookstateProvider';

const FiltroManual1 = () => {

    const state = useGlobalState();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                <View style={styles.top}>
                    <Text style={styles.title}>¿A quién quiere buscar?</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.column}>
                        <View style={styles.columnLeft}>
                            {
                                (state.getTipoBusqueda() == "Mascota") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTipoBusqueda("")}>
                                        <MaterialCommunityIcons name="dog" size={100} color="#FF6600"/>
                                    </TouchableOpacity>
                                :
                                    
                                    <TouchableOpacity style={styles.button} onPress={() => state.setTipoBusqueda("Mascota")}>
                                        <MaterialCommunityIcons name="dog" size={100} color="#FF6600"/>
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Mascota</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.columnRight}>
                            {
                                (state.getTipoBusqueda() == "Dueño") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTipoBusqueda("")}>
                                        <MaterialCommunityIcons name="human-greeting" size={100} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setTipoBusqueda("Dueño")}>
                                        <MaterialCommunityIcons name="human-greeting" size={100} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Dueño</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <TouchableOpacity style={styles.bottomArrow} onPress={() => navigation.navigate('Filtro Manual 2')}>
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
        height: '40%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '10%',
    },
    title: {
        color: '#060606',
        fontSize: 21,
        fontWeight: "500",
    },
    bottom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: "5%"
    },
    column: {
        width: '50%',
    },
    columnLeft: {
        paddingRight: '4%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '4%',
    },
    columnRight: {
        paddingLeft: '4%',
        display: 'flex',
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
        maxHeight: 40,
        flex: 1,
        shadowColor: '#C1C1C1',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        bottom: 0,
        right: 0
    },
    bottomArrow: {
        top: 0,
        left: 0,
        paddingLeft: "85%"
    }
});

export default FiltroManual1;