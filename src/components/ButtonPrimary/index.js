import { Text, Pressable } from "react-native";
import { styles } from "./style";
import { useFonts } from "expo-font"
import { fonts } from "../../themes/fonts";
import { useNavigation } from "@react-navigation/native";

export const ButtonPrimary = ({ title }) => {

    useFonts({
        [fonts.fontBody]: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    const navigation = useNavigation();

    return(
        <Pressable style={styles.btnPrimary} onPress={() => navigation.navigate("home")}>

            <Text style={styles.btnTextPrimary}>{title}</Text>
        
        </Pressable>
    );
}