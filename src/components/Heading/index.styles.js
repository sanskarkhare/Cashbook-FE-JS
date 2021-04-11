import styled from 'styled-components';

export const HeadingPara = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #191919;
    padding: 0;

    

    @media (max-width: 700px) {
            font-size: 1.8rem;

    }

    @media (max-width: 500px) {
            font-size: 1.4rem;
    }

    @media (max-width: 450px) {
            font-size: 1.2rem;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    /* margin: -1rem 0 2rem 0; */

    @media (max-width: 1100px) {
            margin: .5rem 0 .2rem 0 ;
    }

    @media (max-width: 900px) {
            margin: .5rem 0 .5rem 0 ;
    }
    
    @media (max-width: 700px) {
            margin: .5rem 0 -1.5rem 0;
    }

    @media (max-width: 500px) {
            margin: .3rem 0 1.5rem 0;
    }
    @media (max-width: 400px) {
            margin: .3rem 0 .8rem 0;
    }

    @media (max-height: 500px) {
            margin: .3rem 0 1rem 0;
    }
    @media (max-height: 350px) {
            margin: .06rem 0 4px 0;
    }
    @media (max-height: 700px) {
            margin: .3rem 0 .5rem 0;
    }
    @media (max-height: 350px) {
           margin: .2rem 0 2rem 0;
    }

`;

