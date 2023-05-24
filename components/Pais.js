import { View, Text, Image, StyleSheet } from "react-native";

const Pais = (props) => {
    return (
        <View style={[
            card["card"],
            card["card--row"],
            util["util--pos-rel"],
            util["util--self-center"],
        ]}>
            <View style={[
                card["card--image"]
            ]}>
                <Image style={[util["util--image"]]} source={props.data.flags.png} />
            </View>

            <View style={[
                card["card--body"],
                util["util--pos-abs"]
            ]}>
                <Text style={{FontSize: 18}}>
                </Text>
            </View>
        </View>
    );
}


const util = StyleSheet.create({
    'util--image': {
        flex: 1,
        borderRadius: 15,
        height: undefined,
        width: '100%',
        maxWidth: '100%',
        aspectRatio: 1,
        resizeMode: 'contain'
    },

    'util--pos-rel': {
        position: 'relative',
    },

    'util--pos-abs': {
        position: 'absolute',
    },

    'util--self-center': {
        alignSelf: 'center'
    }
});

const card = StyleSheet.create({
    'card': {
        minWidth: '30%',
        maxWidth: '40%',

        minHeight: 100,
        marginTop: 15,
        marginBottom: 15,
    },

    'card--row': {
        flexDirection: 'row',
    },

    'card--body': {
        flex: 2,
        backgroundColor: '#fff',
        zIndex: 2,
        height: '15%',
        width: '100%',
        top: '85%',
    },

    'card--image': {
        flex: 1,
        zIndex: 1,
    }
});

export { Pais }