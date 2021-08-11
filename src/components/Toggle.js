import '../styles/toggle.css'


const Toggle = (props) => {
    return (
        <label className="switch" >
            <input type="checkbox" onClick={() => props.toggleState(props.state)}/>
            <span className="slider round"></span>
        </label>
    )
}

export default Toggle