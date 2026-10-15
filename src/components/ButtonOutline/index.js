import { Pressable, Text } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "./style";

export const ButtonOutline = ({title}) =>{


    return(
        <Pressable style={styles.btnOutline}>

            <Text style={styles.btnTextOutline}>{title}</Text>
            
        </Pressable>
    );
}