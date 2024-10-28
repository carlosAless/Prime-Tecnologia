import './Contact.css'


const Contact = () =>{
    return(
        <div className='container-contact'>
         <form action="#" className="contact">

            <div className="input-group">
                <label htmlFor='nome'>Nome</label>
                <input type="text" id="nome" name='nome' placeholder='Digite seu nome' />
            </div>

            <div className="input-group">
                <label htmlFor='email' >Email</label>
                <input type="email" id='email' name='email' placeholder='Digite seu nome' />
            </div>

            <div className="input-group">
                <label htmlFor='mensagem'>Mensagem</label>
                <input type="text" id='mensagem' name='mensagem' placeholder='Digite sua mensagem' />
            </div>
         </form>

         <div className="mapa">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5304.601907995231!2d-51.729100923518466!3d-17.89620267821518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93626c9e80a0c96b%3A0x53a44c516bb07a92!2sPrime%20Tecnologia!5e1!3m2!1spt-BR!2sbr!4v1729974360205!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
        </div>
    )
}

export default Contact