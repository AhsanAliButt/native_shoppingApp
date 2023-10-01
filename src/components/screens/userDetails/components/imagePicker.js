import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImagePicker from "react-native-image-crop-picker";
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import useSignIn from "../../splash/useAuth";

const UploadImage = ({ data, setData }) =>
  // {imagePathHandler}
  {
    const imagePathHandler = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      })
        .then((image) => {
          console.log(image);
          setData({ ...data, imagePath: image.path });
        })
        .catch((error) => {
          console.log(error);
        })
        .done();
    };

    const launchImageLibrary = () => {};
    // const {imagePathHandler, filePath} = useSignIn();
    // const dispatch = useDispatch();
    // const [filePath, setFilePath] = useState(null);
    // const choosePath = () => {
    //   ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   })
    //     .then(image => {
    //       console.log(image);
    //       setFilePath(image.path);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    //     .done();
    // };
    // console.log('filePath', filePath);
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#f2f2f2",
          paddingBottom: 5,
        }}
      >
        <Text style={[styles.text_footer, { marginTop: 20 }]}>
          {" "}
          Upload Your Profile Picture{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              marginTop: 15,
              margin: 5,
            }}
          >
            <TouchableOpacity onPress={() => launchCamera()}>
              <View
                style={{
                  margin: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "lightgray",
                  opacity: 0.5,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text_code}> Take Picture </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => launchImageLibrary()}>
              <View
                style={{
                  margin: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "lightgray",
                  opacity: 0.5,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text_code}> Upload From Gallery </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => imagePathHandler()}>
              <View
                style={{
                  margin: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "lightgray",
                  opacity: 0.5,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={styles.text_code}> Choose File </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 40,
              marginLeft: 10,
            }}
          >
            {data.imagePath ? (
              <Image
                source={{ uri: data.imagePath }}
                style={{ width: 75, height: 75, borderRadius: 30 }}
              />
            ) : (
              <Image
                source={require("../../../../../assets/Ahsan.jpg")}
                style={{ width: 75, height: 75, borderRadius: 30 }}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

export default UploadImage;
