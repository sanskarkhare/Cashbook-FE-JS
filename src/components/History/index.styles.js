import styled from 'styled-components';


export const ParaRemark = styled.p`
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    color: #191919;
    margin: 0;
    /* display: flex;
    flex: 70%; */

    @media (max-width: 850px) {
            margin: 0 3rem 0 0;

    }

    @media (max-width: 700px) {
            margin: 0 3rem 0 0;

    }

    @media (max-width: 500px) {
            font-size: .9rem;
            margin: 3px 3rem 0 0;
    }
    @media (max-width: 450px) {
           font-size: .8rem;
            margin: 0 4rem 0 0;
    }
    @media (max-width: 350px) {
            font-size: 12px;
            margin: 0 4rem 0 0;

    }
`;

export const ParaAmount = styled.p`
    /* font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter; */
    color: ${(props) => (props.price > 0) ? 'green': 'red'};
    font-weight: bold;
    /* width: 25%; */

    
    @media (max-width: 450px) {
            font-size: .9rem;
            margin: .7rem 0 1px 0;
    }
    @media (max-width: 350px) {
            font-size: 12px;
            margin: .7rem 0 1px 0;

    }
`;

export const ParaDate = styled.p`
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter;
    color: grey;
    font-size: 10px;
    margin: 0 0 0 -8rem;
    /* margin: 0 5rem 0 0; */
    /* display: flex;
    flex: 30% */

    @media (max-width: 850px) {
        margin: 4px 8rem 0 -1rem;
    }

    @media (max-width: 700px) {
            font-size: .5rem;
            margin: 4px 8rem 0 -1rem;

    }
    @media (max-width: 500px) {
            font-size: .3rem;
            margin: 6px 8rem 0 -1rem;

    }
    @media (max-width: 360px) {
            margin: 6px 8rem 0 .1rem;

    }
`;



export const Hr = styled.hr`
    border: 0;
    clear:both; 
    width: 1.5px;               
    background-color:grey;
    height: 6vh;
    padding: 0;
    margin: 0 ;
    top: 0;

    @media (max-width: 700px) {
            height: 2.2rem;
            width: 1px;
    }
    @media (max-width: 450px) {
            height: 1.5rem;

    }
    @media (max-width: 350px) {
            height: 1.2rem;

    }
`

export const ParaWrapper = styled.div`
    display: flex;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5px;
    background: whitesmoke;
    cursor: pointer;

    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }


`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    width: 50vw;
    border-radius: 10px;
    margin: 1rem 0 1rem 0;

    @media (max-width: 900px) {
            margin-bottom: 2rem;
    }
    
    @media (max-width: 700px) {
            margin:.1rem 0 .5rem 0;
    }
    
    @media (max-width: 500px) {
           width: 70vw;

    }
    @media (max-width: 350px) {
        margin: .3rem 0 -10px 0;

    }

`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0; 
    background: #e5e5e5;
    z-index: 1;
    width: 50vw;
    height: 20%;
    /* margin-bottom: 2rem; */

    @media (max-width: 700px) {
            width: 49vw;
    }
    @media (max-width: 500px) {
            height: 2.5rem;
            width: 70vw;
    }
    @media (max-width: 450px) {
            height: 2.2rem;

    }
    @media (max-width: 350px) {
           height: 2rem;

    }
`

export const H3 = styled.p`
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     color: #323232;
     font-size: 20px;
     font-weight: 200;
     margin: 1rem;
     text-transform: uppercase;
     margin-bottom: 1rem;

     @media (max-width: 700px) {
            font-size: 1rem;

    }
    @media (max-width: 500px) {
            font-size: .8rem;
    }
    @media (max-width: 450px) {
            font-size: .7rem;

    }
    @media (max-width: 350px) {
            font-size: .6rem;

    }

`

// export const UL = styled.ul`
//      /* list-style-type: none; */
//         top: 0;
//     /* margin-top: 14rem; */
// `;

export const LI = styled.li`
        background-color: #fff;
        box-shadow:  0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);;
        color: #191919;
        display: flex;
        justify-content: space-around;
        position: relative;
        padding: 2px 5px -1px 5px;
        margin: 10px 10px 10px -10px;
        cursor: pointer;

        transition: all .5s ease-in-out;
    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 500px) {
            height: 2.5rem;

    }
    @media (max-width: 400px) {
            height: 2rem;

    }
    @media (max-width: 350px) {
            height: 1.8rem;
            margin: 5px 10px 5px -10px;
    }


`

export const RemarkDateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ULWrapper = styled.div`
    /* margin-top: 20rem; */
    /* top: 10%; */
    overflow-y: auto;
    padding: 0 .1rem .2rem 1.4rem;

    @media (max-height: 1100px) {
            height: 20rem;
            
    }
    @media (max-width: 800px) {
            height: 15rem;
            
    }

    @media (max-width: 600px) {
           height: 11rem;
    }
    
`