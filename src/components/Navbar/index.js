import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {

    const navigation = useNavigation();

    return(
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Money')}>
                <MaterialIcons name="attach-money" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Calculator')}>
                <AntDesign name="calculator" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home-outline" size={32} color="#fff" /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Temperature')}>
                <FontAwesome5 name="temperature-low" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Lightning')}>
                <MaterialCommunityIcons name="lightning-bolt" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#242A37',
        paddingHorizontal: 32,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    }
});
