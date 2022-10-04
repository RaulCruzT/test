import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, StyleSheet, Text, StatusBar, ImageBackground, View, Image, FlatList, TouchableOpacity, Modal, Alert, Pressable, Button, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// imagenes & logo
import image from '../../assets/images/background.png';
import logoSamFind from '../../assets/images/logoSamFind.png';

// icons
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//state
import { useGlobalState } from '../../providers/hookstateProvider';

// BORRAR DPS
import dataFB from '../../publicaciones/facebookPublications.json';
import prueba from '../../publicaciones/prueba.json';

let listImage = [];

// LIST IMAGE IN CARDS
function loopImage(list, type){
    listImage = [];
    let count = 1;
    if (list != undefined){
        list.forEach(function(element, index){
            if (type == "card"){
                if (count <= 3){
                    (listImage).push(
                    <Image
                        style={{width: 70, height: 70, marginHorizontal: "3%"}}
                        source={{uri: element,}}
                        key={index}
                    />);
                }
            }else{
                if(list.length == 1){
                    (listImage).push(
                    <Image
                        style={{width: 200, height: 200, marginHorizontal: "3%"}}
                        source={{uri: element,}}
                        key={index}
                    />);
                } else if (list.length == 2){
                    (listImage).push(
                    <Image
                        style={{width: 150, height: 150, marginHorizontal: "3%"}}
                        source={{uri: element,}}
                        key={index}
                    />);
                } else if (count <= 3){
                    (listImage).push(
                    <Image
                        style={{width: 100, height: 100, marginHorizontal: "3%"}}
                        source={{uri: element,}}
                        key={index}
                    />);
                }
            }
            count +=1
        })
    }
    return listImage; 
}

// FUNCTION TO RENDER CARD FACEBOOK AND INSTAGRAM
function cardFacebookInstagram(card){

    return(
        // {/* CARD 1: */}
        <View style={[styles.card, styles.shadow, {flexDirection: "column"}]}>
            {/* R1: TIPO RRSS + NOMBRE USUARIA */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", marginVertical: "1.5%"}}>
                {
                    (card.docType == "fb") 
                        ? <FontAwesome5 style={{flex: 1}} name="facebook" size={25} color="#36A0AD" />
                        : <AntDesign style={{flex: 1}} name="instagram" size={25} color="#36A0AD" />
                }
                
                <Text style={[styles.cardTitle, {flex: 7}]}>
                    {card.user}
                </Text>
            </View>

            {/* R2 */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", marginVertical: "1.5%"}}>
                <FontAwesome5 style={{flex: 1}} name="users" size={15} color="#36A0AD" />
                <Text style={{flex: 7, color: "#666666"}}>{card.nameGroup}</Text>
            </View>

            {/* R3 */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", marginVertical: "1.5%"}}>
                <MaterialIcons style={{flex: 1}} name="comment" size={15} color="#36A0AD" />
                <Text numberOfLines={2} style={{flex: 7, color: "#666666"}}>{card.message}</Text>
            </View>

            {/* R4 */}
            <View style={{flexDirection: "row", flex: 1, marginVertical: "1.5%"}}>
                <Ionicons style={{flex: 1}} name="calendar-outline" size={15} color="#36A0AD" />
                <Text style={{flex: 7, color: "#666666"}}>{card.datePost}</Text>
            </View>

            {/* R5 */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", justifyContent: "center", marginVertical: "1.5%"}}>
                {loopImage(card.image, "card")}
            </View>
        </View>
    );
}

// FUNCTION TO RENDER CARD SAMFIND
function cardSamFind(card){

    return(
        // {/* CARD 1: */}
        <View style={[styles.card, styles.shadow, {flexDirection: "column"}]}>
            {/* R1: TIPO RRSS + NOMBRE USUARIA */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", marginVertical: "1.5%"}}>
                <Image source={logoSamFind}  resizeMode="contain" imageStyle={styles.imagelogoSF} style={{flex: 1, maxHeight: 28, start:0, flexDirection: "row"}}/>
                <Text style={[styles.cardTitle, {flex: 7}]}>
                    {card.user}
                </Text>
            </View>

            {/* R3 */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", marginVertical: "1.5%"}}>
                <MaterialIcons style={{flex: 1}} name="comment" size={15} color="#ff6600" />
                <Text numberOfLines={2} style={{flex: 7, color: "#666666"}}>{card.message}</Text>
            </View>

            {/* R4 */}
            <View style={{flexDirection: "row", flex: 1, marginVertical: "1.5%"}}>
                <Ionicons style={{flex: 1}} name="calendar-outline" size={15} color="#ff6600" />
                <Text style={{flex: 7, color: "#666666"}}>{card.datePost}</Text>
            </View>

            {/* R5 */}
            <View style={{flexDirection: "row", flex: 1, alignContent: "center", justifyContent: "center", marginVertical: "1.5%"}}>
                {loopImage(card.image, "card")}
            </View>
        </View>
    );
}

// FUNCTION TO FILTROMANUALRESULTADO1
const FiltroManualResultado1 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);
    const [dataPost, setDataPost] = useState(null);

    const state = useGlobalState();
    const navigation = useNavigation();

    let dataJSON = {
        tipoBusqueda: state.getTipoBusqueda(),
        tipoMascota: state.getTipoMascota(),
        sexo: state.getSexo(),
        tamano: state.getTamano(),
        edadAparente: state.getEdadAparente(),
        comuna: state.getComuna(),
        fecha: state.getFecha(),
    }

    if (state.getRaza() != '0') {
        dataJSON.raza = state.getRaza()
    } else{
        dataJSON.raza = null
    }
    if (state.getEdadAparente()) {
        dataJSON.edadAparente = state.getEdadAparente()
    } else{
        dataJSON.edadAparente = null
    }
    if (state.getTamano()) {
        dataJSON.tamano = state.getTamano()
    } else{
        dataJSON.tamano = null
    }

    const getData=()=>{

        fetch('http://192.168.0.13:8000/api/samfind/posts', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(dataJSON), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(res2 => setDataPost(res2.data))
        .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        getData();
        //console.log(dataJSON)
    }, [])
    

    const setVisible = (item2) => {
        setModalVisible(true)
        setItemVisible(item2)
    }

    const flatListCardOpen = (list) => {
        return (
            <FlatList 
                horizontal
                data={list}
                renderItem={({ item }) => (
                    <Image 
                    style={{width: 200, height: 200, marginHorizontal: "3%"}}
                    source={{uri: item,}}
                    />
                )}
            />
        );
    }

    // FUNCTION TO RENDER ITEM OF FASTLIST: CARDS
    const renderItem = ({ item }) => {
        const Item = ({ item, onPress}) => (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={onPress}>
                    {
                        (item.docType == "fb" || item.docType == "ig") 
                        ? cardFacebookInstagram(item) // CARD DE FACEBOOK O INSTAGRAM
                        : cardSamFind(item) // CARD DE SAMFIND
                    }

                    <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={[styles.modalView, {flexDirection: "column"}]}>
                                {/* LOGO APP + NOMBRE USUARIO + X */}
                                <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "1.5%"}}>
                                    {/* LOGO */}
                                        {   
                                            (itemVisible.docType == "fb" || itemVisible.docType == "ig") 
                                            ? 
                                                (itemVisible.docType == "fb") 
                                                ? <FontAwesome5 style={{flex: 1}} name="facebook" size={25} color="#36A0AD" />
                                                : <AntDesign style={{flex: 1}} name="instagram" size={25} color="#36A0AD" />
                                            :   <Image source={logoSamFind}  resizeMode="contain" imageStyle={styles.imagelogoSF} style={{flex: 1, maxHeight: 28, start:0, flexDirection: "row"}}/>
                                        }
                                    {/* NOMBRE USUARIO */}
                                        <Text style={[styles.cardOpenTitle, {flex: 7}]}>
                                            {itemVisible.user}
                                        </Text>
                                    {/* BOTÓN X PARA SALIR */}
                                        <Pressable
                                        style={[styles.button, {flex: 1}]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            <Feather name="x" size={24} color="black" />
                                        </Pressable>
                                </View>
                                
                                {/* FB+INSTA: GRUPO O PÁGINA */}
                                {(itemVisible.docType == "fb" || itemVisible.docType == "ig") &&
                                    <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "3%"}}>
                                        <FontAwesome5 style={{flex: 1}} name="users" size={20} color="#36A0AD" />
                                        <Text style={{flex: 7, color: "#666666", fontSize: 16}}>{itemVisible.nameGroup}</Text>
                                    </View>
                                }

                                {/* DESCRIPCIÓN */}
                                <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "3%"}}>
                                    {
                                        (itemVisible.docType == "fb" || itemVisible.docType == "ig") 
                                        ? <MaterialIcons style={{flex: 1}} name="comment" size={20} color="#36A0AD" /> // CARD DE FACEBOOK O INSTAGRAM
                                        : <MaterialIcons style={{flex: 1}} name="comment" size={20} color="#ff6600" /> // CARD DE SAMFIND
                                    }
                                    <Text numberOfLines={5} style={{flex: 7, color: "#666666", fontSize: 16}}>{itemVisible.message}</Text>
                                </View>

                                {/* UBICACION */}
                                <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "3%"}}>
                                    {
                                        (itemVisible.docType == "fb" || itemVisible.docType == "ig")
                                        ? <FontAwesome style={{flex: 1}} name="map-marker" size={23} color="#36A0AD" /> // CARD DE FACEBOOK O INSTAGRAM
                                        : <FontAwesome style={{flex: 1}} name="map-marker" size={23} color="#ff6600" /> // CARD DE SAMFIND
                                    }
                                    <Text numberOfLines={5} style={{flex: 7, color: "#666666", fontSize: 16}}>{itemVisible.location}</Text>
                                </View>

                                {/* DÍA */}
                                <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "3%"}}>
                                    {
                                        (itemVisible.docType == "fb" || itemVisible.docType == "ig")
                                        ? <Ionicons style={{flex: 1}} name="calendar-outline" size={20} color="#36A0AD" /> // CARD DE FACEBOOK O INSTAGRAM
                                        : <Ionicons style={{flex: 1}} name="calendar-outline" size={20} color="#ff6600" /> // CARD DE SAMFIND
                                    }
                                    <Text style={{flex: 7, color: "#666666", fontSize: 16}}>{itemVisible.datePost}</Text> 
                                </View>

                                {/* SF: TELÉFONO */}
                                {(itemVisible.docType == "int") &&
                                    <View style={{flexDirection: "row", justifyContent:"space-between", alignContent: "center", marginVertical: "3%"}}>
                                        <MaterialCommunityIcons style={{flex: 1}} name="cellphone" size={24} color="#ff6600" />
                                        <Text style={{flex: 7, color: "#666666", fontSize: 16}}>{itemVisible.phone}</Text>
                                    </View>
                                }

                                {/* LOOP IMAGE */}
                                <View style={{flexDirection: "row", alignContent: "center", justifyContent: "center", marginVertical: "1.5%"}}>
                                    {loopImage(itemVisible.image, "cardOpen")}
                                    {/* {flatListCardOpen(itemVisible.images)} */}
                                </View>

                                {/* BOTONES */}
                                <View style={{flexDirection: "row", alignContent: "", justifyContent: "center", paddingVertical: "10%"}}>
                                    {
                                        (itemVisible.docType == "fb" || itemVisible.docType == "ig")
                                        ? 
                                            <Pressable style={[styles.button2, {backgroundColor:"#36A0AD"}]} onPress={()=>{ Linking.openURL(itemVisible.linkPost) }}>
                                                <Text style={styles.text2}>Ver publicación original</Text>
                                            </Pressable> // CARD DE FACEBOOK O INSTAGRAM
                                        :
                                            <Pressable style={[styles.button2, {backgroundColor:"#229032"}]} onPress={() => Linking.openURL('https://wa.me/'+itemVisible.phone+'?text=Hola! creo que has encontrado a mi mascota') }>
                                                <Text style={styles.text2}>Contactar por WhatsApp</Text>
                                            </Pressable> // CARD DE SAMFIND
                                    }
                                </View>
                            </View>
                        </View>
                    </Modal>
                </TouchableOpacity>
            </View>
        );
        // RETURN DE CADA CARDu
        return (
            <Item
                item={item}
                onPress={() => setVisible(item)}
            />
        );
    };

    // RETURN DE LA VISTA DE RESULTADO FILTRO MANUAL
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
            />
            <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1}}>
                {
                    (!dataPost) 
                    ?   
                        <ActivityIndicator size="large" color="#ff6600"/> 
                    :
                        <View style={styles.container3}>
                                <Text style={styles.textCantPublicaciones}> {dataPost.length} resultados </Text>
                                <FlatList
                                    data={dataPost}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.idPost}
                                />
                        </View>
                }
            </ImageBackground>
        </SafeAreaView>
    );
}

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        flex: 1,
        width: "100%",
        maxHeight: "68%" 
    },
    container3: {
        paddingVertical: "3%",
        flex: 1,
        width: "100%"
    },
    card: {
        marginHorizontal: "5%",
        marginVertical: 8,
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: "5%",
    },
    shadow: {
        shadowColor: '#8C8C8C',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    cardTitle: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 16,
        textAlignVertical: "center"
    },
    textCantPublicaciones: {
        marginHorizontal: "5%",
        paddingBottom: "2%",
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 18,
        color: '#ffffff'
    },
    
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "18%"
    },
    modalView: {
        borderRadius: 10,
        backgroundColor: "#ffffff",
        width: "92%",
        height: "90%",
        // alignItems: "flex-start",
        // Contenido:
        padding: "8%",
        shadowColor: "#8C8C8C",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5
    },
    button: {
        // padding: 10,
        elevation: 2
    },
    cardOpenTitle: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 25,
        // textAlignVertical: "center"
    },
    button2: {
        marginTop: "5%",
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    text2: {
        fontSize: 16,
        // lineHeight: 21,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default FiltroManualResultado1;