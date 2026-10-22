import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    cardContainer:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: colors.colorDeepMagenta,
        borderRadius: 13,
        backgroundColor: "#270053",
        gap: 10,
        width: 180,
        alignItems: "center",
    },
    imgProduct:{
        width: 50,
        height: 110,
    },
    titleProduct:{
        fontSize: 24,
        fontWeight: "400",
        fontFamily: fonts.fontTitle,
        color: colors.colorGray,
        alignSelf: "flex-start",
    },
    descriptionProduct:{
        fontSize: 15,
        fontWeight: "400",
        fontFamily: fonts.fontBody,
        color: colors.colorGray,
        textAlign: "left",
    },
    btnLearnMore:{
        width: 155,
        paddingHorizontal: 5,
        paddingVertical: 15,
        backgroundColor: colors.colorHotDrink,
        borderRadius: 5,
    },
    btnText:{
        fontFamily: fonts.fontBody,
        fontSize: 15,
        fontWeight: 400,
        color: colors.colorWhite,
        textAlign: "center",
    }
})