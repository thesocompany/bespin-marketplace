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
import PrimaryButton from '../src/components/Buttons'
import TextInput from '../src/components/TextInput'
// import heroImage from '../src/assets/images/hero1.png'
import Button from '../src/components/Button'
import Label from '../src/components/Label'
import TextArea from '../src/components/TextArea'
// import Link from '../src/components/Link'
// import FooterNav from '../src/components/FooterNav'
import LargeAccordion from '../src/components/LargeAccordion'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'


export default function Resources() {
    const resourceAccordionItems = [
    {
      title: (
          <>
            <h2 className="margin-top-0">Learning</h2>
            <p>Apply UX principles to your project</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/learning-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="/resources/learning-desk.png" />
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">col one</div>
            <div class="tablet:grid-col">col two</div>
            <div class="tablet:grid-col">col three</div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'one',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">Learning</h2>
            <p>Apply UX principles to your project</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/learning-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="/resources/learning-desk.png" />
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">col one</div>
            <div class="tablet:grid-col">col two</div>
            <div class="tablet:grid-col">col three</div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'two',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">Learning</h2>
            <p>Apply UX principles to your project</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/learning-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="/resources/learning-desk.png" />
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">col one</div>
            <div class="tablet:grid-col">col two</div>
            <div class="tablet:grid-col">col three</div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'three',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">Learning</h2>
            <p>Apply UX principles to your project</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/learning-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="/resources/learning-desk.png" />
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">col one</div>
            <div class="tablet:grid-col">col two</div>
            <div class="tablet:grid-col">col three</div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'four',
    }
  ]

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
              <a href="/faq" key="three" className="usa-nav__link">
                <span>FAQ</span>
              </a>,
              <a href="#" key="three" className="usa-nav__link usa-current">
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
      {/* <main className={styles.main}> */}
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
                <span>UX Library & Resources</span>
              </a>
            </li>
          </ol>
        </nav>    

        {/* <section className="grid-container usa-section margin-bottom-2 padding-bottom-4">
          <h1 className={styles.uxLibrarySectionHeading}>UX Library & Resources</h1>
          <h2 className={styles.uxLibrarySectionSubheading}>Explore these helpful resources curated for designers, developers and the curious.</h2>
          <div className="grid-row margin-top-7">
            <div className="tablet:grid-col">
              <Link href="https://mmanalo-soco.medium.com/ux-learning-resources-687b754aded0">
              <a target="_blank">
              <div id={styles.uxLearning}>
                <div className={styles.uxLibraryBoxText}>
                  <h2 className={styles.uxLibraryTitle}>Learning</h2>
                  <p className={styles.uxLibDisciplineDescription}>Apply UX principles to <br />your project</p> 
                </div>
              </div>
              </a>
              </Link>
            </div>
            <div className="tablet:grid-col">
              <Link href="https://mmanalo-soco.medium.com/design-resources-and-checklist-cf3f7eef0609">
              <a target="_blank">
              <div id={styles.uxDesign}>
                <div className={styles.uxLibraryBoxText}>
                  <h2 className={styles.uxLibraryTitle}>Design</h2>
                  <p className={styles.uxLibDisciplineDescription}>Learn interactive and <br /> visual design principles</p> 
                </div>
              </div>
              </a>
              </Link>
            </div>
          </div>
          <div className="grid-row margin-top-7">
            <div className="tablet:grid-col">
              <div id={styles.uxDevelopment}>
                <div className={styles.uxLibraryBoxText}>
                  <h2 className={styles.uxLibraryTitle}>Development</h2>
                  <p className={styles.uxLibDisciplineDescription}>Apply UX principles to <br />your project</p> 
                </div>
              </div>
            </div>
            <div className="tablet:grid-col">
            <Link href="http://bespin-design-system.s3-website.us-east-2.amazonaws.com/?path=/story/usaf-design-system-alert--success-alert">
              <a target="_blank">
              <div id={styles.uxUIcomponents}>
                <div className={styles.uxLibraryBoxText}>
                  <h2 className={styles.uxLibraryTitle}>UI Components</h2>
                  <p className={styles.uxLibDisciplineDescription}>Get UI kits, UX <br />wireframes and more </p> 
                </div>
              </div>
              </a>
              </Link>
            </div>
          </div>
        </section> */}
        <section className="grid-container usa-section margin-bottom-2 padding-bottom-4">
          <h1 className={styles.uxLibrarySectionHeading}>Resources</h1>
          <h2 className={styles.uxLibrarySectionSubheading}>Explore these helpful resources curated for designers, developers and the curious.</h2>

          <div className="grid-row margin-top-7">
            <LargeAccordion bordered={false} items={resourceAccordionItems} />

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
                    <a className={styles.socialLinkFacebook} href="javascript:void(0);">
                      <span>Facebook</span>
                    </a>
                  </div>
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkTwitter} href="javascript:void(0);">
                      <span>Twitter</span>
                    </a>
                  </div>
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkLinkedin} href="javascript:void(0);">
                      <span>YouTube</span>
                    </a>
                  </div>
                  <div class="grid-col-auto">
                    <a className={styles.socialLinkRss} href="javascript:void(0);">
                      <span>RSS</span>
                    </a>
                  </div>
                </div>
                <h3 class="usa-footer__contact-heading text-white">Agency Contact</h3>
                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info grid-row grid-gap">
                    <div class="grid-col-auto">
                      <a href="tel:1-800-888-1234" className={styles.footerText}>(800) 888-1234</a>
                    </div>
                    <div class="grid-col-auto">
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
