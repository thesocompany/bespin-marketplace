import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import { Button } from '@trussworks/react-uswds'
import Header from '../src/components/Header'
import Title from '../src/components/Title'
import NavMenuButton from '../src/components/NavMenuButton'
import PrimaryNav from '../src/components/PrimaryNav'
import NavList from '../src/components/NavList'
import Menu from '../src/components/Menu'
import Search from '../src/components/Search'
import GovBanner from '../src/components/GovBanner'
import PrimaryButton from '../src/components/Buttons'
import TextInput from '../src/components/TextInput'
// import heroImage from '../src/assets/images/hero1.png'
import Button from '../src/components/Button'
import Label from '../src/components/Label'
import TextArea from '../src/components/TextArea'
import Link from '../src/components/Link'
// import FooterNav from '../src/components/FooterNav'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'


export default function Alt() {
    return (
      <>
        <Head>
          <title>BESPIN Marketplace</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.8.0/css/uswds.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/mvi3aaj.css" />
  
        </Head>
      <>
      <GovBanner />
      <div className='usa-overlay' ></div>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
          <div className="grid-row margin-bottom-3">
            <div className="grid-col-auto" className={styles.headerLogo}><a href="/"><img src={BespinLogo} /></a></div>
            <div className="grid-col-auto" className={styles.oneandhalf}><span className={styles.navTitle}><a href="/">BESPIN {<br />}Marketplace</a></span></div>          </div>  
            <NavMenuButton onClick={null} label="Menu" />
          </div>
          <PrimaryNav
            items={[
              <>
            
                <Menu
                  key="one"
                  items={[
                    <a href="#linkOne" key="one">
                      Current link
                    </a>,
                    <a href="#linkTwo" key="two">
                      Simple link Two
                    </a>,
                ]}
                  // isOpen={isOpen[0]}
                  id="testDropDownOne"
                />
              </>,
              <a href="/" key="two" className="usa-nav__link usa-current">
                <span>Home</span>
              </a>,
              <a href="/faq" key="three" className="usa-nav__link">
                <span>FAQ</span>
              </a>,
              <a href="/uxlibrary" key="three" className="usa-nav__link">
              <span>UX Library</span>
            </a>,
              <a href="/apps" key="three" className="usa-nav__link">
              <span>Apps</span>
            </a>,
              <a href="/platform327" key="three" className="usa-nav__link">
              <span>Platform327</span>
            </a>,                                      
            ]}
            mobileExpanded={null}
            onToggleMobileNav={null}>
            <Search small onSubmit={null} />
          </PrimaryNav>
        </div>
      </Header>
      </>

        <main id="main-content">
          <img src="/althome.png" style={{display: "block", margin: "auto"}}/>
        </main>

        <div className="usa-footer__primary-section">
          <nav className="usa-footer__nav" aria-label="Footer navigation">
            <ul className="grid-row grid-gap">
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="/">Home</a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="#">Contact</a>
              </li>
              <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <a className="usa-footer__primary-link" href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerbar}>&nbsp;</div>
        <div className="usa-footer__secondary-section bg-black">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div className="mobile-lg:grid-col-auto">
                  <img className="usa-footer__logo-img" src={BespinLogo} alt="" />
                </div>
                <div className="mobile-lg:grid-col-auto">
                  <span className={styles.footerTitle}>BESPIN</span>
                </div>
              </div>
              <div className="usa-footer__contact-links mobile-lg:grid-col-6">
                <div className="usa-footer__social-links grid-row grid-gap-1">
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkFacebook} href="#">
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkTwitter} href="#">
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkLinkedin} href="#">
                      <span>YouTube</span>
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkRss} href="#">
                      <span>RSS</span>
                    </a>
                  </div>
                </div>
                <h3 className="usa-footer__contact-heading text-white">Agency Contact</h3>
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                      <a href="tel:1-800-888-1234" className={styles.footerText}>(800) 888-1234</a>
                    </div>
                    <div className="grid-col-auto">
                      <a href="mailto:info@agency.gov" className={styles.footerText}>info@platform327.org</a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </>
    )

    }