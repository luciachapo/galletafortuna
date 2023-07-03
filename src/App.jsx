import './App.css'
import Gal from './components/Gal'
import users from './data/users.json';
import {useState} from 'react';


function App() {



    const [ index, setIndex, ] = useState (0)
    

    const changeUser = () => {

        if (index < users.length - 1 ){
        setIndex(index + 1)
    }else{
        setIndex(0)
    }

}

    // document.body.style = `background-color: ${ img[index]}`

    return (
       <>
        <Gal
        data= {users[ index ]}
        />

        <button className="boton" onClick={changeUser}> <i className='bx bx-recycle'></i></button>
        </>
    )
}


export default App;
