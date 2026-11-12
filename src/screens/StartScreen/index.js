import { Image, View, Text, Pressable } from "react-native";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonOutline } from "../../components/ButtonOutline";
import logo from '../../assets/images/logo.png'
import { styles } from "./style";
import { useFonts } from "expo-font";
import { fonts } from "../../themes/fonts";
import { useNavigation } from "@react-navigation/native";

export const StartScreen = () => {

    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    const navigation = useNavigation()

    return(
        
        <View style={styles.containerStartScreen}>

            <Image source={logo}/>

            <Text style={styles.textWelcome}>Seu app para comprar energéticos de forma rápida, prática e segura. Encontre suas marcas favoritas e receba onde estiver.</Text>

            <ButtonPrimary title="Entrar"/>

            <ButtonOutline title="Cadastrar"/>

        </View>

    );
}