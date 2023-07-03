const Gal = ({ data }) => {

    // const { data } = props 

    return(
        <article className="galleta">
        
           <h1>Galleta de la fortuna</h1>
           <img src="./src/img/fondo1.png" alt="" />
           {/* <img src="fondo2.png" alt="" /> */}
           {/* <img src="https://fastly.picsum.photos/id/1012/200/300.jpg?hmac=KU5TJQJkcv2lK_5lVNCie4evqxUOfFGp0Qsv2gQZo5k" alt="" /> */}
           {/* <p><span> <i className='bx bx-comment-dots bx-fw' ></i></span> Dirección </p> */}
           <div className="info">
            <h3>
                {data.phrase}
            </h3>
            </div>
            <div className="autor">
                <h4>
                {data.author}
            </h4>
            </div>
        
          

          
          
        </article>
    )
}

export default Gal