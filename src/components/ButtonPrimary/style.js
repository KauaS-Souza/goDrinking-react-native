import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({

    btnPrimary:{
        paddingVertical: 10,
        borderRadius: 7,
        width: 350,
        backgroundColor: colors.colorHotDrink,
    },

    btnTextPrimary:{
        fontFamily: fonts.fontBody,
        fontSize: 30,
        textAlign: "center",
        fontWeight: 700,
        color: colors.colorWhite,
    }
});