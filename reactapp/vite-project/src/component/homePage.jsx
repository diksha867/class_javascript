import react from 'react'

function HomePage(){
    const loggedin=true;
    
//if:else
//     if(loggedin){
//         return (
//             <button>LOGOUT</button>
//         )
//     }else{
//         return(
//             <button>login</button>
//         )
//     }

//ternary operaton:
    return(
        loggedin?<button>LOGOUT</button>:<button>LOGIN</button>
    )
}

export default HomePage