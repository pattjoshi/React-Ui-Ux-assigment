import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavigationBar = styled.div`
 position: absolute;
width: 1230px;
height: 62px;
left: 50px;
top: 32px;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
border-radius: 16px;
   img{
    position: relative;
    width: 76.27px;
    height: 44px;
    left: 32px;
    top: 7px;
    cursor: pointer;
   }

    button{
    position: absolute;
    width: 130px;
    height: 35px;
    top: 14px;
    left: 1068px;
    background: #43DDE6;
    border-radius: 44px;
    &:hover{
        background: #0be5f0;
    }
     }
`

export const OptionsContainer = styled.div`
position: absolute;
width: 267px;
height: 30px;
left: 749px;
top: 23px;
display: flex;
justify-content: space-between;
`;


export const OptionLink = styled(Link)`

width: 48px;
height: 42px;
left: 78px;
top: 10px;
cursor: pointer;
font-family: 'Poppins', sans-serif;  
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #333333;
text-decoration: none;
&:hover{
    color: #313030;
}
`;
