import visa from './icons/visa.png'
import pix from './icons/pix.png'
import master from './icons/master-card.png'
import elo from './icons/elo.png'

import './footer.css'

export default function Footer() {
  return (
    <footer>
        <div className="inscribe flex-c-ev">
            <h3>Se inscreva!</h3>
            <input type="email" name="incrible_email" id="incrible_email" placeholder="Receba notícias e fique por dentro!" />
        </div>
        <div className="aboult-text">
            <h2>Mk Modas.</h2>
            <p>
                A MK Modas, fundada em 2021 em São Paulo, busca oferecer moda de qualidade com ótimo custo-benefício. Em 2022, expandimos para o online, alcançando clientes em todo o Brasil. Focamos em roupas fitness e de academia, sempre atualizados com as últimas tendências e tecnologias. Oferecemos produtos que combinam estilo, conforto e desempenho, ideais para treinos e momentos de relaxamento. Explore nossa coleção e descubra a melhor tecnologia em moda esportiva pelo melhor preço. Junte-se à comunidade MK Modas.
            </p>
        </div>
        <div className="contat">
            <h3>ENTRE EM CONTATO</h3>
            <span> (55) 11 9999-9999</span>
            <span>contato@email.com</span>
            <h4>Horário de funcionamento:</h4>
            <span>Atendimento de Segunda a Quinta-feira, das 7h às 17h - Sexta de 07h às 16h</span>
        </div>
        <div className="req_deliverys flex-c-ev">
            <span>PEDIDOS E ENTREGAS</span>
            <span>Acompanhar Pedido</span>
            <span>Trocas e Devoluções</span>
            <span>Prazos e Entregas</span>
            <span>Histórico de Pedidos</span>
        </div>
        <div className="form-of-pay">
            <h3>FORMAS DE PAGAMENTO</h3>
            <div className="icon-pay-cards">
                <div className="icon-pay">
                    <img src={visa} alt="visa"/>
                </div>
                <div className="icon-pay">
                    <img src={master} alt="master card"/>
                </div>
                <div className="icon-pay">
                    <img src={elo} alt="elo"/>
                </div>
                <div className="icon-pay">
                    <img src={pix} className='p-2' alt="pix"/>
                    <span>Pix</span>
                </div>
            </div>
        </div>
        <span className="copy-mk">©2022-2024 Todos os direitos reservados MK modas</span>
        <nav className="footer-nav">
            <ul>
                <li>Centro de Privacidade</li>
                <li>Política de Privacidade</li>
                <li>Cookies</li>
                <li>Termos e condições</li>
            </ul>
        </nav>
    </footer>
  ) 
}
