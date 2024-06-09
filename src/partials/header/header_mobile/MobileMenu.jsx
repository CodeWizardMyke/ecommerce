import userimage from '../icons/default.png'
import '../css/mobilemenu.css'

function MobileMenu( {user} ) {
 
  return (
    <div className='containerMenuMobal'>
    { user && (
        <div className='menuUserOn'>
            <div className='userDetails'>
                <div className="userImage">
                    <img src={userimage} alt="user-img" />
                </div>  
                <div>
                    <span className='userName'>{ user.name.split(' ')[0] + ' ' + user.name.split(' ')[user.name.split(' ').length - 1] }</span>
                </div>
                <div className='btn_exit_content'>
                    <button className='btn'>Desconectar</button>
                </div>
            </div>
            <div className="userAcess">
                <ul>
                    <li><button className='btn btn-ligth'>Meu Perfil</button></li>
                    <li><button className='btn btn-ligth'>Endereços</button></li>
                    <li><button className='btn btn-ligth'>Pedidos</button></li>
                </ul>
            </div>
        </div>
    )}

    { !user && (
        <div className="menuUserOff">
            <div>
                <span>Faça login</span>
                <button className='btn-ligth btn'>Entrar</button>
            </div>
            <div>
                <span>Cadastre-se</span>
                <button className='btn-ligth btn'>Inscrever</button>
            </div>
        </div>
    )}

    <div className='mobalMenuNav'>
        <h6>Categorias</h6>
        <nav>
            <ul>
                <li><button className="btn-ligth btn">Mais Vendidos</button></li>
                <li><button className="btn-ligth btn">Melhor avaliados</button></li>
                <li><button className="btn-ligth btn">Novidades</button></li>
                <li><button className="btn-ligth btn">Tendências</button></li>
                <li><button className="btn-ligth btn">Cropet</button></li>
                <li><button className="btn-ligth btn">Leging</button></li>
                <li><button className="btn-ligth btn">Regatas</button></li>
                <li><button className="btn-ligth btn">Shorts</button></li>
                <li><button className="btn-ligth btn">Camisetas</button></li>
                <li><button className="btn-ligth btn">Langerie</button></li>
            </ul>
        </nav>
    </div>
</div>
  )
}

export default MobileMenu

