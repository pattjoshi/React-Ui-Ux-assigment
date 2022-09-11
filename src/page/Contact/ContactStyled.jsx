import styled from "styled-components";


export const Flex = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;  
    overflow: hidden;

& > div,
& > ul{
    float: 1;
}
`
export const ContactStyled = styled.div`
    display: flex;
    flex-direction: column;




    .h1{
            position: absolute;
    left: 52px;
    top: 99px;
    font-style: normal;
    font-weight: 400;
    font-size: 62px;
    line-height: 86px;
    color: #364F6B;
        }

    .mainDiv{   
    position: absolute;
    width: 733px;
    height: 500px;
    left: 50px;
    top: 236px;
    overflow: hidden;
    background: #364F6B;
    border-radius: 24px;
    }
        h5{
     position: absolute;
    width: 398px;
    height: 42px;
    left: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    color: #FFFFFF;
        }
        p{
      position: absolute;
    width: 632px;
    height: 56px;
    left: 55px;
    top: 88px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #D9D9D9;
    }
    .name{
        position: absolute;
    width: 445px;
    height: 40px;
    left: 50px;
    top: 200px;
    background: #394149;
    border-radius: 8px;
    }
        h6{
            position: absolute;
    width: 130px;
    height: 27px;
    top: 120px;
    left: 56px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #f6f5f5;
        }
        .message{
     position: absolute;
    width: 600px;
    height: 120.74px;
    left: 94px;
    top: 530px;
    background: #394149;
    border-radius: 8px;
        }
         .msgH{
         position: absolute;
        width: 100px;
        height: 29px;
        left: 98px;
        top: 450px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;

        color: #FFFFFF;
         }
            button{
                position: absolute;
            width: 210px;
            height: 57px;
            left: 94px;
            top: 666px;
            cursor: pointer;
            background: #43DDE6;
            border-radius: 100px;
             }
`;

export const ConnDiv = styled.div`
    .h5{
    position: absolute;
    width: 255px;
    height: 42px;
    left: 847px;
    top: 222px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    color: #333333;
    }
     .address{
        position: absolute;
        width: 277px;
        height: 28px;
        left: 847px;
        top: 301px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #333333;
     }
        .call{
            position: absolute;
    width: 140px;
    height: 42px;
    left: 847px;
    top: 344px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    color: #333333;
        }
        .callNo{
            position: absolute;
    width: 171px;
    height: 56px;
    left: 847px;
    top: 420px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #333333;
     }
        .sosial{
    position: absolute;
    width: 180px;
    height: 42px;
    left: 847px;
    top: 460px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    color: #333333;
        }
        .conndev{
        position: absolute;
        width: 100px;
        height: 44px;
        left: 847px;
        top: 555px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-size: 22px;
        }
        .insta{
            color: #43DDE6;
        }
        .twitter{
            color: #43DDE6;
        }
        .facebook{
            color: #43DDE6;
        }

`



