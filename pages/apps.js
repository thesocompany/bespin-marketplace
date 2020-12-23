import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import NavMenuButton from '../src/components/NavMenuButton'
import PrimaryNav from '../src/components/PrimaryNav'
import Menu from '../src/components/Menu'
import Search from '../src/components/Search'
import GovBanner from '../src/components/GovBanner'
import MediumAccordion from '../src/components/MediumAccordion'
import Button from '../src/components/Button'

import BespinLogo from '../src/assets/images/BESPIN-Logo.png'

export default function Apps() {

    const appsAccordionItems = [
    {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/igatm-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>iGATM</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionLargeKeyDescription}>Social Network, Information<br /> Management, Analytics,</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>Software tool implements<br />flexible and adaptable<br />communication to improve<br />resource access for Air Force.
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>US Air Force Teams - aircraft<br />program offices, avionics<br />engineers and budget planners
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Learn more</p>
              <Button className="margin-top-105">See Case Study</Button>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'one',
    },
    {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/wingfeedback-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>WingFeedback</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionMediumKeyDescription}>User Feedback, Mapping,<br/> Analytics</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>Mobile tool for people who visit,<br />live, and work at Air Force<br />installations to locate and provide<br />feedback for on-base services.
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>Joint Base San Antonio
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Learn more</p>
              <Button className="margin-top-105">See Case Study</Button>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'two',
    },
    {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/digitalu-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>Digital U</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionMediumKeyDescription}>Integrated Learning</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>Online learning platform<br />catering to warfighters by<br />offering courses to improve their<br />technical skills.
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>(USAF) US Air Force Teams
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Learn more</p>
              <Button className="margin-top-105">See Case Study</Button>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'three',
    },
    {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/whatsapp-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>What's Up USAFA App</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionLargeKeyDescription}>Social Network, Information<br /> Management, Analytics,</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>Mobile application to create<br />awareness of and publicize<br />events for the United States Air<br />Force Academy.
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>Joint Base San Antonio
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Learn more</p>
              <Button className="margin-top-105">See Case Study</Button>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'four',
      },
        {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/corillean-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>Corellian Corp</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionMediumKeyDescription}>Data Collection, Information<br /> Management, Analytics</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>TBD
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>US Air Force project Teams
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Have questions?</p>
              <Button className="margin-top-105">Contact the Team</Button>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'five',
      },
      {
      icon: (<img className="padding-top-1 padding-left-3" src="/apps/pointsync-icon.png" />
      ),
      title: (
        <>
          <p className={styles.accordionMediumKeyTitle}>PointSync</p>
        </>
        ),
      description: (
        <>
          <p className={styles.accordionMediumKeyDescription}>Data Collection, Field Operations<br /> Wearables</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col padding-left-7">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>A multi-device app that<br />streamlines cargo location data<br />and delivery times for AFB<br />Buckley teams.
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Audience</p>
              <p className={styles.accordionMediumContentDescription}>(USAF) US Air Force Logistic Teams
              </p>
            </div>
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>Criteria for Success</p>
              <p className={styles.accordionMediumContentDescription}>Learn more on how they worked<b />with Platform 327 for a better<br />user experience
              </p>
              <Link href="/apps/project">
                <a><Button className="margin-top-105">See Case Study</Button></a>
              </Link>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'six',
    }
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
              <a href="#" key="three" className="usa-nav__link usa-current">
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
        <section className ={styles.allAppsHero}>
          <h1 className="usa-hero_heading" className={styles.platformHeaderTitle}><span className="usa-hero__heading--alt">Creating Excellence in UX</span></h1>
          <p className={styles.heroIntro}>Discover our featured applications<br />and their case studies in UX practices.</p>
        </section>
        <nav className="usa-breadcrumb"  aria-label="Breadcrumbs">
          <ol className={styles.breadcrumbListFaq} class="usa-breadcrumb__list" >
            <li class="usa-breadcrumb__list-item">
              <a href="/" class="usa-breadcrumb__link">
                <span>Home</span>
              </a>
            </li>
            <li class="usa-breadcrumb__list-item">
              <a href="#" class="usa-breadcrumb__link">
                <span>Apps</span>
              </a>
            </li>
          </ol>
        </nav>    
        <section className="grid-container usa-section">
          <h1 className={styles.uxLibrarySectionHeading}>Featured Apps</h1>
          <h2 className={styles.uxLibrarySectionSubheading}>This growing collection of apps utilizes Platform 327's lab to build and <br />improve upon their main capabilities</h2>
          <div className="grid-row margin-top-7">
            <MediumAccordion bordered={false} items={appsAccordionItems} />
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
        <div class="usa-footer__secondary-section bg-black">
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
                <h3 class="usa-footer__contact-heading text-white">Agency Contact Center</h3>
                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info grid-row grid-gap">
                    <div class="grid-col-auto">
                      {/* <a href="tel:1-800-888-1234" className={styles.footerText}>(800) 888-1234</a> */}
                    </div>
                    <div class="grid-col-auto">
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
