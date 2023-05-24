import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Empleado = (props) => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.header}>
                <Text style={styles.nombre}>{props.datos.nombre}</Text>
            </View>
            <View style={styles.main}>
                <Image style={styles.imagen} source={props.datos.foto} />
                <View style={styles.contenedorDatos} >
                    <Text style={[{ backgroundColor: "grey" }, { flex: 1 }]}>Correo: {props.datos.email}</Text>
                    <Text style={[{ backgroundColor: "pink" }, { flex: 1 }]}>{props.datos.celular}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 10,
    },
    header: {
        alignItems: "center",
        backgroundColor: "black",
    },
    nombre: {
        flex: 1,
        backgroundColor: "black",
        color: "white",
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    main: {
        backgroundColor: "yellow",
        padding: 10,
        flexDirection: 'row',
    },
    contenedorDatos: {
        flex: 1,
        //height:"50%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    imagen: {
        width: 75,
        height: 75
    }

});

export default Empleado;