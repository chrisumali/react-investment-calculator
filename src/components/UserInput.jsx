// eslint-disable-next-line react/prop-types
export default function UserInput({ id, inputLabel, value, handleInputChange }){
    return(<p>
        <label>{inputLabel}</label>
        <input type="number" value={value} onChange={(event) => handleInputChange(id, event.target.value)}/>
    </p>);
}