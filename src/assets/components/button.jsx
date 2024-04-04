function Button({ text, isClickBtn, handleClick }) {
  return (
    <button
      className={isClickBtn ? "btn" : "btn reset-btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
