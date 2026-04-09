import react from 'react'

function HomePage(){
    const loggedin=true;
    if(loggedin){
        return (
            <button>LOGOUT</button>
        )
    }else{
        return(
            <button>login</button>
        )
    }
}
export default HomePage