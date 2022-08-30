import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';
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

export default function Address() {
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

            <ButtonSave>
                <TextButtonSave>Salvar Endereço</TextButtonSave>
            </ButtonSave>

        </ViewContainer>
    )
}