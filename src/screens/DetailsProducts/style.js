import { StyleSheet } from "react-native"
import { colors } from "../../themes/colors"
import { fonts } from "../../themes/fonts"

export const styles = StyleSheet.create({
    containerDetailsProducts:{
        flex: 1,
        backgroundColor: "#000000",
    },
    featuredProducts:{
        backgroundColor: colors.colorDarklPurple,
        flexDirection: "row",  
        gap: 45,
        paddingRight: 25,
        paddingVertical: 25, 
        justifyContent: "flex-end",
        alignItems: "center",     
    },
    imagesProduct:{
        gap: 20,
    },
    detailsProducts:{
        backgroundColor: "#000000",
        borderWidth: 1,
        borderTopColor: colors.colorHotDrink,
        paddingTop: 25,
        paddingLeft: 25,
        gap: 20,
    },
    volumeProduct:{
        position: "absolute",
        top: -15,
        right: 25,
        backgroundColor: colors.colorHotDrink,
        color: colors.colorWhite,
        paddingVertical: 4,
        paddingHorizontal: 25,
        borderRadius: 4,
    },
    textTile:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorWhite,
        lineHeight: 45,
        fontFamily: fonts.fontTitle
    },
    textHighlight:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorHotDrink,
        lineHeight: 45,
        fontFamily: fonts.fontTitle
    },
    textDescription:{
        width: 380,
        fontSize: 18,
        color: colors.colorGray,
    },
})