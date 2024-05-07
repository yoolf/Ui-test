function InputField({ type, name, value, onChange, placeholder, error }) {
  return (
    <div className="input-field">
      <input
        type={text}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} // 입력상자에 희미하게 표시
        className={error ? 'error' : ''}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default InputField;
