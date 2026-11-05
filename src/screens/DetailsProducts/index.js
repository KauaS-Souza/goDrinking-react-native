import { Image, View } from "react-native";
import imgProduct from "../../assets/images/can.png";
import OptionImage from "../../assets/images/OptionImage.png";

export const DetailsProducts = () =>{
    return(
        <View>

            <View>
                <Image source={imgProduct}/>
                <View>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                    <Image source={OptionImage}/>
                </View>
            </View>

            <View>

            </View>

        </View>
    );
}