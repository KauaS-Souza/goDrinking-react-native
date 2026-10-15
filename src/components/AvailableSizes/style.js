import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerAvalibleSizes:{
        gap: 20,
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
        gap: 15,
    },
})