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
// import FooterNav from '../src/components/FooterNav'
import BespinLogo from '../src/assets/images/BESPIN-Logo.png'

export default function ContactUs() {
    return (
      <>
          <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.8.0/css/uswds.min.css" rel="stylesheet" />
      </Head>
      <>
      <GovBanner />
      <div className='usa-overlay' ></div>
      <Header basic={true}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
          <div className="grid-row">
            <div className="grid-col-auto" className={styles.headerLogo}><img src={BespinLogo} /></div>
            <div className="grid-col-auto"><Title>BESPIN {<br />}Marketplace</Title></div>
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
              <a href="#three" key="three" className="usa-nav__link">
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
        <nav className="usa-breadcrumb"  aria-label="Breadcrumbs">
          <ol className={styles.breadcrumbList} class="usa-breadcrumb__list" >
            <li class="usa-breadcrumb__list-item">
              <a href="#" class="usa-breadcrumb__link">
                <span>Home</span>
              </a>
            </li>
            <li class="usa-breadcrumb__list-item">
              <a href="/contactus" class="usa-breadcrumb__link">
                <span>Contact Us</span>
              </a>
            </li>
          </ol>
        </nav>
        <main id="main-content">
          <section>
            <h1 className={styles.sectionHeading}>Contact Us</h1>
            <br />
            <div class="grid-container">
              <div class="grid-row">
                <div class="grid-col-auto"><img src="https://picsum.photos/id/1015/538/363" /></div>
                <div class="grid-col-auto"><span className="font-sans-lg text-bold">BESPIN</span> <br />123 Main Street <br />Montgomery, AL 32018<br /><br /><br /> Call: (546) 684-4168<br /> Call: (546) 684-4168<br /> Email: sfad@bespin.com <br /><br /><br /><Button>Schedule Time With Us</Button></div>
              </div>
            </div>
          </section>
          <section>
            <h1 className={styles.sectionHeading}>Send Us A Message</h1>
            <div class="grid-container">
              <div class="grid-row">
                  <Label htmlFor="testInput">Name</Label>
                  <TextInput />
              </div>
                <div class="grid-row">
                  <Label htmlFor="testInput">Email</Label>
                  <TextInput />
                </div>
                <div class="grid-row">
                  <Label htmlFor="testInput">Phone Number</Label>
                  <TextInput />
                </div>
                <div class="grid-row">
                  <Label htmlFor="testInput">Phone Number</Label>
                  <TextArea />
                </div>                
            </div>
          </section>
        </main>
      </>
    )

    }