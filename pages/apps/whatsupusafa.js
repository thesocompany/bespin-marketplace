import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import projectStyles from '../../styles/Project.module.css'
import Header from '../../src/components/Header'
import NavMenuButton from '../../src/components/NavMenuButton'
import PrimaryNav from '../../src/components/PrimaryNav'
import Menu from '../../src/components/Menu'
import Search from '../../src/components/Search'
import GovBanner from '../../src/components/GovBanner'
import TextInput from '../../src/components/TextInput'
import Button from '../../src/components/Button'
import Label from '../../src/components/Label'
import TextArea from '../../src/components/TextArea'
import BespinLogo from '../../src/assets/images/BESPIN-Logo.png'

export default function Whatsup() {
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
                  id="testDropDownOne"
                />
              </>,
              <a href="/" key="two" className="usa-nav__link">
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
      <main id="main-content">
        <nav className="usa-breadcrumb"  aria-label="Breadcrumbs">
          <ol className={styles.breadcrumbListFaq} >
            <li className="usa-breadcrumb__list-item">
              <a href="/" className="usa-breadcrumb__link">
                <span>Home</span>
              </a>
            </li>
            <li className="usa-breadcrumb__list-item">
              <a href="/apps" className="usa-breadcrumb__link">
                <span>Apps</span>
              </a>
            </li>
            <li className="usa-breadcrumb__list-item">
              <a href="#" className="usa-breadcrumb__link">
                <span>What's Up USAFA</span>
              </a>
            </li>
          </ol>
        </nav>    
        <section>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-col-4">
                <img className={styles.projectPageImageLeftwing} src="/whatsupleft.png" />
              </div>
              <div className="grid-col-4">
                <div className={styles.thisisatest}>
                  <h1 className={styles.projectCenterTitle}>What’s Up USAFA</h1>
                  <p className={styles.projectSubheadingWMoreText}>Mobile application to create awareness of and publicize events for the United States Air Force Academy
                  </p>
                  <div className={styles.appPageDownloadButton}><Button>Download</Button></div>

                  <div className="grid-row">
                    <div className="tablet:grid-col text-center"><span className={styles.projectCenterIconText}>Design</span><br /> <img src="/design-icon.svg" /></div>
                    <div className="tablet:grid-col text-center"><span className={styles.projectCenterIconText}>Learning</span><br /> <img src="/design-icon.svg" /></div>
                  </div>
                  <br />
                </div>
                {/* <div className="grid-row">
                  <div className={styles.piechart} title="This app does this"></div>
                </div> */}

              </div>
              <div className="grid-col-4">
                <img className={styles.projectPageImage} src="/whatsupright.png" />
              </div>                        
            </div>
            <div className="grid-row">
              <div className="tablet:grid-col">
                <h1 className={styles.uxLibrarySectionHeading}>About</h1>
              </div>
            </div>
            <div className="grid-row margin-top-3">
              <div className="grid-col-7">
                <p className={styles.projectPageBodyTextAdjusted}>
                  What’s Up USAFA is a crowdsourced mobile calendar application for the United States 
                  Air Force Academy to create awareness of and publicize events. Instead of relying on 
                  informal communications channels, the app is meant to increase cadet involvement and 
                  streamlining the flow of information. Government and tech professionals from BESPIN 
                  and vendor partner—Big Nerd Ranch are working with stakeholders from the United States 
                  Air Force Academy (USAFA) and from the Air Force Installation and Mission Support 
                  Center (AFIMSC) Innovation Office to provide the vision and funding to help the 
                  delivery team meet its goal. Together, all of the members are focused on building an 
                  application that will help the Air Force Academy community better connect through 
                  creating and sharing information about what events are going on. 
                </p>
              </div>
              <div className="grid-col-4 margin-left-1">
                <img className={styles.projectPageBodyImg}  src="/whatsupapphand.png" />
              </div>
            </div>
            <section>
            <div className="grid-row margin-y-5">
                <div className="tablet:grid-col">
                  <h1 className={styles.sectionHeading}>Contact The Team</h1>
                  <div className="grid-row" id={styles.projectPageContact}>
                      <Label className="margin-right-4 margin-top-0" htmlFor="testInput">Name</Label>
                      <TextInput className={styles.contactUsTextInput} />
                  </div>

                  <div className="grid-row" id={styles.projectPageContact}>
                    <Label className="margin-right-4" htmlFor="testInput">Email</Label>           
                    <TextInput className={styles.contactUsTextInput} />
                  </div>
                   <div className="grid-row" id={styles.projectPageContact}>
                     <Label htmlFor="testInput">Message</Label>
                     <TextArea className={styles.contactUsTextInput} style={{height: "70px"}} />
                  </div>      
                  <br />
                <Button className={styles.buttonCenter}>Submit</Button>          
                </div>
                <div className="tablet:grid-col">
                  <div className={styles.homeBoxMissonWelcome}>
                    <span className={styles.homeBoxTitle}>
                      Examples of Good UX Practices<br />
                    </span>
                    <ul style={{maxWidth: "392px"}}>
                      <li className="margin-bottom-2 font-sans-2xs" style={{maxWidth: "392px"}}>
                        What’s Up USAFA is being developed for cadets at the United States Air Force Academy. The application could eventually be expanded to include other locations.
                      </li>
                      <li className="margin-bottom-2 font-sans-2xs" style={{maxWidth: "392px"}}>
                        Conducted remote working sessions to audit the app's data collection and delivery recording and verification.
                      </li>
                      <li className="font-sans-2xs" style={{maxWidth: "392px"}}>
                        Develop user feedback function in app's onboarding to inform design team's product roadmap.
                      </li>                      
                    </ul>
                  </div>
                </div>
            </div>
            </section>
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
     </>
  )
}
