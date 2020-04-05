import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I'm a technology enthusiast, hackathon hacker, consultant, freelancer and a Jill-of-all-trades.
          </p>
          <p className="lead mb-5">
          You might have seen me around at hackathons! I participate in various hackathons throughout the year and also mentor and judge. Contact me about upcoming hackathon mentoring and judging opportunities.
          </p>
          <p className="lead mb-5">
          I have a Masters of Applied Information Technology, and a Bachelor of Commerce (Accounting). I've worked in different roles in IT industry and advisory consulting and am a certified Enterprise Architect. 
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Head of Developer Relations/Lead API Evangelist</h3>
              <div className="subheading mb-3">MessageMedia</div>
              <p>
                <ul>
                  <li>Assist the CTO with building out a Developer Relations function and manage a small developer relations team. </li>
                  <li>Responsible for the strategic direction of the developer toolkits and developer outreach activities (including within SMEs and startups).</li>
                  <li>Maintain code bases and Software Development Kits in six languages, to assist developers using the MessageMedia APIs.</li>
                  <li>Collaborate with marketing and events staff to represent the organisation at technology and developer industry events. </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct. 2018 – Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Senior Adviser, Innovation & the Digital Economy</h3>
              <div className="subheading mb-3">Office of the Hon. Minister Philip Dalidakis, Victorian Government</div>
              <p>
                <ul>
                  <li>LaunchVic: assisting with scaling and operational refinement of the $60m initiative designed to incubate and accelerate the startup ecosystem.</li>
                  <li>Cyber-security and the digital economy: supporting the development of the Oceania Cyber-security Centre and Data61 Goods Shed precinct.</li>
                  <li>Technology investment and attraction: liaising with Invest Victoria and international trade offices on enticing global tech companies to setup up regional headquarters in Victoria and then supporting subsequent cabinet submissions.</li>
                  <li>ICT infrastructure investment: incorporating all economic aspects of telco access and delivery of key infrastructure initiatives such as Mobile Blackspot Program and the public Wi-Fi rollout. Strategic advisory on budget bids for continued investment and election policy.</li>
                  <li>Innovation sector development: supporting infrastructure in areas where Victoria has a unique cultural or competitive advantage on the world stage such as Fintech. Worked extensively with a range of stakeholders on the tender and formation process for the Fintech Hub concept.</li>
                  <li>Office management: acting in the role of Chief of Staff (CoS) when the CoS was on leave or travelling with the Minister.</li>
                  <li>Stakeholder and departmental relations: working collaboratively with both external and internal stakeholders to achieve maximum impact and benefit for the government.</li>
                  <li>Events, media and social media development: operating across the ecosystem to develop opportunities for the Minister and stakeholders to promote the innovation sector.</li>
                  <li>Parliamentary and legislative duties: keeping the Minister prepared and equipped for his responsibilities in the Legislative Council of the Victorian Parliament. </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan. 2017 – Jul. 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Developer Evangelist</h3>
              <div className="subheading mb-3">Xero</div>
              <p>
                <ul>
                  <li>Manage the partner ecosystem for Xero – third-party developers who integrate with Xero’s Application Programming Interfaces (APIs).</li>
                  <li>Inbound enquiries and certification of high-value partners who are listed on the marketplace.</li>
                  <li>Outbound relationship building for developer partners, brand management, marketing and strategy for the developer ecosystem, public speaking, event management.</li>
                  <li>Code sample creation and developer tools creation, specialist knowledge for API usage.</li>
                  <li>Worked with marketing to prioritise platform vs. outbound evangelism strategy.</li>
                  <li>Advocated for third party developers during both a Marketplace refresh/migration and a platform migration (to AWS cloud from RackSpace).</li>
                  <li>Event Sponsorship strategic engagement including assessing and prioritizing opportunities and maximizing value creation. </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun. 2016 – Jan. 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">IT Advisory Consultant</h3>
              <div className="subheading mb-3">EY, Australia</div>
              <p>
                <li>Consulted for the IT Advisory function of the EY Advisory practice.</li>
                <li>Primary responsibilities included advanced modelling for business case costing and Enterprise Architecture modelling and strategy.</li>
                <li>Included in project teams for consulting engagements as a technical resource – provided a deep understanding of digital technology, Information Security, and experience working with enterprise systems.</li>
                <li>Projects cut across several industry verticals, in particular Energy and Utilities, Telecommunications, Fast Moving Consumer Goods and the Public Sector.</li>
                <li>Achieved Enterprise Architecture professional certification (TOGAF 9) during this time.</li>
                <li>Worked on a preliminary business case for Victorian Government’s Whole of Victorian Government Information Technology Strategy and Whole of Victorian Government Cyber Security, during which time I was a technology and information security domain knowledge resource for the project.</li>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan. 2015 – Jun. 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Melbourne Business School</h3>
              <div className="subheading mb-3">Graduate Diploma of Business Administration</div>
              {/* <div>Computer Science - Web Development Track</div> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 – ongoing</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">

            <div className="resume-content">
              <h3 className="mb-0">Monash University</h3>
              <div className="subheading mb-3">Bachelor of Commerce</div>
              <p>Specialisation in Network Infrastructure
Coursework in Internet and Mobile Applications Development
Additional coursework in Programming, Database Management and Project Management
</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of Melbourne</h3>
              <div className="subheading mb-3">Bachelor of Commerce</div>
              <p>Major in Accounting
              Coursework in Econometrics (Minor)
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2012 - 2014</span>
            </div>
        </div>
        </div>

        

      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i> */}
            {/* </li> */}
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i> */}
            {/* </li> */}
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            {/* <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i> */}
            {/* </li> */}
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Documentation - (Swagger, OpenAPI, API Blueprint)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Troubleshooting and developer assistance
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Developer Toolkits
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="volunteer"
      >
        <div className="w-100">
          <h2 className="mb-5">Volunteer positions and community</h2>
          <p>
            <h3>Western BACE</h3>
            I am a board director for The Western Business Accelerator and Centre of Excellence (Western BACE). <a href="https://westernbace.com/about/">Western BACE</a> was established and opened in May 2015 with the primary role of being the hub of enterprise, community activity and business development for Melbourne’s West.
            <p></p>
          </p>
          <p className="mb-0">
            AUDA
          </p>
          <p className="mb-0">
            <h3>Events management and operations</h3>

            <p>In 2019 I coorginsed FFS COnf Down Under.</p>

            <p>I am a co-organiser of NoCode Australia meetup group</p>
          </p>
          <p className="mb-0">
            <h3>Memberships</h3>

            <p>I am a member of the Chuchill CLub Australia</p>

            <p>I am associate member of Auda.</p>
          </p>
        </div>
        
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              TOGAF 9 certified Enterprise Architect
            </li>
      
          </ul>
          <div></div>
          <div >
          <h3>Hackathons</h3>
              <p>Over several years I have competed in teams that have placed or won awards at hackathons. I have subsequently moved to mentoring and facilitating.</p>
              <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Health Hack 2014 - 2nd place
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Unihack 2014 - 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Hackagong 2014 - 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Health Hack 2015 - 1st Place
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              HealthXL 2015 - 1nd place
            </li>
          </ul>
        </div>
        </div>
       
      </section>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="speaking"
      >
        <div className="w-100">
          <h2 className="mb-5">Public Speaking</h2>
          <p>
            Panel facilitation
            Hosting the Scale up stage for Startup Grind APAC
          </p>

          <p>I also speak at events and meetups occasionally. These are some of the talks I have given:</p>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-microphone text-warning"></i>
              <h3>Intro to Web App No-Code Development</h3>
              <h4>No-Code Australia Meetup Feb 2020</h4>
              <a href="https://docs.google.com/presentation/d/17Pzv2pF-pRIJdKhTbJ_O0tOZrZaSPPu4UBpbH0UwrLo/edit?usp=sharing">Slides</a>
              <p>In this meetup we'll discuss the No Code movement and how it allows you to build beautiful/ functional websites without needing to learn code. Following an overview of the different web nocode platforms we'll focus on bubble as a means of creating interactive websites.</p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone text-warning"></i>
              <h3>Are notifications a Dark Pattern?</h3>
              <h4>YOW</h4>
              <a href="https://docs.google.com/presentation/d/1XEnqOq9GQHZFV5rQjUCMnHFAQfExUnBn/edit?usp=sharing">Slides</a>
              <p>Dark Patterns are tricks used in websites and apps that make you do things that you didn't mean to. This typically means things like buying something or signing up for something. It’s a concept in UX used to describe design choices that are intentionally deceptive. However, coding choices are also sometimes used to make you do things you don’t want to do, like force you to receive a message when you don’t want to or haven’t chosen to. While this is not strictly a ‘dark pattern’ I argue it’s a ‘grey pattern’, like a big pop up that forces you to double exit.</p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone  text-warning"></i>
              <h3>Coowning Documentation</h3> 
              <h4>API The Docs</h4>
              <a href="https://docs.google.com/presentation/d/1UseRGaajCXpPCSLxA8uZeocaUoaJxJLW/edit?usp=sharing">Slides</a>
              <p>Differentiating between public facing and internal only docs that are managed by more than one person.</p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone  text-warning"></i>
              <h3>Package Management Across 6 Languages</h3>
              <h4>APIDAys</h4>
              <a href="https://docs.google.com/presentation/d/1XEnqOq9GQHZFV5rQjUCMnHFAQfExUnBn/edit?usp=sharing">Slides</a>
              <p>At MessageMedia I maintain SDKs across 6 programming languages for more than one API. This means I've had to learned how to manage packages in 6 ecosystems. In this talk I share introduce each ecosystem and impart the tips and tricks I've learned along the way.</p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone  text-warning"></i>
              <h3>Aesthetic Hacking</h3>
              <h4>SproutX Hackathon</h4>
              <a href="https://speakerdeck.com/coderbec/aesthetic-hacking">Slides</a>
              <p>Sometimes you aren't lucky enough to have a designer on your hackathon team. Making a beutiful looking solution is an important part of scoring well and winning prizes. In this talk I give some tips and tricks I've learned to create a nice looking solution without the help of a designer.</p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone  text-warning"></i>
              <h3>Government Relations for Startups and SMEs</h3>
              <h4>Binary Shift Conference</h4>
              <a href="https://speakerdeck.com/coderbec/government-relations-for-startups-and-smes">Slides</a>
              <p></p>
            </li>
            <li>
              <i className="fa-li fa fa-microphone text-warning"></i>
              <h3>Alternative Career Paths in Technology</h3>
              <h4>ACS Career Day</h4>
              <a href="https://speakerdeck.com/coderbec/alternative-career-paths-in-technology">Slides</a>
              <p></p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
