function Input({ text, value, onChange }) {
  return (
    <label>
      {text}
      <input value={value} onChange={onChange} />
    </label>
    );
}

export default Input;