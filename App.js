import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Empleado } from './components/Personas';
import data from './json/paises.json';
import persona from './json/data.json'
import { Pais } from './components/Pais';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            {
                data.map(
                    (values)=> (
                        <Pais data={values} />
                    )
                )
            }

            {
                persona.map(
                    (values)=> (
                        <Empleado persona={ values }/>
                    )
                )
            }
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
