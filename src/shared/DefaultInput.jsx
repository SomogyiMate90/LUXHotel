const DefaultInput = ({props}) => {

    const { type , nameAndId, text, min, max , defaultValue} = props

  return (
    <div className="mb-3">
      <label htmlFor={nameAndId} className="form-label">
      {text}
      </label>
      <input
        type={type}
        className="form-control"
        name={nameAndId}
        id={nameAndId}
        aria-describedby={text}
        required
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
     
    </div>
  );
};
export default DefaultInput;
