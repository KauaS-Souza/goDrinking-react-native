import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create ({

    btnOutline:{
        borderWidth: 2,
        paddingVertical: 10,
        width: 350,
        borderRadius: 7,
        borderColor: colors.colorCyan,
    },

    btnTextOutline:{
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center",
        color: colors.colorCyan,
    }

})