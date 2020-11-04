import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
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
import Checkbox from '../src/components/Checkbox'
// import FooterNav from '../src/components/FooterNav'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import stickynotesImg from '../src/assets/images/stickynotes.png'
import stickynotesLgImg from '../src/assets/images/stickynotes-lg.png'
import markersImg from '../src/assets/images/markers.png'
import usertestingImg from '../src/assets/images/usertesting.png'
import collabImg from '../src/assets/images/computerlap.png'



export default function Platform327() {

  function successModal() {
    hideModal()
    showSuccessModal()
    console.log("this is firing")
  }

  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen className={styles.eventModal}>
      <div class="grid-container" >
        <div class="grid-row margin-top-2">
          <span className={styles.footerTitle}>UX Intro</span>
        </div>
        <div class="grid-row">
            <h2 className="margin-top-0">November 2, 11am</h2>
        </div>
        <div class="grid-row">
          <div class="tablet:grid-col ">
            <img src={stickynotesLgImg} />
            <p>Class Description: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
               sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
               Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
               amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            </p>
          </div>
          <div class="tablet:grid-col margin-left-9">
            <div class="grid-row">
              <Label htmlFor="testInput" className="margin-top-0">Name*</Label>
            </div>
            <div class="grid-row">
              <TextInput />
            </div>
            <div class="grid-row">
              <Label htmlFor="testInput">Phone*</Label>
            </div>
            <div class="grid-row">
              <TextInput />
            </div>            
            <div class="grid-row">
              <Label htmlFor="testInput">Email*</Label>
            </div>
            <div class="grid-row">
              <TextInput />
            </div>         
            <div class="grid-row">
              <Label>Preferred Contact*</Label>            
            </div>
            <div class="grid-row margin-top-3">
              <Checkbox id="checkbox" name="checkbox" label="Email" className="margin-right-2"/>
              <Checkbox id="checkbox2" name="checkbox2" label="Phone" classname="margin-top-2"/>
            </div>
            <div class="grid-row margin-top-3">
              <Button onClick={successModal}>Sign up</Button>
            </div>

          </div>
        </div>
      </div>
                      {/* <Button onClick={hideModal}>Hide modal</Button>  */}
                      <div onClick={hideModal} className={styles.successModalCloseButton}><i className="fas fa-times"></i></div>
    </ReactModal>
  ))

  const [showSuccessModal, hideSuccessModal] = useModal(() => (
    <ReactModal isOpen className={styles.successModal}>
      <div onClick={hideSuccessModal} className={styles.successModalCloseButton}><i className="fas fa-times"></i></div>
            
      <div class="grid-container margin-top-5">
        <div class="grid-row">
          <div className={styles.modalTitle}>Success!</div>
        </div>
        <div class="grid-row">
          <p className={styles.successModalCaption}>Your request has been successfully submitted</p>
        </div>
        <div class="grid-row margin-top-7">
          <Button className={styles.successModalButton} onClick={hideSuccessModal}>Continue</Button>
        </div>
      </div>
    </ReactModal>
  ));
    return (
      <>
        <Head>
          <title>BESPIN Marketplace</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.8.0/css/uswds.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.typekit.net/mvi3aaj.css" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
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
              <a href="/uxlibrary" key="three" className="usa-nav__link">
              <span>UX Library</span>
            </a>,
              <a href="/apps" key="three" className="usa-nav__link">
              <span>Apps</span>
            </a>,
              <a href="#" key="three" className="usa-nav__link usa-current">
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
        <section className ={styles.platform327HeroSection}>
          {/* <img src={heroImage} /> */}
          <h1 className="usa-hero_heading" className={styles.platformHeaderTitle}><span className="usa-hero__heading--alt">Get started.</span></h1>
          <span className={styles.heroIntro}>Enroll in training. Sign up for an event. <br /></span> 
          <span className={styles.heroIntro}>Schedule studio time.</span>
        </section>
          <nav className="usa-breadcrumb"  aria-label="Breadcrumbs">
            <ol className={styles.breadcrumbList} class="usa-breadcrumb__list" >
              <li class="usa-breadcrumb__list-item">
                <a href="/" class="usa-breadcrumb__link">
                  <span>Home</span>
                </a>
              </li>
              <li class="usa-breadcrumb__list-item">
                <a href="#" class="usa-breadcrumb__link">
                  <span>Platform327</span>
                </a>
              </li>
            </ol>
          </nav>          

          <section>
            <div class="grid-container" >
              <div class="grid-row">
                <div className="tablet:grid-col-3 margin-right-6">
                  <h1>Start</h1>
                    <p>
                    Platform 327 can help project teams learn to design and develop digital Air Force 
                    applications to address the most pressing issues. 
                    </p>
                    <p>  
                    We’ve compiled a list of courses 
                    and training events to help build skill sets, identify problems and build lasting solutions. 
                    </p>
                      <img src="/working.png" />
                </div>

                <div className="tablet:grid-col-8">
                <Tabs>
                  <TabList id="platform-tabs">
                    <Tab><span className={styles.tabLabel}>TRAINING</span></Tab>
                    <Tab><span className={styles.tabLabel}>EVENTS</span></Tab>
                  </TabList>
                  <TabPanel>
                    <div class="grid-container">
                      <div class="grid-row">
                        <h1>Sign up here</h1>
                        <p>
                          When you sign up for training, you’ll have the option to take a UX Skills Assessment. 
                          Our skills assessment will help us evaluate your product design skills so we can identify 
                          what you’re good at and areas where you can grow and refine your knowledge.
                        </p>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><Label>Name*</Label></div>
                        <div class="tablet:grid-col"><Label className="margin-bottom-2">Preferred Contact:*</Label></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><TextInput /></div>
                        <div class="tablet:grid-col">
                            <Checkbox id="checkbox" name="checkbox" label="Email" />
                            <Checkbox id="checkbox2" name="checkbox2" label="Phone" classname="margin-top-2"/>
                        </div>
                      </div>
                      <div class="grid-row">
                        <Checkbox id="checkbox" name="checkbox" label="Yes, I would like to take a UX Skills Assessment" />
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><Label>Email*</Label></div>
                        <div class="tablet:grid-col"><Label>Phone*</Label></div>
                      </div>                      
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><TextInput /></div>
                        <div class="tablet:grid-col"><TextInput /></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col"><Label>Message*</Label></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-bottom-205"><TextArea className={styles.signupTextArea}/></div>
                      </div>
                      <div class="grid-row">
                        <Button onClick={successModal}>Submit</Button>
                      </div>                                               
                    </div>

                  </TabPanel>
                  <TabPanel>
                  <div class="grid-container">
                      <div class="grid-row">
                        <h2 className="margin-bottom-neg-1">Register</h2>
                        <p>Select an event on this page and fill in the form with your name, email address and phone number. You can also add a message.</p>
                      </div>
                      <div class="grid-row margin-top-1">
                        <div class="tablet:grid-col" onClick={showModal}>
                          <section className={styles.platform327uXEvent}>
                            <h3 className={styles.eventBoxTitle}>Nov 2 - UX Intro</h3>
                            <p className={styles.eventDescription}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                          </section>
                        </div>
                        <div class="tablet:grid-col">
                        <section className={styles.platform327DesignEvent}>
                            <h3 className={styles.eventBoxTitle}>Nov 3 - Design Strategy</h3>
                            <p className={styles.eventDescription}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                        </section>                          
                        </div>
                      </div>
                      <div class="grid-row margin-top-3">
                        <div class="tablet:grid-col">
                        <section className={styles.platform327UTEvent}>
                            <h3 className={styles.eventBoxTitle}>Nov 5 - User Testing</h3>
                            <p className={styles.eventDescription}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                        </section>   
                        </div>
                        <div class="tablet:grid-col">
                        <section className={styles.platform327AdobeEvent}>
                            <h3 className={styles.eventBoxTitle}>Nov 10 - Event: Adobe XD</h3>
                            <p className={styles.eventDescription}>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
                            </p>
                        </section>   
                          
                        </div>
                      </div>                                          
                  </div>
                  </TabPanel>
                </Tabs>
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

