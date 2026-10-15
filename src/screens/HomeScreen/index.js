import { View, Text, Image } from "react-native";
import { fonts } from "../../themes/fonts";
import logo from '../../assets/images/logo.png'
import { OurOffers } from "../../components/OurOffers";
import { styles } from "./style";
import { useFonts } from "expo-font";
import { AvailableSizes } from "../../components/AvailableSizes";

export const HomeScreen = () => {

    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    return(
        <View style={styles.containerHomeScreen}>

            <Image source={logo} style={styles.logoHome}/>

            <OurOffers />

            <AvailableSizes />

        </View>
    );

}