import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    cardSize:{
        borderWidth: 2,
        borderColor: colors.colorDeepMagenta,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 5,
        width: 75,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    productImage:{
        width: 18,
        height: 40,
    },
    textAmount: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle,
    },
    textMeasure:{
        fontSize: 14,
        fontWeight: 700,
        color: colors.colorHotDrink,
        fontFamily: fonts.fontTitle,
    },
})