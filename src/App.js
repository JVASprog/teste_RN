import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

// cores:
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontNickname = '#4F565E';

// links:

const urlGithub = 'https://github.com/ZezinZK';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/9590205?v=4';


// app:
const App = () => {

    const handlePressGoToGithub = async () =>{
        console.log('verificando link');
        const resolution = await Linking.canOpenURL(urlGithub);
        if(resolution){
            console.log('link aprovado, abrindo o link');
            await Linking.openURL(urlGithub)
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />

            <View style={style.content} >
                <Image
                    accessibilityLabel="Foto de perfil do github ZezinZK"
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text
                    accessibilityLabel="Nome: José Vogeley"
                    style={[style.defaultText, style.name]}>
                    José Vogeley
                </Text>
                <Text
                    accessibilityLabel="Nickname: ZezinZK"
                    style={[style.defaultText, style.nickname]}>ZezinZK</Text>
                <Text
                    accessibilityLabel="Descrição: Automation and Control 🧑‍🎓 | Tcnology entusiast 💻 | Dev python/C | Machine learning engeneering | JavaScript/React-Native still loading... 😄"
                    style={[style.defaultText, style.description]}>Automation and Control 🧑‍🎓 | Tcnology entusiast 💻 | Dev python/C | Machine learning engeneering | JavaScript/React-Native still loading... 😄
                </Text>
                <Pressable onPress={handlePressGoToGithub}>   
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //colunas
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row', // serve para alinhar a view em linha ou coluna caso tenha mais de uma
    },
    content: {
        alignItems: 'center', //alinhando a imagem
        padding: 20, //dando espaçamento
    },
    avatar: {
        height: 200, //altura da imagem
        width: 200, //largura da imagem
        borderRadius: 100, // criando borda redonda
        borderColor: 'white', // cor da borda
        borderWidth: 2, // largura da borda
    },
    defaultText: {
        color: colorFontGithub, //cor do texto default
    },
    name: {
        marginTop: 20, // margem para dar espaço entre a imagem e os textos
        fontSize: 24, // tamanho da fonte do nome
        fontWeight: 'bold', // colocando em negrito
    },
    nickname: {
        fontSize: 18, // tamanho da fonte do apelido
        color: colorFontNickname, // cor da fonte do apelido
    },
    description: {
        fontSize: 14, // tamanho da fonte da descricao
        fontWeight: 'bold', // colocando em negrito
    },
    button:{
        marginTop: 20,
        backgroundColor: colorFontNickname,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
});