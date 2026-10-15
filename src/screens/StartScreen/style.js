import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    
    containerStartScreen:{
        flex: 1,
        gap: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.colorDarklPurple,
    },
    textWelcome:{
        fontSize: 20,
        textAlign: "center",
        color: colors.colorGray,
        fontFamily: fonts.fontBody,
    },

})