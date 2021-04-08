import styled from 'styled-components';

export const InBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
    height: 10vh;
    width: 15vw;
    background-color: #3AB98C;
    border-radius: 10px;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    z-index: 10;
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
            width: 10rem;
    }

    
    @media (max-width: 700px) {
            height: 3rem;
            width: 8rem;
            font-size: 1.1rem;
    }

    @media (max-width: 500px) {
            height: 2.5rem;
            width: 7rem;
            font-size: 1rem;
    }
    @media (max-width: 350px) {
            height: 2.2rem;
            width: 6rem;
            font-size: .8rem;
    }
`
export const OutBtn = styled(InBtn)`
    background-color: #CB4544;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin: 4rem 0 0 0; */
    z-index: 2;

`

export const MyWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    margin-bottom: 0;
    /* background: grey; */
    /* @media (max-width: 900px) {
            height: 4rem;
            
    } */
`
