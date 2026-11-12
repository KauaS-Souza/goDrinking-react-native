import { Image, View, Text, Pressable } from "react-native";
import imgProduct from "../../assets/images/can.png";
import OptionImage from "../../assets/images/OptionImage.png";
import { styles } from "./style";
import { ButtonPrimary } from "../../components/ButtonPrimary";

export const DetailsProducts = () =>{
    return(
        <View style={styles.containerDetailsProducts}>

            <View style={styles.featuredProducts}>
                <Image source={imgProduct}/>
                <View style={styles.imagesProduct}>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                </View>
            </View>

            <View style={styles.detailsProducts}>
                
                <Text style={styles.volumeProduct}>269ml</Text>
                
                <View>
                    
                    <View>
                        <Text style={styles.textTile}>TNT Energy</Text>
                        <Text style={styles.textHighlight}>Açaí com Guaraná</Text>
                    </View>

                    <Text style={styles.textDescription}>Combina o sabor marcante do açaí com o toque do guaraná em uma bebida energética refrescante. Ideal para quem bus...</Text>
                
                </View>
            
                <ButtonPrimary title="Comprar" />

            </View>

        </View>
    );
}