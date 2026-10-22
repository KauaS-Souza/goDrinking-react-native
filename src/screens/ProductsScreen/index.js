import { ScrollView, Image, View, TextInput } from "react-native";
import logo from "../../assets/images/logo.png";
import filterIcon from "../../assets/images/filterIcon.png";
import { styles } from "./style";

export const ProductsScreen = () => {
    return(

        <ScrollView style={styles.containerProductsScreen}>

            <Image source={logo} style={styles.imgLogo}/>

            <View>
                <TextInput style={styles.input}/>
                <Image source={filterIcon} />
            </View>

        </ScrollView>
    );
}