import { Text, View } from "react-native";
import { CardProduct } from "../CardProduct";
import imageCan from "../../assets/images/can.png";
import imageBottle from "../../assets/images/bottle.png"
import { styles } from "./style";

export const OurHighlights = () => {
    return(
        <View style={styles.container}>

            <Text style={styles.textOurHighlights}>Nossos <Text style={styles.textHighlights}>Destaques</Text></Text>

            <View style={styles.containerProducts}>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
            <View style={styles.containerProducts}>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
            <View style={styles.containerProducts}>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageCan} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
            <View style={styles.containerProducts}>
                <CardProduct image={imageBottle} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageBottle} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>    
            <View style={styles.containerProducts}>
                <CardProduct image={imageBottle} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageBottle} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>    
        </View>
    );
}