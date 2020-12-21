import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import NavMenuButton from '../src/components/NavMenuButton'
import PrimaryNav from '../src/components/PrimaryNav'
import Menu from '../src/components/Menu'
import Search from '../src/components/Search'
import GovBanner from '../src/components/GovBanner'
import Link from '../src/components/Link'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-elastic-carousel'


export default function AltCarousel() {
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
          {/* <Carousel
            showArrows={false}
            showStatus={false}
            dynamicHeight={false}
            showThumbs={false}
            autoplay
            infiniteLoop={true}
            transitionTime={50}
            interval={3}
            swipeable={true}
            showIndicators={true}
            useKeyboardArrows={true}
          >
                <div>
                  <img src="/home1.png" style={{width: '960px'}}/>
                </div>
                <div>
                  <img src="/home2.png" style={{width: '960px'}}/>
                </div>
                <div>
                  <img src="/home3.png" style={{width: '960px'}} />
                </div>
          </Carousel> */}
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
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkFacebook} href="https://www.facebook.com/BESPIN.AF/">
                    </a>
                  </div>
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkLinkedin} href="https://www.linkedin.com/company/bespin">
                    </a>
                  </div>
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkYoutube} href="https://www.youtube.com/channel/UCJALQgjhsUDicdJMA4IBjew">
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