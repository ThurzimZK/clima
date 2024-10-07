import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

const { height } = Dimensions.get('window');

export const style = StyleSheet.create({

    containerHome:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themas.colors.primary
    },
    blocoPrincipal:{
        width: '90%',
        height: 400,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20
    },
    pontinhos:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    ponto: {
        width: 10,   
        height: 10,  
        borderRadius: 25, 
        marginHorizontal: 5, 
        marginTop: 10
    },
    pontoAtivo: {
        backgroundColor: '#6A1B9A', 
    },
    pontoInativo: {
        backgroundColor: '#E0E0E0',  
    },
    TituloPrincipal:{
        fontSize: 22,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingHorizontal: 50,
        textAlign: 'center',
        marginTop: 15
    },
    Subtitulo:{
        marginTop: 15,
        fontSize: 15,
        textAlign: 'center',
    },
    botaoPrincipal:{
        backgroundColor: themas.colors.primary,
        width: 260,
        height: 70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 35,
        marginTop: 90,
    },
    textoBotao:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    login:{
        flexDirection: 'row',
        marginTop: 7
    },
    textoFinal:{
        fontSize: 16,
    },
    textoFinalAcao:{
        fontSize: 16,
        fontWeight: 'bold',
        color: themas.colors.primary
    },


    // pagina diversos

    containerDiversos:{
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white'
    },
    viewTop:{
        height: height * 0.3,
        width: '90%',
        marginTop: 100,
        justifyContent: 'flex-start',
    },
    viewBottom:{
        height: height * 0.7,
        width: '90%',
    },
    textoDiversos:{
        fontSize: 20,
    },
    botaoContainer: {
        alignItems: 'center', 
        marginTop: 70, 
    },
    botaoPesquisa: {
        backgroundColor: themas.colors.primary,
        width: 260,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    textoBotaoPesquisa:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    blocoDados:{
        width: '100%',
        height: 170,
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        marginTop: 15
    },
    cartao: {
        backgroundColor: themas.colors.primary,
        marginTop: 15,
        borderRadius: 20,
        padding: 20,
        width: '100%',
        height: 150,
        justifyContent: 'space-between',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pais: {
        color: 'white',
        fontSize: 14,
    },
    cidade: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },
    tempo: {
        color: 'white',
        fontSize: 16,
    },
    temperatura: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },


    // pagina pesquisar
    containerPesquisar:{
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'white'
    },
    procurar: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 30,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginRight: 8,
        marginLeft: 8
    },
    cartaoTempo: {
        backgroundColor: themas.colors.primary,
        borderRadius: 20,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        
    },
    imagem:{
        width: 250,
        height: 250
    },
    nomeCidade: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    temperaturaTexto: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
    },
    condicaoTexto: {
        color: 'white',
        fontSize: 18,
    },
})
