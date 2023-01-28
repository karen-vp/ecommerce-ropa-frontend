import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'

function Jumbotron() {
    return (
        <div className='jumbotron'>
            
            <div id='text-container'>
                <h1>Encuentra tus atuendos favoritos</h1>
                <p className='text-2'>Entre nuestras colecciones encontraras desde los estilos más sofisticados hasta los más urbanos.</p>

                <button className='btn-main'><Link to='catalog' className='link-item text-1'>Compra ahora</Link></button>

            </div>
            <div>
                <img src='https://images.pexels.com/photos/3598250/pexels-photo-3598250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" id='portadajumbo' />
            </div>



        </div>
    )
}

export default Jumbotron