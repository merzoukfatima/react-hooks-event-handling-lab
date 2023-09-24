// Code Keypad Component Here

function Keypad (){
    return (
        <div>
        <form>
        <input type="password" 
         onChange={()=>console.log("Entering password...")} />
        </form>
        </div>
    )
}

export default Keypad;