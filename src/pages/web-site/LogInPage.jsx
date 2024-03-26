import React from 'react'
import { ajoLogo2 } from '../../../public/assets';
import Paragraph from '../../components/paragraphs';
import Inputs from '../../components/inputs/Main-Inputs';
import Mainheader from '../../components/headers/Main-header';
import SubmitBtn from '../../components/buttons/submit-btn';

function LogInPage() {
  return (
    <section className='onBoarding'>

        <div className="text-side">
        <img src={ajoLogo2} alt="Ajo Logo" />
        <div className="text">
          <h1>achieve your financial goals with our solutions</h1>
          <Paragraph class="bright-text" ParagraphText="Join other wise Nigerians to revolutionise their personal finance by combining individual savings with pool contribution." />
        </div>
      </div>
    <div className="input-side">
      <div className="user-form">
         <Mainheader headertext="login" class="main-header"/>
         <form action="/">
         {/* change={handleChange},value={inputs.email || ""} */}
         <Inputs  label="Email" type="email" id="email" name="email"  placeholder="Enter your email" />
         <Inputs  label="password" type="password" id="password" name="passowrd"  placeholder="Enter your password" />
         <SubmitBtn btntext="login"/>
         </form>
         <div className="sign-in-footer">
          <div className="borders">
          <h4>or</h4>
          </div>
          <div className="google-auth">
            <svg width="40px" height="40px" viewBox="-3 0 262 262" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <g>
                <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4">

            </path>
                <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853">

            </path>
                <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05">

            </path>
                <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335">

            </path>
              </g>
            </svg>
          </div>
         </div>
         </div>
      </div>
    </section>
  )
}

export default LogInPage;