import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text } from 'react-native';
import { 
    ViewContainer,
    ButtonSave,
} from '../address/style';

import {
    ViewSearchAddress,
    TextSearchAddress,
    Input,
    ViewLocation,
    ViewTextsLocation,
    TextCurrentLocation,
    TextGps,
    ImageLogoLocation,
    SavedEnderecos,
    ViewSavedEnderecos,
    TextSavedEnderecos,
    ButtonSaveSaved,
    TextButtonSaveSaved,
} from './styles';

export default function SearchAdress(){
    return (
        <ViewContainer>
            <ViewSearchAddress>
                <TextSearchAddress>Procurar Endereço</TextSearchAddress>
                <Input placeholder="Buscar..."/>
            </ViewSearchAddress>

            <ViewLocation>
                <ViewTextsLocation>
                    <ImageLogoLocation source={require('../../images/logo_location.png')}/>
                    <TextCurrentLocation>Localização Atual</TextCurrentLocation>
                    <TextGps>Usando o GPS</TextGps>
                </ViewTextsLocation>
                <SavedEnderecos>Endereços Salvos</SavedEnderecos>

                <ViewSavedEnderecos>
                    <ViewTextsLocation>
                        <ImageLogoLocation source={require('../../images/home.png')}/>
                        <TextSavedEnderecos>Casa</TextSavedEnderecos>
                        <TextGps>Rua dor de cabeça</TextGps>
                    </ViewTextsLocation>
                </ViewSavedEnderecos>

                <ViewSavedEnderecos>
                    <ViewTextsLocation>
                    <ImageLogoLocation source={require('../../images/work.png')}/>
                        <TextSavedEnderecos>Trabalho</TextSavedEnderecos>
                        <TextGps>Rua dor de cabeça</TextGps>
                    </ViewTextsLocation>
                </ViewSavedEnderecos>

                <ViewSavedEnderecos>
                    <ViewTextsLocation>
                        <ImageLogoLocation source={require('../../images/loca.png')}/>
                        <TextSavedEnderecos>Outro</TextSavedEnderecos>
                        <TextGps>Rua dor de cabeça</TextGps>
                    </ViewTextsLocation>
                </ViewSavedEnderecos>
            </ViewLocation>

            <ButtonSaveSaved>
                <TextButtonSaveSaved>Adicionar Endereço</TextButtonSaveSaved>
            </ButtonSaveSaved>

        </ViewContainer>
    )
}