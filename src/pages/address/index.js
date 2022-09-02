import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { 
    ViewContainer,
    TextCity,
    ViewCity,
    TextCityComplement,
    Input,
    ViewInputs,
    ViewSalvarComo,
    TextSalvarComo,
    ButtonsSalvarComo,
    ButtonSalvarComo,
    TextButtonSalvarComo,
    ButtonSalvarComoGrey,
    TextButtonSalvarComoGrey,
    ViewButtonOther,
    ButtonSave,
    TextButtonSave,
    ViewImage,
} from './style';

import axios from 'axios';

export default function Address() {

    const onPress1 = async function(){

        let access = ''

        await axios.post('http://207.246.118.151/api/user/login/', {
            email: 'admin@gmail.com',
            password: 'ifrn12345'
          })
          .then(function (response) {
            console.log(response.data.tokens.access);
            access = response.data.tokens.access
          })
          .catch(function (error) {
            console.log(error);
        });

        await axios.post('http://207.246.118.151/api/user/cadastrar_novo_endereco/', 
        {
            cep: "5999000",
            estado: "Brasil",
            cidade: "Rafael Fernandes",
            rua: "São Benedito",
            numero: 12,
            bairro: "Zona Rural",
            tipo: "Casa",
            complemento: "Pechinchou"
        },
        {
            headers: {
                Authorization: `Bearer ${access}`,
            },
        }
        )
          .then(function (response) {
            console.log('\n\n\n\n\n\n\n\n\n\n' + access)
            console.log(response.data);
            alert(`Endereço salvo com sucesso! \n\n ${JSON.stringify(response.data)}`)
          })
          .catch(function (error) {
            console.log('\n\n\n\n\n\n\n\n\n\n' + access)
            console.log(error);
          });

    };

    return (
        <ViewContainer>
            <ViewCity>
                <TextCity>Pau dos Ferros</TextCity>
                <TextCityComplement>Rio Grande do Norte / Rn</TextCityComplement>
                <ViewImage>
                    <Image
                        source={require('../../images/fi-br-cross.png')}
                    />
                </ViewImage>
            </ViewCity>
            <ViewInputs>
                <Input placeholder="Bairro"/>
                <Input placeholder="Logradouro"/>
                <Input placeholder="Número"/>
                <Input placeholder="Complemento"/>
            </ViewInputs>
            <ViewSalvarComo>
                <TextSalvarComo>Salvar como</TextSalvarComo>
                <ButtonsSalvarComo>
                    <ButtonSalvarComo>
                        <TextButtonSalvarComo>CASA</TextButtonSalvarComo>
                    </ButtonSalvarComo>
                    <ButtonSalvarComoGrey>
                        <TextButtonSalvarComoGrey>TRABALHO</TextButtonSalvarComoGrey>
                    </ButtonSalvarComoGrey>
                    <ViewButtonOther>
                        <ButtonSalvarComoGrey>
                            <TextButtonSalvarComoGrey>OUTRO</TextButtonSalvarComoGrey>
                        </ButtonSalvarComoGrey>
                    </ViewButtonOther>
                </ButtonsSalvarComo>
            </ViewSalvarComo>

            <TouchableOpacity style={styles.button_save} onPress={onPress1}>
                <TextButtonSave>Salvar Endereço</TextButtonSave>
            </TouchableOpacity>

        </ViewContainer>
    )
}

const styles = StyleSheet.create({
    button_save: {
        width: 340,
        height: 40,
        top: 80,
        
        backgroundColor: '#F9B233',
        borderRadius: 10,
    }
});