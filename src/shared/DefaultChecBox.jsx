const DefaultChecBox = ({props}) => {

    const { nameAndId, text, min, max , defaultValue, value} = props

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={nameAndId}
      />
      <label className="form-check-label" htmlFor={nameAndId}>
        {text}
      </label>
    </div>
  );
};
export default DefaultChecBox;
