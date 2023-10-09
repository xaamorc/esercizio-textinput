import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "95%",
    backgroundColor: "white",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius : 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 40,
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginBottom : 10,
    marginTop : 10,
  },
  onFocusInput: {
    borderColor: "red",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    backgroundColor: "lightgreen",
    marginBottom : 10,
    marginTop : 10,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 40,
    marginTop: 10,
    textAlign: "center",
    borderColor : "black",
    borderWidth : 1,
  },
  buttonPressed : {
    backgroundColor : "lightgreen",
    padding : 10,
    borderRadius : 40,
    marginTop : 10,
    textAlign : "center",
    borderColor : "black",
    borderWidth : 1,
  },
  loginText : {
    textAlign : "center",
    fontWeight : "bold",
    fontSize : 20,
  }
});
