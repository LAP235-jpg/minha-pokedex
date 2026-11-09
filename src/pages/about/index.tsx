import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function AboutScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Sobre a Pokedex</Text>
            <Text>Feito por: Murilo Davi - Turma DS</Text>
        </View>
    );
}