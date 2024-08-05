type ButtonProps = {
    text: string;
    color: string;
    textColor: string;
    link: string
  };

const Button: React.FC<ButtonProps> = ({text, color, textColor}) => {
    const buttonStyle = {
        color: textColor,
        backgroundColor: color
    }

  return (
    <button style={buttonStyle} className="btn">{text}</button>
  )
}


export default Button