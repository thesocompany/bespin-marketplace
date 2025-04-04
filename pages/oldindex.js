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

//
// this file is deprecated
//

export default function Home() {
  return (
    // <div className={styles.container}>
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
          <div className="grid-row margin-bottom-3" style={{width: '243px'}}>
            <div
              className="grid-col-auto"
              className={styles.headerLogo}><a href="/"><img src={BespinLogo} /></a>
            </div>
            <div
              className="grid-col-auto"
              className={styles.oneandhalf}>
              <span className={styles.navTitle}><a href="/">BESPIN{<br />}Platform 327</a></span>
            </div>          </div>  
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
              <a href="/resources" key="three" className="usa-nav__link">
              <span>Resources</span>
            </a>,
              <a href="/apps" key="three" className="usa-nav__link">
              <span>Apps</span>
            </a>,
              <a href="/platform327" key="three" className="usa-nav__link">
              <span>Enroll Now</span>
            </a>,                                      
            ]}
            mobileExpanded={null}
            onToggleMobileNav={null}>
            <Search small onSubmit={null} />
          </PrimaryNav>
        </div>
      </Header>
    </>
      {/* <main className={styles.main}> */}
      <main id="main-content">
        <section className ={styles.heroSection}>
          {/* <img src={heroImage} /> */}
          <h1 className="usa-hero_heading" className={styles.platformHeaderTitle}><span className="usa-hero__heading--alt">Design. Build. Grow.</span></h1>
          <p className={styles.heroIntro}>Get everything you need to build digital<br />Air Force solutions</p>
        </section>
        <section className="grid-container usa-section">
        <h1 className={styles.sectionHeading}>Our Mission</h1>
        <div className="grid-row">
          <h2 className={styles.sectionSubheading}>Platform 327 provides a virtual schoolhouse experience for designers, developers, and cross-functional teams</h2>
          </div>
          <div className="grid-row">
            <div className="tablet:grid-col margin-right-205">
              <div className={styles.homeBoxMissonCollabImg}>
              &nbsp;
              </div>
            </div>
            <div className="tablet:grid-col">
              <div className={styles.homeBoxMissonWelcome}>
                <span className={styles.homeBoxTitle}>
                  Welcome to Platform 327, the Air Force’s<br />
                </span>
                <span className={styles.homeBoxTitle}>first virtual design studio</span>
                <ul>
                  <li>
                    We’ve put together all the resources and tools you’ll need to learn to design, engineer and deliver digital products.
                  </li>
                  <br />
                  <li>
                    Platform 327 is part of the Air Force’s Business and Enterprise Systems Product Innovation (BESPIN), an agile development lab.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-row margin-top-205">
            <div className="tablet:grid-col margin-right-205">
              <div className={styles.homeBoxEcosystemMsg}>
                  <span className={styles.homeBoxEcosystemTitle}>The BESPIN ecosystem fosters</span> 
                  <span className={styles.homeBoxEcosystemTitle}> investigation, risk-taking and</span>
                  <span className={styles.homeBoxEcosystemTitle}> entrepreneurial thinking to turn</span>
                  <span className={styles.homeBoxEcosystemTitle}> innovation into reality.</span>
                  <ul>
                    <li>
                      Human-centered product design means creating tailor-made solutions for the people you are designing for.
                    </li>
                    <br />
                    <li>
                      Whether you’re a beginner who wants to know more or an advanced designer or engineer seeking expertise, 
                      we have resources, toolkits, courses and training events for you.
                    </li>
                  </ul>
              </div>
            </div>
            <div className="tablet:grid-col">
              <div className={styles.homeBoxMissonFaceMonitorImg}>
                &nbsp;
              </div>
            </div>
          </div>
        </section>

        <section className={styles.partnersSection}>
          <div className="grid-container">
            <div className="grid-row">
              <div className="tablet:grid-col margin-right-8">
                <h2 className={styles.h1Title}>Join Platform327</h2>
                  <p className="line-height-mono-4">Learn to implement critical UX practices for design projects and 
                    engineer cutting-edge products that can solve even the most difficult 
                    problems, from human resources management to training, retention and beyond.
                  </p>
                  <br />
                  <Button>Sign Up</Button>
              </div>
              <div className="tablet:grid-col">
                <img src="/joindrawing.png"/>
              </div>
            </div>
          </div>
        </section>
        <section className="grid-container usa-section">
          <h1 className={styles.sectionHeading}>Want to know more? Contact us.</h1>
          <div className="grid-row">
            <div className="tablet:grid-col-4 margin-right-6 margin-top-3">
              <img height="221px" width="337px"src="/contactuswave.svg" />
            </div>
            <div className="tablet:grid-col-6">
            <div className="grid-row">
              <Label htmlFor="testInput">Name</Label>
              <TextInput />
            </div>
            <div className="grid-row">
              <Label htmlFor="testInput">Email</Label>
              <TextInput />
            </div>
            <div className="grid-row" >
              <Label htmlFor="testInput">Message</Label>
              <TextArea className={styles.homeContactTextArea}/>
            </div>
            <div className="grid-row margin-top-2">
            <Button>Submit</Button>
          </div>
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
              <a className="usa-footer__primary-link" href="javascript:void(0);">Home</a>
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
      <div className={styles.footerbar}>&nbsp;</div>
        <div className="usa-footer__secondary-section bg-black">
          <div claclassName="grid-container">
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
                    <a className={styles.socialLinkFacebook} href="https://www.facebook.com/BESPIN.AF/">
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkLinkedin} href="https://www.linkedin.com/company/bespin">
                    </a>
                  </div>
                  <div className="grid-col-auto">
                    <a className={styles.socialLinkYoutube} href="https://www.youtube.com/channel/UCJALQgjhsUDicdJMA4IBjew">
                    </a>
                  </div>
                </div>
                <h3 className="usa-footer__contact-heading text-white">Agency Contact Center</h3>
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info grid-row grid-gap">
                    <div className="grid-col-auto">
                      {/* <a href="tel:1-800-888-1234" className={styles.footerText}>(800) 888-1234</a> */}
                    </div>
                    <div className="grid-col-auto">
                      <a href="mailto:info@agency.gov" className={styles.footerText}>BESPIN.af@gmail.com</a>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
     {/* </div> */}
     </>
  )
}
