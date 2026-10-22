import { View, Text, Image, ScrollView } from "react-native";
import { fonts } from "../../themes/fonts";
import logo from '../../assets/images/logo.png'
import { OurOffers } from "../../components/OurOffers";
import { styles } from "./style";
import { useFonts } from "expo-font";
import { AvailableSizes } from "../../components/AvailableSizes";
import { CardProduct } from "../../components/CardProduct";
import { OurHighlights } from "../../components/OurHighlights";

export const HomeScreen = () => {

    useFonts({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    });

    return(
        <ScrollView contentContainerStyle={styles.containerHomeScreen}>

            <Image source={logo} style={styles.logoHome}/>

            <OurOffers />

            <AvailableSizes />

            <OurHighlights />

        </ScrollView>
    );

}