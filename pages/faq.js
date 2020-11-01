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
      title: 'What is Platform 327, and how does it help design teams?',
      content: (
        <p>
          Platform 327 is a digital design studio that combines all the resources and tools you need to 
          design, develop and deliver digital product solutions. 
        <br/>
        <br/>
          Our UX Skills Assessment as well as training 
          events and courses help design teams evaluate skill sets, build on those skill sets, identify 
          challenges and solve problems.
        </p>
      ),
      expanded: false,
      id: 'one',
    },
    {
      title: 'I am a new UX designer for my project team; how can Platform 327 help my team and me?',
      content: (
        <>
        <p>
          Platform 327 offers a UX Skills Assessment to identify strengths, priorities and interests 
          and determine areas where you can grow to make the most impact. Our Introduction to UX training 
          prepares designers to create effective and efficient products that meet the user’s needs. 
          Our UX Library includes a category specifically dedicated to designers, as well as a bank of 
          additional learning resources.
        </p>
        </>
      ),
      expanded: false,
      id: 'two',
    },
    {
      title: 'How can you sign up for sessions?',
      content: (
        <p>
          Visit the Platform 327 page. This will tell you where to start. Select the course you’re 
          interested in and fill out the form.
        </p>
      ),
      expanded: false,
      id: 'three',
    },
    {
      title: 'What is UX Skills Assessment, and why should I consider taking one?',
      content: (
        <p>
          A UX Skills Assessment will help identify strengths, priorities and interests. 
          It also identifies areas for growth so that you and your team can make the most 
          impact. 
          <br />
          <br />
          Human-centered product design can require a broad range of skills, including
          usability testing, information architecture and visual design. Our skills assessment 
          will help ensure your team has all the necessary skills to succeed.
        </p>
      ),
      expanded: false,
      id: 'four',
    },
    {
      title: 'What resources are available for UX designers, engineers and project teams?',
      content: (
        <p>
          Check out our BESPIN Apps page and see recent apps developed by designers within BESPIN, 
          and look at the BESPIN Ecosystem and Case Studies for best UX practices from those projects.
          <br />
          <br />
 
          You can also go to our contact page and submit a request for a UX designer or UX design team 
          for your project.The Platform 327 studio team will get back to you soon for next steps and 
          recommendations.
        </p>
      ),
      expanded: false,
      id: 'five',
    },
    {
      title: 'How are Platform 327 and Air Force BESPIN related?',
      content: (
        <p>
          Platform 327 is part of the Air Force’s Business Enterprise Systems Program Innovation 
          (BESPIN) at Maxwell Air Force Base in Montgomery, Alabama. It uses agile development to 
          quickly implement ideas aimed at improving mission support capabilities. 
          <br />
          <br />
          Platform 327 is a virtual schoolhouse for designers, developers and cross-functional teams learning to 
          create the digital solutions that will ultimately improve the lives of airmen and women.
        </p>
      ),
      expanded: false,
      id: 'six',
    },
    {
      title: 'I am from an AF Base and/or from another DoD unit interested in finding a team with design and UX capabilities; how can I find a project team?',
      content: (
        <p>
          For UX designers, check out our UX Library page, which houses design and UX resources, 
          the BESPIN Design System, a link to core Digital UX courses and tracks, and UX toolkits.
        <br />
        <br />

          For engineers and project teams, we’ve put together toolkits and guides on how to implement 
          basic UX practices and testing for design projects. We also provide ongoing workshops and 
          events on Platform 327.
        </p>
      ),
      expanded: false,
      id: 'seven',
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