import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
// import { Empleado } from './components/Personas';
import data from './json/paises.json';
import { Pais } from './components/Pais';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            {
                data.map(
                    (values)=> (
                        // <Empleado data={ values }/>
                        <Pais data={values} />
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
