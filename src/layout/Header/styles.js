import styled from 'styled-components'

const styles ={};

export default styles;

export const Header = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  z-index: 10000;

  @media(max-width: 1200px) {
    height: 60px;
  }
  `;
  
  export const HeaderLeft = styled.div`
  float: left;
  width: 10%;
  img{
    padding: 30px
  }
  `;
  
  export const HeaderRight = styled.div`
  
  a, div {
    display: inline-block;
    vertical-align: middle;
    padding: 0px 20px;
    font-weight: bold;
    &:hover {
      // color: rgba(0,0,0,0.3)
    }
  }

  .btn_header_contact {
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    & > a{
      display: none;
    }
    .btn_header_contact {
      margin-top: 10px;
    }
    
  }
`;

export const ButtonStyle = {
  padding: '20px 60px', 
}

export const ButtonSmallStyle = {
  padding: '10px 30px', 
}
