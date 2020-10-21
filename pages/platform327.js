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
import Checkbox from '../src/components/Checkbox'
// import FooterNav from '../src/components/FooterNav'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import stickynotesImg from '../src/assets/images/stickynotes.png'
import markersImg from '../src/assets/images/markers.png'
import usertestingImg from '../src/assets/images/usertesting.png'
import collabImg from '../src/assets/images/computerlap.png'



export default function Platform327() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
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
          <div className="grid-row">
            <div className="grid-col-auto" className={styles.headerLogo}><img src={BespinLogo} /></div>
            <div className="grid-col-auto" className={styles.oneandhalf}><span className={styles.navTitle}>BESPIN {<br />}Marketplace</span></div>
          </div>  
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
                <a href="#three" key="three" className="usa-nav__link">
                  <span>FAQ</span>
                </a>,
                <a href="#three" key="three" className="usa-nav__link">
                <span>UX Library</span>
              </a>,
                <a href="#three" key="three" className="usa-nav__link">
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
            <div class="grid-container" className={styles.tabsComponent}>
              <div class="grid-row">
                <div className="tablet:grid-col-3 margin-right-6">
                  <h1>Start</h1>
                    <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor 
                        sit amet.
                    </p>
                    <p>    
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                        Lorem ipsum dolor sit amet, consetetur sadipscing.
                    </p>
                </div>
                <div className="tablet:grid-col-8">
                <Tabs className={styles.tabsComponent}>
                  <TabList>
                    <Tab>TRAINING</Tab>
                    <Tab>EVENTS</Tab>
                  </TabList>
                  <TabPanel>
                    <div class="grid-container">
                      <div class="grid-row">
                        <h1>Sign up here</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                          At vero eos et accusam et justo duo dolores et ea rebum.
                        </p>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><Label>Name*</Label></div>
                        <div class="tablet:grid-col"><Label>Preferred Contact*</Label></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-right-6"><TextInput /></div>
                        <div class="tablet:grid-col">
                          <ul className={styles.formCheckboxes}>
                            <li><Checkbox id="checkbox" name="checkbox" label="Email" /></li>
                            <li><Checkbox id="checkbox2" name="checkbox2" label="Phone" classname="margin-top-2"/></li>
                          </ul>
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
                        <div class="tablet:grid-col "><TextInput /></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col"><Label>Message*</Label></div>
                      </div>
                      <div class="grid-row">
                        <div class="tablet:grid-col margin-bottom-205"><TextArea className={styles.signupTextArea}/></div>
                      </div>
                      <div class="grid-row">
                        <Button>Submit</Button>
                      </div>                                               
                    </div>

                  </TabPanel>
                  <TabPanel>
                  <div class="grid-container">
                      <div class="grid-row margin-top-3">
                        <div class="tablet:grid-col" onclick="location.href='/'">
                          <img src={stickynotesImg} /> <br />
                          <div className={styles.eventTitle}>Nov 2 - UX Intro</div> <br />
                          <div className={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>
                        </div>
                        <div class="tablet:grid-col">
                          <img src={markersImg} />
                          <div className={styles.eventTitle}>Nov 3 - Design Strategy</div> <br />
                          <div className={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>                          
                        </div>
                      </div>
                      <div class="grid-row margin-top-3">
                        <div class="tablet:grid-col">
                          <img src={usertestingImg} />
                          <div className={styles.eventTitle}>Nov 5 - User Testing</div> <br />
                          <div className={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>                          
                        </div>
                        <div class="tablet:grid-col">
                          <img src={collabImg} />
                          <div className={styles.eventTitle}>Nov 10 - Event: Adobe XD</div> <br />
                          <div className={styles.eventDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>                          
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