import { StatusBar } from "expo-status-bar";
import { Button, Image, ImageBackground, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";

const background = require("./assets/background.jpg");

export default function App() {
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [onFocus, setOnFocus] = useState(styles.input);
  const [onFocus2, setOnFocus2] = useState(styles.input);

  function login() {
    console.log(text);
    console.log(text2);
  }

  useEffect(() => {
    Image.getSize("https://picsum.photos/100", (w, h) => {
      console.log(w, h);
      setImageSize({
        width: w,
        height: h,
      });
    });
  }, []);

  return (
    <ImageBackground style={styles.container} source={background}>
      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={{
              uri: "https://picsum.photos/100",
            }}
            style={{
              height: imageSize.height,
              width: imageSize.width,
            }}
          />
          <Text style={styles.text}>Gennaro Corporation ltd.</Text>
        </View>
        <TextInput
          value={text}
          onChangeText={(textChanged) => setText(textChanged)}
          style={onFocus}
          onFocus={() => setOnFocus(styles.onFocusInput)}
          onBlur={() => setOnFocus(styles.input)}
          placeholder="Nome"
        />
        <TextInput
          value={text2}
          onChangeText={(textChanged) => setText2(textChanged)}
          style={onFocus2}
          onFocus={() => setOnFocus2(styles.onFocusInput)}
          onBlur={() => setOnFocus2(styles.input)}
          placeholder="Cognome"
        />
        <Button title="Login" onPress={login} />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
