import styled from 'styled-components';


export const ParaRemark = styled.p`
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter;
    color: #262626;
`;

export const ParaAmount = styled.p`
    font-size: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: lighter;
    color: ${(props) => (props.price > 0) ? 'green': 'red'};
`;

export const Hr = styled.hr`
    border: 0;
    clear:both; 
    width: 1.5px;               
    background-color:grey;
    height: 10vh;
    padding: 0;
    margin: 0 ;
    top: 0;
`

export const ParaWrapper = styled.div`
    display: flex;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5px;
    background: whitesmoke;
    cursor: pointer;

    transition: all .3s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }

`





export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 20rem;
    margin: 1.5rem 3rem 2rem 3rem;
    border-radius: 10px;

    /* .Div {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        background: pink;
    } */
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0; 
    background: #dcdcdc;

`

export const H1 = styled.p`
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     color: #100C08;
     font-size: 25px;
     font-weight: lighter;
`