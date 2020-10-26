import Head from 'next/head'
import styles from '../styles/Home.module.css'
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

import Accordion from '../src/components/Accordion'

export default function FAQ() {

  const testItems = [
    {
      title: 'Lorem Ipsum',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna
        </p>
      ),
      expanded: false,
      id: '1',
    },
    {
      title: 'Lorem Ipsum',
      content: (
        <>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna
        </p>
        </>
      ),
      expanded: true,
      id: '2',
    },
    {
      title: 'Lorem Ipsum',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna
        </p>
      ),
      expanded: false,
      id: '3',
    },
    {
      title: 'Lorem Ipsum',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna
        </p>
      ),
      expanded: false,
      id: '4',
    },
    {
      title: 'Lorem Ipsum',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna
        </p>
      ),
      expanded: false,
      id: '5',
    },
  ]

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
              <a href="/" key="two" className="usa-nav__link">
                <span>Home</span>
              </a>,
              <a href="#" key="three" className="usa-nav__link">
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
        <nav className="usa-breadcrumb"  aria-label="Breadcrumbs">
          <ol className={styles.breadcrumbListFaq} class="usa-breadcrumb__list" >
            <li class="usa-breadcrumb__list-item">
              <a href="/" class="usa-breadcrumb__link">
                <span>Home</span>
              </a>
            </li>
            <li class="usa-breadcrumb__list-item">
              <a href="#" class="usa-breadcrumb__link">
                <span>FAQ</span>
              </a>
            </li>
          </ol>
        </nav>    
        <section>
          <div class="grid-container">
              <h1 className="text-center margin-top-0">FAQ</h1>
            <div class="grid-row margin-x-9 margin-bottom-6">              
              <Accordion bordered={false} items={testItems} />
            </div>
          </div>
        </section>    

        <div className="grid-container usa-footer__return-to-top">
         <a href="#">Return to top</a>
        </div>         

      </main>



      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/">Home</a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="/contact">Contact</a>
            </li>
            <li className="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
              <a className="usa-footer__primary-link" href="javascript:void(0);">Privacy Policy</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="usa-footer__secondary-section">
        <div class="grid-container">
          <div class="grid-row grid-gap">
            <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
              <div class="mobile-lg:grid-col-auto">
                <img className="usa-footer__logo-img" src={BespinLogo} alt="" />
              </div>
              <div class="mobile-lg:grid-col-auto">
                <span className={styles.footerTitle}>BESPIN</span>
              </div>
            </div>
            <div class="usa-footer__contact-links mobile-lg:grid-col-6">
              <div class="usa-footer__social-links grid-row grid-gap-1">
                <div class="grid-col-auto">
                  <a class="usa-social-link usa-social-link--facebook" href="javascript:void(0);">
                    <span>Facebook</span>
                  </a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link usa-social-link--twitter" href="javascript:void(0);">
                    <span>Twitter</span>
                  </a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link usa-social-link--youtube" href="javascript:void(0);">
                    <span>YouTube</span>
                  </a>
                </div>
                <div class="grid-col-auto">
                  <a class="usa-social-link usa-social-link--rss" href="javascript:void(0);">
                    <span>RSS</span>
                  </a>
                </div>
              </div>
              <h3 class="usa-footer__contact-heading">Agency Contact</h3>
              <address class="usa-footer__address">
                <div class="usa-footer__contact-info grid-row grid-gap">
                  <div class="grid-col-auto">
                    <a href="tel:1-800-555-5555">(800) CALL-GOVT</a>
                  </div>
                  <div class="grid-col-auto">
                    <a href="mailto:info@agency.gov">info@agency.gov</a>
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