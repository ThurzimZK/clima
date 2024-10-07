import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { style } from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Nuvem from '../../assets/nuvem.png';


type RootStackParamList = {
    Home: undefined;
    Diversos: undefined;
    Pesquisar: undefined;
};

type PesquisarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Pesquisar'>;

type Props = {
    navigation: PesquisarScreenNavigationProp;
};

const API_KEY = '2e51e88bf29e4490b5d232134242709'


export default function Pesquisar({ navigation }: Props) {

    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState('X'); 
    const [condition, setCondition] = useState('Estado do Tempo'); 

    const traducaoTempo: { [key: string]: string } = {
        Clear: 'Limpo',
        Overcast: 'Nublado',
        Rain: 'Chuva',
        Sunny: 'Ensolarado',
        Cloudy: 'Nublado',
        Snow: 'Neve',
        Fog: 'Nevoeiro',
        "Partly cloudy": 'Parcialmente nublado'
    };

    const fetchWeather = async () => {
        if (!city) return;

        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
            const data = await response.json();


            setTemperature(data.current.temp_c);
            setCondition(traducaoTempo[data.current.condition.text] || data.current.condition.text);
        } catch (error) {
            console.error("Erro ao buscar dados do clima:", error);
            setCondition('Erro ao buscar dados');
        }
    };
    return (
        <View style={style.containerPesquisar}>
            <View style={style.procurar}>
                <TouchableOpacity onPress={() => navigation.navigate("Diversos")}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={style.input}
                    placeholder="Digite aqui"
                    value={city}
                    onChangeText={setCity}
                />
                <TouchableOpacity onPress={fetchWeather}>
                    <Ionicons name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={style.cartaoTempo}>
                <Image
                        source={Nuvem}
                        style={style.imagem}
                    />
                <Text style={style.nomeCidade}>{city || 'Cidade'}</Text>
                <Text style={style.temperaturaTexto}>{temperature}°C</Text>
                <Text style={style.condicaoTexto}>{condition}</Text>
            </View>
        </View>
    );
}
