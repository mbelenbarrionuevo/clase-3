import { Pressable, Text, View} from "react-native";
import { useState} from "react";


export default function Index() {
  const [contador, setContador] = useState(0);
  const incrementar = () => {
    setContador(prev => prev + 1);
  }
  const decrementar = () => {
    setContador(prev => prev - 1);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Contador: {contador} </Text>
      <Pressable onPress={incrementar} style= {{padding: 10, backgroundColor: 'purple', margin: 20}}>
        <Text> Incrementar </Text>
      </Pressable>
      <Pressable onPress={decrementar} style= {{padding: 10, backgroundColor: 'green', margin: 20}}>
        <Text> Decrementar </Text>
      </Pressable>

    </View>
  );
}
