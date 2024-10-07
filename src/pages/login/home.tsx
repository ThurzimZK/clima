import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { style } from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    Home: undefined;
    Diversos: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {


    return (
        <View style={style.containerHome}>
            <View style={style.blocoPrincipal}>
                <View style={style.pontinhos} >
                    <View style={[style.ponto, style.pontoInativo]} />
                    <View style={[style.ponto, style.pontoAtivo]} />
                    <View style={[style.ponto, style.pontoInativo]} />
                </View>
                <Text style={style.TituloPrincipal}>Veja como está o tempo ao redor do mundo 🌍️</Text>
                <Text style={style.Subtitulo}>Comece agora gratuitamente</Text>
                <TouchableOpacity style={style.botaoPrincipal} onPress={() => navigation.navigate("Diversos")} >
                    <Text style={style.textoBotao}>Vamos lá</Text>
                </TouchableOpacity>
                <View style={style.login}>
                    <Text style={style.textoFinal}>Já tem uma conta ? </Text>
                    <TouchableOpacity>
                        <Text style={style.textoFinalAcao}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
