import { Image, Text, View } from "react-native"
import { styles } from "./style";

export const CardSize = ({image, amount, measure}) => {
    return(
        <View style={styles.containerCard}>
        
            <Image source={image} style={styles.imageCard}/>

            <Text style={styles.textOurOffers}>{amount}<Text style={styles.textHighlight}>{measure}</Text></Text>
    
        </View>
    );
    
}