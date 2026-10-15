import { Text, Pressable } from "react-native";
import { styles } from "./style";
import { useFonts } from "expo-font"
import { fonts } from "../../themes/fonts";

export const ButtonPrimary = ({ title }) => {

    useFonts({
        [fonts.fontBody]: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    return(
        <Pressable style={styles.btnPrimary}>

            <Text style={styles.btnTextPrimary}>{title}</Text>
        
        </Pressable>
    );
}