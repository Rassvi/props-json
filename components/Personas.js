import { View, Text, Image, StyleSheet } from "react-native";

const Empleado = (props) => {
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
                <Image style={[util["util--image"]]} source={props.persona.foto} />
            </View>

            <View style={[
                card["card--body"],
            ]}>
                <Text style={{ FontSize: 18 }}>
                    Se busca: {props.persona.nombre} {props.persona.apellido1}
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
        minWidth: '70%',
        maxWidth: '80%',

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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        borderRadius: 15,

        elevation: 5,
        zIndex: 2,
        height: '100%',
        width: '100%',
    },

    'card--image': {
        flex: 1,
        zIndex: 1,
    }
});

export { Empleado }