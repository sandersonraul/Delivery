import styled from 'styled-components/native';

export const ViewContainer = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const ViewCity = styled.View`
    top: -350px;
    left: -110px;
`;

export const TextCity = styled.Text`
    width: 177px;
    height: 29px;
    left: 27px;
    top: 146px;

    font-weight: 500;
    font-size: 24px;
    /* identical to box height, or 29px */
    color: #000000;
`;

export const TextCityComplement = styled.Text`
    width: 148px;
    height: 18px;
    left: 27px;
    top: 145px;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */

    color: #979797;
`;

export const Input = styled.TextInput`
    width: 359px;
    height: 40px;
    left: 110px;
    top: 200px;
    margin-bottom: 20px;

    background: #e6e6e6;
    border-radius: 10px;
    border-color: black;
    padding: 12px;
`;

export const ViewInputs = styled.View`
    top: -350px;
    left: -110px;
`;

export const ViewSalvarComo = styled.View`
    
`;

export const TextSalvarComo = styled.Text`
    width: 102px;
    height: 19px;
    left: -65px;
    top: -120px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    color: #000000;
`;

export const ButtonSalvarComo = styled.TouchableOpacity`
    width: 72px;
    height: 32px;

    background: #FFFFFF;
    border-radius: 5px;
    border-color: #F9B233;
    background: grey
`;

export const TextButtonSalvarComo = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /* or 19px */

    color: #F9B233;
`;

export const ButtonsSalvarComo = styled.View`
    flex-direction: row;

    top: -80px;
    left: -65px;
`;
