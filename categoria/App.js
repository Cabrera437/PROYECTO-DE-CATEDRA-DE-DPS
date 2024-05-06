import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//Lo hice directo en el app por que no se por que no me importaba el js donde lo tenia
export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "#FF9999", padding: 60, justifyContent: "center"}}>
      <Icon name="search" size={30} color="white"/>
      <Icon name="home" size={30} color="white"/>
      <Icon name="folder" size={30} color="white"/>

        <Button color="secondary"
        title='Arte'
        onPress={() => console.log("button pressed")}
        disabled
        >
    
        </Button>
    
        <Button
        title='animales'
        onPress={() => console.log("button pressed")}
        color="pink"
        disabled
        >
    
        </Button>
    
        <Button
        title='deporte'
        onPress={() => console.log("button pressed")}
        color="pink"
        disabled
        >
    
        </Button>
    
        <Button
        title='familia'
        onPress={() => console.log("button pressed")}
        color="pink"
        disabled
        >
    
        </Button>

    </View>
    

  );
}