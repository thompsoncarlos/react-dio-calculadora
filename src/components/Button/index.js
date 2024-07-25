import { ButtonContainer } from "./styles";

const Button = ({label, onClick}) => {
  return (
    <div className="Button">
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    </div>
  )
}

export default Button;