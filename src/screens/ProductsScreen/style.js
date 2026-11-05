import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerProductsScreen:{
        backgroundColor: colors.colorDarklPurple,
        gap: 40,
        paddingLeft: 20,
    },
    containerInput:{
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    },
    imgLogo:{
        width: 140,
        height: 55,
    },
    input:{
        width: 310,
        height: 40,
        backgroundColor: "rgba(222, 30, 236, 0.21)",
        borderRadius:5,
        borderWidth: 1,
        borderColor: colors.colorHotDrink,
        color: colors.colorWhite,
    },
    ourProducts:{
        gap: 20,
    },
    textOurProducts:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorWhite,
    },
    textHighlightOurProducts:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorHotDrink,
    },
    containerProducts:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    }
})