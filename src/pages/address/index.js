import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
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
    TextButtonSalvarComo
} from './style';

export default function Address() {
    return (
        <ViewContainer>
            <ViewCity>
                <TextCity>Pau dos Ferros</TextCity>
                <TextCityComplement>Rio Grande do Norte / Rn</TextCityComplement>
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
                    <ButtonSalvarComo>
                        <TextButtonSalvarComo>TRABALHO</TextButtonSalvarComo>
                    </ButtonSalvarComo>
                    <ButtonSalvarComo>
                        <TextButtonSalvarComo>OUTRO</TextButtonSalvarComo>
                    </ButtonSalvarComo>
                </ButtonsSalvarComo>
            </ViewSalvarComo>

        </ViewContainer>
    )
}