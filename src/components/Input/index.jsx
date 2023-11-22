export const Input = ({state, value1, answer, value, onChange}) => {
  return <input type={state} placeholder={value1} id={answer} value={value} onChange={onChange} />
}
