import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ImageBackground, Pressable, Button, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

// fondo
import image from '../../assets/images/background.png';

//icons
import { FontAwesome } from '@expo/vector-icons';

//data
import { razasGato } from '../../data/razas-gato';
import { razasPerro } from '../../data/razas-perro';
import { regiones } from '../../data/regiones';
import { comunas } from '../../data/comunas';

//state
import { useGlobalState } from '../../providers/hookstateProvider';

const FiltroManual4 = () => {
    
    const state = useGlobalState();
    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    let data = [];

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || state.getFecha();
        setShow(false);
        state.setFecha(new Date(currentDate));
    }

    if(state.getTipoMascota() == "Perro"){
        data = razasPerro;
    } else if(state.getTipoMascota() == "Gato"){
        data = razasGato;
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                <View style={[styles.top, {zIndex: 6}]}>
                    <Text style={[styles.title, {marginBottom:15}]}>Tendencia de raza</Text>
                </View>
                <View style={[styles.mid, {zIndex: 4}]}>
                    <Text style={[styles.title, {marginBottom:15}]}>Región en que se perdió</Text>
                </View>
                <View style={[styles.mid, {zIndex: 3}]}>
                    <Text style={[styles.title, {marginBottom:15}]}>Comuna en que se perdió</Text>
                </View>
                <View style={[styles.mid, {zIndex: 2}]}>
                    <Text style={[styles.title, {marginBottom:15}]}>Fecha de desaparición</Text>
                    <View style={{minWidth:"100%", alignItems:'center'}}>
                    <Button title='Seleccionar' onPress={() => setShow(true)} />
                    {
                        show &&
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={state.getFecha()}
                            mode={'date'}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                            boxStyles={{backgroundColor:"#000"}}
                            style={{flex:0, width:120, color: "#fff"}}
                        />
                    }
                    </View>
                </View>
                <Pressable style={[styles.button2, {backgroundColor:"#ff6600"}]} onPress={() => navigation.navigate('Filtro Automatizado')}>
                    <Text style={styles.text2}>Filtrar</Text>
                </Pressable>
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
        maxHeight: "68%",
    },
    top: {
        flex:1,
        paddingTop: '17%',
        paddingLeft: '9%',
        paddingRight: '9%',
    },
    title: {
        color: '#060606',
        fontSize: 21,
        fontWeight: "500",
    },
    mid: {
        flex:1,
        justifyContent: 'flex-start',
        paddingLeft: '9%',
        paddingRight: '9%',
    },
    selectInput: {
        width: '100%',
        paddingRight: '4%',
    },
    result: {
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    button: {
        width: '40%',
        minHeight: 40,
        color: '#fff',
        backgroundColor: '#FF6600',
        borderRadius: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button2: {
        marginTop: "8%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: "15%",
        marginHorizontal: "15%",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation:5
    },
    text2: {
        fontSize: 16,
        fontWeight: '500',
        fontSize: 18,
        color: 'white',
    },
    boxStyles: {
        backgroundColor: "#ffffff",
        borderRadius:9,
        borderColor: "#E4E4E4",
        color: '#111111',
        shadowColor: "##8C8C8C",
        shadowOffset: {
            width: 0,
            height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation:5,
    },
    dropdownStyles: {
        backgroundColor: "#ffffff",
        borderRadius:9,
        borderColor: "#D8D8D8",
    }
});

export default FiltroManual4;