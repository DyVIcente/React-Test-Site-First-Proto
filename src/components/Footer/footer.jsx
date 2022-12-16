import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

function Footer() {
  return (
    <section className="footer">
      <div className="foot social">
        <a href="/fb" target="_blank" className="iconSocial">
          <FacebookIcon />
        </a>
        <a href="/insta" target="_blank" className="iconSocial">
          <InstagramIcon />
        </a>
        <a href="/twitter" target="_blank" className="iconSocial">
          <TwitterIcon />
        </a>
        <a href="/youtube" target="_blank" className="iconSocial">
          <YouTubeIcon />
        </a>
      </div>
      <p className="foot logof">Mini logo</p>
      <p className="foot textf">© 2022 Div Vice. All rights reserved</p>
    </section>
  )
}

export default Footer
