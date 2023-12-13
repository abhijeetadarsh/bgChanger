const Button = ({ text, color, colorChanger }) => {
  return (
    <button
      onClick={() => colorChanger(color)}
      className="btn p-2 rounded m-2"
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
