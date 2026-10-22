import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./style";


export const CardProduct = ({image, title, description}) => {
    return(

        <View style={styles.cardContainer}>

            <Image source={image} style={styles.imgProduct}/>
            
            <View>
                <Text style={styles.titleProduct}>{title}</Text>
                <Text style={styles.descriptionProduct}>{description}</Text>
            </View>
            
            <Pressable style={styles.btnLearnMore}>
                <Text style={styles.btnText}>Saiba Mais</Text>
            </Pressable>
        
        </View>

    );
}