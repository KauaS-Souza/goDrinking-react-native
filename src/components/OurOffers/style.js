import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerOurOffers:{
        gap: 20,
    },
    textOurOffers: {
        fontSize: 25,
        fontWeight: "700",
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle,
    },
    textHighlight:{
        fontSize: 25,
        fontWeight: 700,
        color: colors.colorHotDrink,
        fontFamily: fonts.fontTitle,
    },
    scrollContent:{
        gap: 15,
    }
    
})