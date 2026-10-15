import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerCard:{
        borderColor: colors.colorDeepMagenta,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        gap: 5,
        width: 80,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    imageCard:{
        height: 40,
        width: 18,
    },
    textOurOffers: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle,
    },
    textHighlight:{
        fontSize: 14,
        fontWeight: 700,
        color: colors.colorHotDrink,
        fontFamily: fonts.fontTitle,
    },
})