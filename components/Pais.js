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
                <Image
                    blurRadius={2.5}
                    style={
                        [util["util--image"]]} source={
                            props.data.flags.png
                        }
                />
            </View>

            <View style={[
                card["card--body"],
                util["util--pos-abs"],

            ]}>
                <Text style={card["card--title"]}>{props.data.name.official}</Text>
                <Text style={card["card--text"]}>Alias: {props.data.name.common}</Text>
                <Text style={card["card--text"]}>Capital: {props.data.capital}</Text>
                <Text style={card["card--text"]}>Población: {props.data.population}</Text>
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
        minWidth: '90%',
        maxWidth: '99%',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255, 0.1)',

        height: 450,
        marginTop: 15,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    'card--row': {

        flexDirection: 'row',
    },

    'card--body': {
        justifyContent: 'space-around',
        flex: 2,
        textAlign: 'center',
        borderRadius: 15,
        padding: 15,
        backgroundColor: 'rgba(69, 72, 57, 0.7)',
        zIndex: 2,
        height: '100%',
        width: '100%',
    },

    'card--image': {
        flex: 1,
        zIndex: 1,
    },

    'card--title': {
        color: 'white',
        fontSize: 25,
    },

    'card--text': {
        color: 'white',
        fontSize: 18,
    }
});

export { Pais }