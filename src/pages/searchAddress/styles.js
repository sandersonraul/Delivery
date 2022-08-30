import styled from "styled-components";

export const ViewContainerNew = styled.View`
    top: 110px;
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    width: 359px;
    height: 40px;
    left: 50px;
    top: 180px;
    margin-bottom: 20px;

    background: #e6e6e6;
    border-radius: 10px;
    border-color: black;
    padding: 12px;
`;

export const ViewSearchAddress = styled.View`
    top: -500px;
    left: -50px;
`;

export const TextSearchAddress = styled.Text`
    width: 297px;
    height: 29px;
    left: 55px;
    top: 146px;

    font-weight: 500;
    font-size: 24px;    
    /* identical to box height, or 29px */
    color: #000000;
`;

export const ViewLocation = styled.View`
    width: 360px;
    height: 64px;
    left: 0px;
    top: -290px;

    background: #FFFFFF;
    border-radius: 10px;
    border: 2px solid #d9d9d9;
`;

export const ViewTextsLocation = styled.View`
    
`;

export const TextCurrentLocation = styled.Text`
    position: absolute;
    width: 142px;
    height: 30px;
    left: 65px;
    top: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;

export const TextGps = styled.Text`
    position: absolute;
    width: 140px;
    height: 18px;
    left: 72px;
    top: 30px;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;

    color: #979797;
`;

export const ImageLogoLocation = styled.Image`
    left:5%;
    right: 0%;
    top: 35%;
    bottom: 0%;
    width: 9%;
    height: 74%;
`;

export const SavedEnderecos = styled.Text`
    width: 222px;
    height: 36px;
    left: 10px;
    top: 50px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
`;

export const ViewSavedEnderecos = styled.View`
    width: 360px;
    height: 64px;
    left: 0px;
    top: 80px;
    margin-bottom: 25px;

    background: #FFFFFF;
    border-radius: 10px;
    border: 2px solid #d9d9d9;
`;

export const TextSavedEnderecos = styled.Text`
    position: absolute;
    width: 142px;
    height: 22px;
    left: 71px;
    top: 6px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;

    color: #000000;

`;

export const ButtonSaveSaved = styled.TouchableOpacity`
    width: 340px;
    height: 40px;
    top: 140px;
    
    background: #F9B233;
    border-radius: 10px;
`;

export const TextButtonSaveSaved = styled.Text`
    width: 235px;
    height: 20px;
    left: 100px;
    top: 6px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`;

export const ViewImageNew = styled.View`
    top: 70px;
    left: 390px;
`;