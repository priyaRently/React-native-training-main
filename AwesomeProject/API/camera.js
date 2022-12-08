// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// const App = () => {
//   const [barcode, setBarcode] = useState(null);

//   return (
//     <View style={styles.screen}>
//       <SafeAreaView style={styles.saveArea}>
//         <View style={styles.topBar}>
//           <Text style={styles.topBarTitleText}>React Native Scanner</Text>
//         </View>
//       </SafeAreaView>
      
//         <RNCamera style={styles.rnCamera} />

//       <View style={styles.caption}>
//         <Text style={styles.captionTitleText}>Welcome To React-Native-Camera Tutorial</Text>
//       </View>



//       <View style={styles.cameraControl}>
//         <TouchableOpacity style={styles.btn}>
//           <Text style={styles.btnText}>New QR Scan</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   topBar: {
//     height: 50,
//     backgroundColor: '#62d1bc', // green
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topBarTitleText: {
//     color: '#ffffff', // white
//     fontSize: 20,
//   },
//   caption: {
//     height: 120,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   captionTitleText: {
//     color: '#121B0D', // black
//     fontSize: 16,
//     fontWeight: '600'
//   },
//   rnCamera: {
//     flex: 1,
//     width: '94%',
//     alignSelf: 'center',
//   }
// });
// export default App;

import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('App', () => ExampleApp);