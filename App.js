import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView } from 'react-native';
import data from './json/data.json';
import { Empleado } from './components/Personas';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            {
                data.map(
                    (values)=> (
                        <Empleado data={ values }/>
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
        backgroundColor: '#ffa',
    },
});
