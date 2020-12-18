import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Title from '../src/components/Title'
import NavMenuButton from '../src/components/NavMenuButton'
import PrimaryNav from '../src/components/PrimaryNav'
import NavList from '../src/components/NavList'
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
            <div class="tablet:grid-col">
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
            <div class="tablet:grid-col">
              <p className={styles.accordionLargeContentTitle}>About the App</p>
              <p className={styles.accordionMediumContentDescription}>Mobile ool for people who visit,<br />live, and work at Air Force<br />installations to locate and provide<br />feedback for on-base services.
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
          <p className={styles.accordionLargeKeyDescription}>Integrated Learning</p>
        </>
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-uicomp-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UI Components</p>
              <p className="font-body-3xs margin-top-05">Get started with your project with<br /> this UI component kit (Figma File)
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-uicomp-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Core Design System</p>
              <p className="font-body-3xs margin-top-05">This Storybook hub breaks down<br /> the all CSS and HTML code
              </p>
            </div>
            <div class="tablet:grid-col">
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
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Dev Checklist for UX</p>
              <p className="font-body-3xs margin-top-05">For Developers, how to coordinate <br />with UX designers
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UX Audit Tools</p>
              <p className="font-body-3xs margin-top-05">Guardrail resources for <br />developers leading UX for teams
              </p>
            </div>
            <div class="tablet:grid-col"></div>
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
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Dev Checklist for UX</p>
              <p className="font-body-3xs margin-top-05">For Developers, how to coordinate <br />with UX designers
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UX Audit Tools</p>
              <p className="font-body-3xs margin-top-05">Guardrail resources for <br />developers leading UX for teams
              </p>
            </div>
            <div class="tablet:grid-col"></div>
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
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Dev Checklist for UX</p>
              <p className="font-body-3xs margin-top-05">For Developers, how to coordinate <br />with UX designers
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-development-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UX Audit Tools</p>
              <p className="font-body-3xs margin-top-05">Guardrail resources for <br />developers leading UX for teams
              </p>
            </div>
            <div class="tablet:grid-col"></div>
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
                  // isOpen={isOpen[0]}
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
      {/* <main className={styles.main}> */}
      <main id="main-content">
        <section className ={styles.allAppsHero}>
          {/* <img src={heroImage} /> */}
          <h1 className="usa-hero_heading" className={styles.platformHeaderTitle}><span className="usa-hero__heading--alt">Creating Excellence in UX</span></h1>
          <p className={styles.heroIntro}>Discover our featured applications and <br />in their case studies in UX practices.</p>
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

            {/* <div className="tablet:grid-col margin-top-2">
            <Link href="/apps/project">
              <a>
              <img className={styles.appsIcon} src="/pointsync.png" />
              <h2 className={styles.allAppsTitle}>PointSync</h2>
              <div><p className={styles.appsDescription}>Data Collection, Field<br />Operations Wearables</p></div>
              </a>
              </Link>
            </div>
            <div className="tablet:grid-col">
              <img className={styles.appsIcon} src="/BESPIN-Logo.png" />
              <h2 className={styles.allAppsTitle}>ARMS</h2>
              <p className={styles.appsDescription}>Data Collection, Information <br />management, Analytics,</p>
            </div>
            <div className="tablet:grid-col">
              <img className={styles.appsIcon} src="/whatsapp.png" />
              <h2 className={styles.allAppsTitle2}>What’s Up USAFA App</h2>
              <p className={styles.appsDescription}>Social Network, Information <br />Management, Analytics,<br /></p>
            </div>
          </div>
          <div className="grid-row margin-top-7">
            <div className="tablet:grid-col">
              <img className={styles.appsIcon} src="/Logo_CorellianCorp.png" />
              <h2 className={styles.allAppsTitle}>Corellian Corp</h2>
              <p className={styles.appsDescription}>Data Collection, Information <br />management, Analytics,</p>
            </div>
            <div className="tablet:grid-col">
              <img className={styles.appsIcon} src="/BESPIN-Logo.png" />
              <h2 className={styles.allAppsTitle}>AF GearFit</h2>
              <p className={styles.appsDescription}>Agile Combat, Data Collection</p>
            </div>
              <div className="tablet:grid-col">
                <img className={styles.appsIcon} src="/drudonna.png" />
                <h2 className={styles.allAppsTitle}>DruDonna</h2>
                <p className={styles.appsDescription}>Integrated Learning</p>
              </div>                                     */}
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
