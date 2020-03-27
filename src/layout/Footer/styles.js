import styled from 'styled-components'

const styles = {};  

export default styles;

export const Content = styled.div`
    background: #333;
`;

export const BlogSection = styled.div`
    display: block;
    margin: auto;
    padding-top: 50px;
    color: white;
    text-align: center;
    h1 {
        font-size: 60px;
    }
    p {
        width: 70%;
        margin: auto;
    }
    label {
        text-transform: uppercase;
    }
    h1{
        margin-top: 0px
    }
`;

export const InfoSection = styled.div`
    display: flex;
    padding-top: 150px;
    margin: auto;
    justify-content: space-between;
    p{color: white;}

    @media (max-width: 992px) {
        display: block;
        text-align: center;
    }
`;

export const Support = styled.div`
    display: flex;
    padding-top: 100px;
    margin:auto;
    justify-content: space-between;
    padding-bottom: 100px;

    @media (max-width: 992px) {
        display: block;
        justify-content: center;
    }
`;
export const SupportLeft = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
    a{color: white;}

    @media (max-width: 992px) {
        width: 100%;
    }
    
`;
export const SupportRight = styled.div`
    display: flex;
    width: 10%;
    justify-content: space-between;
`;

export const ButtonStyle = {
    padding: '10px 30px',
    fontWeight: 'bold'
}