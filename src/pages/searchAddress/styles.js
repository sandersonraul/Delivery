import styled from "styled-components";

export const ViewContainer = styled.View`
    top: 70px;
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
    left: 50px;
    top: 146px;

    font-weight: 500;
    font-size: 24px;    
    /* identical to box height, or 29px */
    color: #000000;
`;

export const ViewLocation = styled.View`
    width: 360px;
    height: 54px;
    left: 0px;
    top: -290px;

    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid grey;
`;

export const ViewTextsLocation = styled.View`
    
`;

export const TextCurrentLocation = styled.Text`
    position: absolute;
    width: 142px;
    height: 30px;
    left: 95px;
    top: 12px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;