import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerAvailibleSizes:{
        gap: 10,
    },
    textTitle: {
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite,
    },
    textHighlight:{
        fontSize: 25,
        fontWeight: 700,
        fontFamily: fonts.fontTitle,
        color: colors.colorHotDrink,
    },
    scrollView:{
        gap: 10,
    },
})