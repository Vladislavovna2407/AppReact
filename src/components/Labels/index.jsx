export const Label = ({name, value}) => {
    return (
        <label htmlFor={name} >
            {value}
        </label>
     
    )
}