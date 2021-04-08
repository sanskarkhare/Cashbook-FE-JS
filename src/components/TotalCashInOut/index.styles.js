import styled from 'styled-components';

export const SignPara = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: green;
    background-color: lightgreen;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 5px;
    display: flex;
    justify-content: center;

    @media (max-width: 700px) {
            font-size: 1.7rem;
            width: 35px;
            height: 35px;
    }

    @media (max-width: 500px) {
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
    }

    @media (max-width: 450px) {
        font-size: 1.3rem;
            width: 27px;
            height: 27px;
    }
`

export const SignParaMinus = styled(SignPara)`
    font-size: 2rem;
    color: red;
    background-color: #f08080;

    @media (max-width: 700px) {
            font-size: 1.7rem;
            width: 35px;
            height: 35px;
    }

    @media (max-width: 500px) {
        font-size: 1.5rem;
            width: 30px;
            height: 30px;
    }
    @media (max-width: 450px) {
        font-size: 1.3rem;
            width: 27px;
            height: 27px;

    }
`

export const Header = styled.header`
    color: #4c4c4c;
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 700px) {
            font-size: .8rem;
            font-weight: bold;
    }

    @media (max-width: 500px) {
            font-size: .6rem;
            font-weight: bold;
    }
    @media (max-width: 350px) {
            font-size: .45rem;

            }
`

export const AmountPara = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin: 5px 0 0 5px;
    color: #191919;

    @media (max-width: 700px) {
            font-size: 1rem;

    }
    @media (max-width: 500px) {
            font-size: .9rem;
            font-weight: bolder;
    }
    @media (max-width: 350px) {
           font-size: .7rem;
            }
`

export const HeaderAmountWrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* flex: 50%; */
    
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
            padding: 1px 0 1px 0;
            
    }
`

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 20rem;
    padding: .7rem;
    /* margin: 3rem 20rem 1rem 28.5rem; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    @media (max-width: 900px) {
            height: 4rem;
            
    }

    
    @media (max-width: 700px) {
            height: 3rem;
            width: 15rem;
            /* margin: 3rem 5rem 2rem 13.5rem; */
            
    }

    @media (max-width: 500px) {
            height: 2rem;
            width: 12rem;
            /* margin: 3rem 5rem 1rem 8.7rem; */
            
    }
    @media (max-width: 350px) {
            height: 1.6rem;
            width: 10rem;
        }
`;

export const MyWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 1rem 0;
    /* background: yellow; */

    @media (max-width: 1100px) {
            margin-bottom: 3rem;
            
    }
`

export const Hr = styled.hr`
    border: 0;
    clear:both; 
    width: 1.5px;               
    background-color:grey;
    height: 10vh;
    margin: auto;

    @media (max-width: 900px) {
            height: 4rem;
            
    }

    @media (max-width: 700px) {
            height: 3rem;
            width: 1px;
            margin: 1px 4px 1px 2px;
            
    }

    @media (max-width: 500px) {
            height: 2rem;
            width: 1px;
            margin: 1px 2px 1px 4px;
            
    }
    @media (max-width: 350px) {
            height: 1.8rem;
            width: .8px;
            }
`;