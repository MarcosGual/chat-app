import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import colors from "../colors";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
const catImageUrl = require('../assets/cat-icon.png');

const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
            ),
            headerRight: () => {
                <Image
                    source={{ url: catImageUrl }}
                    style={{ width: 40, height: 40, marginRight: 15 }}
                />
            }
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Chat')}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'orange',
        alignSelf: 'center',
        paddingBottom: 24
    },
    input: {
        backgroundColor: '#F6F7FB',
        color: 'grey',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60
    }
})