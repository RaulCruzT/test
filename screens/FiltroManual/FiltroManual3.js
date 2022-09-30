import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// fondo
import image from '../../assets/images/background.png';

//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//state
import { useGlobalState } from '../../providers/hookstateProvider';

const FiltroManual3 = () => {

    const state = useGlobalState();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                <View style={styles.top}>
                    <Text style={styles.title}>Tamaño</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.column}>
                        <View style={styles.columnLeft}>
                            {
                                (state.getTamano() == "Pequeño") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTamano("")}>
                                        <Entypo name="dot-single" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setTamano("Pequeño")}>
                                        <Entypo name="dot-single" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Pequeño</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.columnCentral}>
                            {
                                (state.getTamano() == "Mediano") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTamano("")}>
                                        <Entypo name="dots-two-horizontal" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setTamano("Mediano")}>
                                        <Entypo name="dots-two-horizontal" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Mediano</Text>
                        </View>
                    </View>                
                    <View style={styles.column}>
                        <View style={styles.columnRight}>
                            {
                                (state.getTamano() == "Grande") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setTamano("")}>
                                        <Entypo name="dots-three-horizontal" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setTamano("Grande")}>
                                        <Entypo name="dots-three-horizontal" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Grande</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.title}>Edad aparente</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.column}>
                        <View style={styles.columnLeft}>
                            {
                                (state.getEdadAparente() == "Cachorro") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setEdadAparente("")}>
                                        <MaterialCommunityIcons name="clock-time-four-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setEdadAparente("Cachorro")}>
                                        <MaterialCommunityIcons name="clock-time-four-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Cachorro</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.columnCentral}>
                            {
                                (state.getEdadAparente() == "Adulto") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setEdadAparente("")}>
                                        <MaterialCommunityIcons name="clock-time-seven-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setEdadAparente("Adulto")}>
                                        <MaterialCommunityIcons name="clock-time-seven-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Adulto</Text>
                        </View>
                    </View>   
                    <View style={styles.column}>
                        <View style={styles.columnRight}>
                            {
                                (state.getEdadAparente() == "Senior") 
                                ? 
                                    <TouchableOpacity style={styles.buttonClickeado} onPress={() => state.setEdadAparente("")}>
                                        <MaterialCommunityIcons name="clock-time-ten-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                                :
                                    <TouchableOpacity style={styles.button} onPress={() => state.setEdadAparente("Senior")}>
                                        <MaterialCommunityIcons name="clock-time-ten-outline" size={70} color="#FF6600" />
                                    </TouchableOpacity>
                            }
                            <Text style={{fontSize: 16, marginTop: 8}}>Senior</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <TouchableOpacity style={styles.bottomArrow} onPress={() => navigation.navigate('Filtro Manual 4')}>
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
        height: '25%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: '7%',
        paddingLeft: '9%',
    },
    mid: {
        flex:0.8,
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
        width: '33%',
    },
    columnLeft: {
        paddingRight: '4%',
        alignItems: 'center',
        paddingLeft: '4%',
    },
    columnCentral: {
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
        minWidth: 85,
        minHeight: 85,
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
        minWidth: 85,
        minHeight: 85,
        borderRadius: 10,
        shadowColor: '#36A0AD',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
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

export default FiltroManual3;