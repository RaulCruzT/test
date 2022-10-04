import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

// fondo
import image from '../../assets/images/background.png';

// data
import { colores } from '../../data/colores';

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
                <View style={styles.mid}>
                    <Text style={styles.title}>Color dominante</Text>
                </View>
                <View style={styles.bottom2}>
                    <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={colores}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder='Seleccione un color'
                            searchPlaceholder="Escriba un color"
                            value={state.getColor()}
                            onChange={item => {
                                state.setColor(item.value);
                            }}
                    />
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
    bottom2: {
        flex: 1,
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
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default FiltroManual3;