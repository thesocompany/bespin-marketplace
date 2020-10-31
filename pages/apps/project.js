import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import projectStyles from '../../styles/Project.module.css'

import Header from '../../src/components/Header'
import Title from '../../src/components/Title'
import NavMenuButton from '../../src/components/NavMenuButton'
import PrimaryNav from '../../src/components/PrimaryNav'
import NavList from '../../src/components/NavList'
import Menu from '../../src/components/Menu'
import Search from '../../src/components/Search'
import GovBanner from '../../src/components/GovBanner'
import PrimaryButton from '../../src/components/Buttons'
import TextInput from '../../src/components/TextInput'
// import heroImage from '../src/assets/images/hero1.png'
import Button from '../../src/components/Button'
import Label from '../../src/components/Label'
import TextArea from '../../src/components/TextArea'
import Link from '../../src/components/Link'
// import FooterNav from '../src/components/FooterNav'
import BespinLogo from '../../src/assets/images/BESPIN-Logo.png'

export default function Project() {
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
              <a href="/faq" key="three" className="usa-nav__link">
                <span>FAQ</span>
              </a>,
              <a href="#" key="three" className="usa-nav__link">
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
              <a href="/apps" class="usa-breadcrumb__link">
                <span>Apps</span>
              </a>
            </li>
            <li class="usa-breadcrumb__list-item">
              <a href="#" class="usa-breadcrumb__link">
                <span>Project Name</span>
              </a>
            </li>
          </ol>
        </nav>    
        <section>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-col-4">
                <img className={styles.projectPageImage} src="/projectleft.png" />
              </div>
              <div className="grid-col-4">
                <div className={styles.thisisatest}>
                  <h1 className={styles.projectCenterTitle}>PointSync</h1>
                  <p className={styles.projectSubheading}>PointSync is a multi-device app that streamlines cargo location data and delivery times.
                  </p>
                  <div className={styles.appPageDownloadButton}><Button>Download</Button></div>

                  <div className="grid-row">
                    <div className="tablet:grid-col text-center"><span className={styles.projectCenterIconText}>Design</span><br /> <img src="/design-icon.svg" /></div>
                    <div className="tablet:grid-col text-center"><span className={styles.projectCenterIconText}>Learning</span><br /> <img src="/design-icon.svg" /></div>
                  </div>
                  <br />
                </div>
                <div className="grid-row">
                  <div className={styles.piechart} title="This app does this"></div>
                </div>

              </div>
              <div className="grid-col-4">
                <img className={styles.projectPageImage} src="/projectright.png" />
              </div>                        
            </div>
            <div className="grid-row">
              <div className="tablet:grid-col">
                <h1 className={styles.uxLibrarySectionHeading}>About</h1>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                     At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                     no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                     consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et 
                      ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                      sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                      elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                       sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                       kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
                       sit amet, consetetur sadipscing.
                  </p>
                  <img className={styles.paragraphImg} src="https://picsum.photos/id/279/369/435" />
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
                  <img className={styles.paragraphImg2} src="https://picsum.photos/id/279/369/435" />
                  <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                  </p>
              </div>
            </div>

            <div className="grid-row" className={styles.projectLowerDownloadBtn}>
              <Button>Download</Button>
            </div>
          </div>
        </section>
        <section>
          <div className="grid-container">
          <div className="grid-row margin-bottom-4">
            <div className="tablet:grid-col">
              <h1 className={styles.uxLibrarySectionHeading}>Project Name</h1>
            </div>

          </div>

            <div className="grid-row">
              <div className="grid-col-4">
                <div className={styles.wrapper}>
                  <div className={styles.user}></div>
                </div>
                <h2 className={styles.uxLibraryTitle}>First Last</h2>
                <p className={styles.uxLibDisciplineDescription}>Rank // Job on Project</p>
              </div>
              <div className="grid-col-4">
                <div className={styles.wrapper}>
                  <div className={styles.user}></div>
                </div>
                <h2 className={styles.uxLibraryTitle}>First Last</h2>
                <p className={styles.uxLibDisciplineDescription}>Rank // Job on Project</p>                  
              </div>
              <div className="grid-col-4">
                <div className={styles.wrapper}>
                  <div className={styles.user}></div>
                </div>
                <h2 className={styles.uxLibraryTitle}>First Last</h2>
                <p className={styles.uxLibDisciplineDescription}>Rank // Job on Project</p>  
              </div>
                                      
            </div>
          </div>
        </section>
        <section>
        <div className="grid-container">
          <div className="grid-row margin-top-9">
            <div className="tablet:grid-col">
              <img className={styles.mapImage} src="https://picsum.photos/id/10/390/286?blur=2" />
            </div>
            <div className="tablet:grid-col">
            Developed at <br /> <span className="text-bold font-body-lg">XXXX Base</span> <br />123 Main Street <br />Montgomery, AL 32018
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button>About the Base</Button>
            </div>
          </div>
        </div>
        </section>

        <section>
            <br />
            <br />
            <br />

            <h1 className={styles.sectionHeading}>Contact The Team</h1>
            <div class="grid-container">
              <div class="grid-row">
                <Label htmlFor="testInput">Name</Label>
              </div>
              <div class="grid-row">
                <TextInput className={styles.contactUsTextInput} />
              </div>
              <div class="grid-row">
                <Label htmlFor="testInput">Email</Label>
              </div>
              <div class="grid-row">              
                <TextInput className={styles.contactUsTextInput} />
              </div>
               <div class="grid-row">
                 <Label htmlFor="testInput">Message</Label>
               </div>
               <div class="grid-row">
                 <TextArea className={styles.contactUsTextInput} />
               </div>                
            </div>
            <br />
            <Button className={styles.buttonCenter}>Submit</Button>
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
