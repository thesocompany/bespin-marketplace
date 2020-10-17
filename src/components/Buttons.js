import styled from 'styled-components';
import { appleStyledModifers, applyStyleModifiers } from "styled-components-modifiers"

const primaryBlue = "#005EA2"
const secondaryRed = "#D83933"
const accentCoolBlue = "#00BDE3"
const baseColor = "#565C65"
const accentWarmOrange = "#FA9441"

const BUTTON_MODIFERS = {
  secondary: () => `
    background-color: ${secondaryRed};
    border-radius: 4px;
   
    :hover {
      background: #B51D09;
    }
   
    :active {
      background: #8B1303;
    }
  `,

  accentCoolBlue: () => `
    background-color: ${accentCoolBlue};
    border-radius: 4px;
   
    :hover {
      background: #28A0CB;
    }
   
    :active {
      background: #07648D;
    }
  `,
  base:() => `
    background-color: ${baseColor};
    border-radius: 4px;
   
    :hover {
      background: #565C65;
    }
   
    :active {
      background: #3D4551;
    }
  `,
  accentWarm:() => `
    background-color: ${accentWarmOrange};
    border-radius: 4px;
   
    :hover {
      background: #C05600;
    }
   
    :active {
      background: #775540;
    }
  `
  
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  
  position: absolute;
  left: 35.61%;
  right: 50.87%;
  top: 12.64%;
  bottom: 83.94%;
  
  font-family: Public Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  
  color: #FFFFFF;
  flex: none;
  order: 0;
  align-self: center;
  margin: 0px 10px;
  
  position: static;
  left: 21.51%;
  right: 21.51%;
  top: 27.91%; 
  bottom: 27.91%;
`
const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  border-radius: 4px;
 
  :hover {
    background: #1A4480;
  }
 
  :active {
    background: #162E51;
  }

  :disabled {
    background: #C9C9C9
  }

  ${applyStyleModifiers(BUTTON_MODIFERS)}
`
// export const SecondaryButton = styled(Button)`
//   background-color: ${secondaryRed};
//   border-radius: 4px;
 
//   :hover {
//     background: #B51D09;
//   }
 
//   :active {
//     background: #8B1303;
//   }
// `
// export const AccentCoolButton = styled(Button) `
//   background-color: ${accentCoolBlue};
//   border-radius: 4px;
 
//   :hover {
//     background: #28A0CB;
//   }
 
//   :active {
//     background: #07648D;
//   }
// `
// export const BaseButton = styled(Button) `
//   background-color: ${baseColor};
//   border-radius: 4px;
 
//   :hover {
//     background: #565C65;
//   }
 
//   :active {
//     background: #3D4551;
//   }
// `
export const AccentWarmButton = styled(Button) `
  background-color: ${accentWarmOrange};
  border-radius: 4px;
 
  :hover {
    background: #C05600;
  }
 
  :active {
    background: #775540;
  }
`


 export default PrimaryButton;