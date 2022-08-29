import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text } from 'react-native';
import { 
    ViewContainer,
} from '../address/style';

import {
    ViewSearchAddress,
    TextSearchAddress,
    Input,
    ViewLocation,
    ViewTextsLocation,
    TextCurrentLocation
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
                    <TextCurrentLocation>Localização Atual</TextCurrentLocation>
                </ViewTextsLocation>
            </ViewLocation>

        </ViewContainer>
    )
}