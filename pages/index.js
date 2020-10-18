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

export default function Home() {
  return (
    // <div className={styles.container}>
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
  <Title>BESPIN {<br />}Marketplace</Title>
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
              <a href="#two" key="two" className="usa-nav__link">
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
      {/* <main className={styles.main}> */}
      <main id="main-content">
        <section className ={styles.heroSection}>
          {/* <img src={heroImage} /> */}
          <h1 className="usa-hero_heading"><span class="usa-hero__heading--alt">Hero Header</span></h1>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </section>
        <section className="grid-container usa-section">
          <h1 className="text-center">Mission</h1>
          <h2 className="text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing.</p>

              <br />
            <div>
              <Button className={styles.buttonCenter}>Contact Us</Button>
            </div>
            
        </section>

        <section className="grid-container" className={styles.partnersSection}>
          <h1 className="text-center">Partners</h1>
        <div class="grid-container buttonCenter">
          <div class="grid-row buttonCenter">
            <div class="tablet:grid-col"></div>
            <div class="tablet:grid-col"><img src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div class="tablet:grid-col"><img src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div class="tablet:grid-col"><img src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div class="tablet:grid-col"><img src="https://picsum.photos/seed/picsum/100/100" /></div>
            <div class="tablet:grid-col"></div>
          </div>
        </div>
        </section>
        <section className="grid-container">
          <h1 class="text-center">Contact Us</h1>
          <div class="grid-row">
            <div class="tablet:grid-col-4 margin-right-6 margin-top-3">
              <img src="https://picsum.photos/seed/picsum/360/282" />
            </div>
            <div class="tablet:grid-col-6">
            <div class="grid-row">
              <Label htmlFor="testInput">Name</Label>
              <TextInput />
            </div>
            <div class="grid-row">
              <Label htmlFor="testInput">Email</Label>
              <TextInput />
            </div>
            <div class="grid-row">
              <Label htmlFor="testInput">Message</Label>
              <TextArea className={styles.TextArea}/>
            </div>
            <div class="grid-row margin-top-2">
            <Button>Submit</Button>
          </div>
          </div>


          </div>



          {/* <div class="grid-row">
            <div class="tablet:grid-col">.tablet:grid-col</div>
            <div class="tablet:grid-col">.tablet:grid-col</div>
            <div class="tablet:grid-col">.tablet:grid-col</div>
          </div>

          <div class="grid-row">
            <div class="tablet:grid-col-4">.tablet:grid-col-4</div>
            <div class="tablet:grid-col-8">.tablet:grid-col-8</div>
          </div> */}

        </section>
        <div class="grid-container usa-footer__return-to-top">
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
     {/* </div> */}
     </>
  )
}
