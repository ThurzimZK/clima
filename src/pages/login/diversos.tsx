import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator 
} from 'react-native';
import { style } from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


type RootStackParamList = {
    Home: undefined;
    Diversos: undefined;
    Pesquisar: undefined;
};

type DiversosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Diversos'>;

type Props = {
    navigation: DiversosScreenNavigationProp;
};


const API_KEY = '2e51e88bf29e4490b5d232134242709'

const cities = [
    { name: 'New York', id: '5128581' }, 
    { name: 'São Paulo', id: '3451190' }, 
    { name: 'Tokyo', id: '1850147' } 
];

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

const traducaoPais: { [key: string]: string } = {
    'United States of America': 'Estados Unidos',
    'Brazil': 'Brasil',
    'Japan': 'Japão',
};

const traducaoCidade: { [key: string]: string } = {
    'New York': 'Nova York',
    'San Paulo': 'São Paulo',
    'Tokyo': 'Tóquio',
};

export default function Diversos({ navigation }: Props) {

    const [weatherData, setWeatherData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const promises = cities.map(async (city) => {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.name}`);
                const data = await response.json();
                return {
                    city: traducaoCidade[data.location.name] || data.location.name, 
                    country: traducaoPais[data.location.country] || data.location.country,
                    temp: data.current.temp_c,
                    condition: traducaoTempo[data.current.condition.text] || data.current.condition.text, 
                };
            });

            const results = await Promise.all(promises);
            setWeatherData(results);
            setLoading(false);
        };

        fetchWeatherData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={style.containerDiversos}>
            <View style={style.viewTop}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={style.textoDiversos}>Olá User,</Text>
                <Text style={style.textoDiversos}>Descubra o clima</Text>
                <View style={style.botaoContainer}>
                    <TouchableOpacity style={style.botaoPesquisa} onPress={() => navigation.navigate("Pesquisar")}>
                        <Text style={style.textoBotaoPesquisa}>Pesquise por uma cidade</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.viewBottom}>
                <Text style={style.textoDiversos}>Ao redor do mundo</Text>
                {weatherData.map((data, index) => (
                <View key={index} style={style.cartao}>
                    <View style={style.linha}>
                        <Text style={style.pais}>{data.country}</Text>
                        <Text style={style.temperatura}>{data.temp}°C</Text>
                    </View>
                    <Text style={style.cidade}>{data.city}</Text>
                    <View style={style.linha}>
                        <Text style={style.tempo}>{data.condition}</Text>
                    </View>
                </View>
            ))}
                
            </View>
        </View>
    );
}

