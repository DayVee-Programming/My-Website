import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container footer__wrap">
        <span className='footer__span'></span>
        <p className="footer__info">©️ 2024 Edusity. All rights reserved.</p>
        <div className="footer__content">
          <span className="footer__content-services">Terms of Services</span>
          <span className="footer__content-policy">Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer