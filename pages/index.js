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
        <section className ={styles.heroSection}>
          {/* <img src={heroImage} /> */}
          <h1 className="usa-hero_heading" className={styles.headerTitle}><span className="usa-hero__heading--alt">Hero Header</span></h1>
          <span className={styles.heroIntro}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</span>
        </section>
        <section className="grid-container usa-section">
          <h1 className={styles.sectionHeading}>Mission</h1>
          <h2 className={styles.sectionSubheading}>Platform 327 provides a virtual schoolhouse experience for designers, developers, and cross-functional teams</h2>
          <p>
          Welcome to Platform 327, the Air Force’s first virtual design studio. We’ve put together all the 
          resources and tools you’ll need to learn to design, engineer and deliver digital products. 
          </p>
          <p>
          Platform 327 is part of the Air Force’s Business Enterprise Systems Program Innovation (BESPIN), 
          an agile development lab. The BESPIN ecosystem fosters investigation, risk-taking and entrepreneurial 
          thinking to turn innovation into reality. 
          </p>
          <p>
          Human-centered product design means creating tailor-made 
          solutions for the people you are designing for. Whether you’re a beginner who wants to know more or an
          advanced designer or engineer seeking expertise, we have resources, toolkits, courses and training events for you. 
          </p>

              <br />
            <div>
              <Button className={styles.buttonCenter}>Contact Us</Button>
            </div>
            
        </section>

        <section className="grid-container" className={styles.partnersSection}>
          <h1 className="text-center">Partners</h1>
        <div className="grid-container buttonCenter">
          <div className="grid-row buttonCenter">
            <div className="tablet:grid-col"></div>
            <div className="tablet:grid-col"><img className={styles.appsIcon} src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div className="tablet:grid-col"><img className={styles.appsIcon} src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div className="tablet:grid-col"><img className={styles.appsIcon} src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div className="tablet:grid-col"><img className={styles.appsIcon} src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div className="tablet:grid-col"></div>
          </div>
        </div>
        </section>
        <section className="grid-container usa-section">
          <h1 className={styles.sectionHeading}>Contact Us</h1>
          <div className="grid-row">
            <div className="tablet:grid-col-4 margin-right-6 margin-top-3">
              <img src="https://picsum.photos/seed/picsum/360/282" />
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



          {/* <div className="grid-row">
            <div className="tablet:grid-col">.tablet:grid-col</div>
            <div className="tablet:grid-col">.tablet:grid-col</div>
            <div className="tablet:grid-col">.tablet:grid-col</div>
          </div>

          <div className="grid-row">
            <div className="tablet:grid-col-4">.tablet:grid-col-4</div>
            <div className="tablet:grid-col-8">.tablet:grid-col-8</div>
          </div> */}

        </section>
        <div className="grid-container usa-footer__return-to-top">
         <a href="#">Return to top</a>
        </div>
      {/* <Button type="button">Click Me</Button>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
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
