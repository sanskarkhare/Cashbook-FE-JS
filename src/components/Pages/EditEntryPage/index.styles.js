import styled from 'styled-components';

export const MyWrapper = styled.div`
    /* height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0; */
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 92vh;
    width: 100%;

    > h1 {
        font-family: sans-serif;
        font-size: 2rem;
        color: #323232;
        margin-top: 0;
    }

    @media (max-width: 900px) {
        height: 95vh;
        width: 95%;
        
    }
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    color: #6a5acd;

    @media (max-width: 500px) {
        
        font-size: .9rem;
}
`

export const Input = styled.input`
    width: 15vw;
    height: 5vh;
    outline: none;
    border: 2px solid #cccccc;
    font-size: 1.2rem;

    @media (max-width: 500px) {
            font-size: .8rem;
    }
    @media (max-width: 450px) {
            width: 20vw;
    }
   
`
export const SaveBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    height: 10vh;
    width: 15vw;
    background-color: #6A5ACD;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: none;
    border-radius: 15px;
    margin-right: 1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1100px) {
            height: 4rem;
            width: 12rem;
    }

    @media (max-width: 900px) {
            height: 4rem;
    }
    
    @media (max-width: 700px) {
            height: 3rem;
            width: 8rem;
            font-size: 1.4rem
    }
    @media (max-width: 500px) {
            height: 2.5rem;
            width: 6.5rem;
            font-size: 1rem;
    }
    @media (max-width: 350px) {
            height: 2.2rem;
            width: 6rem;
            font-size: .8rem;
    }
`

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;
    color: #191919;
    background: none;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: scale(1.15);
    }

    .DeleteLogo {
        color: grey;
    }
`