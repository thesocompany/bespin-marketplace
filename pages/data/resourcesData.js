
import styles from '../../styles/Home.module.css'


export default function resourceAccordionItems() {
  const data = [
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
            <div class="tablet:grid-col">
              <img src="/resources/content-learning-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Core UX with Digital U</p>
              <p className="font-body-3xs margin-top-05">Learn the core principles of user <br />experience and research through <br />these on-going tracks:
                <ul className="padding-left-205">
                  <li><a className={styles.accordionLink} href="">Design Track 1</a></li>
                  <li><a className={styles.accordionLink} href="">Design Track 2</a></li>
                  <li><a className={styles.accordionLink} href="">Design Track 3</a></li>
                </ul>
              </p>
            </div>
            <div class="tablet:grid-col">
              <img src="/resources/content-learning-icon.png" />
              <p className={styles.accordionLargeContentTitle}>A/B Testing Templates</p>
              <p className="font-body-3xs margin-top-05">Good UI ideas and A/B tested <br />patterns for better analysis
              </p>
            </div>
            <div class="tablet:grid-col">
              <img src="/resources/content-learning-icon.png" />
              <p className={styles.accordionLargeContentTitle}>User Interview and Audits</p>
              <p className="font-body-3xs margin-top-05">All in one toolkit for everything <br />related to user experience interviews
              </p>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'one',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">Design</h2>
            <p>Learn interactive and visual design principles</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/design-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="/resources/design-board.svg" />
      ),
      content: (
        <div class="grid-container">
          <div class="grid-row">
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-design-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UI Testing Templates</p>
              <p className="font-body-3xs margin-top-05">Make sure that all design<br /> elements in UI are spot on
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-design-icon.png" />
              <p className={styles.accordionLargeContentTitle}>UI Checklist</p>
              <p className="font-body-3xs margin-top-05">Quick guide on going over your<br /> design features
              </p>
            </div>
            <div class="tablet:grid-col">
              <img className="" src="/resources/content-design-icon.png" />
              <p className={styles.accordionLargeContentTitle}>Interaction Templates</p>
              <p className="font-body-3xs margin-top-05">For mobile design, quick <br /> interactions to go
              </p>
            </div>
          </div>
        </div>
      ),
      expanded: false,
      id: 'three',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">UI Components</h2>
            <p>Get UI kits, UX wireframes and more</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/UIComponents-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="resources/uicomponents-ladder.svg" />
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
      id: 'five',
    },
    {
      title: (
          <>
            <h2 className="margin-top-0">Development</h2>
            <p>Use what you’ve learned to create digital products</p>
          </>
        ),
        icon: (<img className="margin-top-205" src="/resources/development-icon.png" />
      ), 
      image: (<img className={styles.appsIcon} src="resources/development-puzzle.svg" />
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
      id: 'seven',
    }
  ] 
  return data;
} 