export const List = ({name, value, value1, value2, value3}) => {
  return (
    <div className="list">
      <Label name={name} value={value} />
      <select name={value1}>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
      </select>
    </div>
  )
}
