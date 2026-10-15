import { ScrollView, Text, View } from "react-native"
import { CardSize } from "../CardSize";
import can from "../../assets/images/can.png"
import bottle from "../../assets/images/bottle.png"
import { styles } from "./style";

export const AvailableSizes = () =>{
    
    return(
        <View style={styles.containerAvalibleSizes}>

            <Text style={styles.textTitle}>Tamanhos <Text style={styles.textHighlight}>Disponíveis</Text></Text>
            
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize image={can} amount={"269"} measure={"ml"}/>
                <CardSize image={can} amount={"350"} measure={"ml"}/>
                <CardSize image={can} amount={"429"} measure={"ml"}/>
                <CardSize image={can} amount={"609"} measure={"ml"}/>
                <CardSize image={bottle} amount={"1.5"} measure={"L"}/>
                <CardSize image={bottle} amount={"2"} measure={"L"}/>
            </ScrollView>

        </View>
    );
    
}