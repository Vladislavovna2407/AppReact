export const Input = ({state, value, answer}) => {
    return(
        <input type={state} placeholder={value} id={answer}/>  
    )
}