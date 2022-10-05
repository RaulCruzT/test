// import { useState } from 'react';
// import { SafeAreaView, StatusBar, ImageBackground, StyleSheet, Text, Button } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// // imagenes & logo
// import image from '../../assets/images/background.png';

// const FiltroAutomatizado1 = () => {
//     const [picture, setPicture] = useState(null);

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });
        
//         console.log(result);
        
//         if (!result.cancelled) {
//             setImage(result.uri);
//         }
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <StatusBar
//                 barStyle="light-content"
//             />
//             <ImageBackground source={image} resizeMode="stretch" imageStyle={styles.image} style={{flex:1, alignItems: "center", justifyContent: "center"}}>
//                 <Text>FiltroAutomatizado1</Text>
//                 <Button title="Selecciona una imagen" onPress={pickImage} />
//                 {picture && <Image source={{ uri: picture }} style={{ width: 200, height: 200 }} />}
//             </ImageBackground>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     image: {
//         flex: 1,
//         width: "100%",
//         maxHeight: "68%" 
//     },
// });

// export default FiltroAutomatizado1;

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FiltroAutomatizado1() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
