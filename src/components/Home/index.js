import React from 'react'
import Typist from 'react-typist'
import styled, { keyframes } from 'styled-components'
import { bounceInLeft } from 'react-animations'

import './Home.styles.css'

const bounceInLeftAnimation = keyframes`${bounceInLeft}`;
const LeftBouncyDiv = styled.div`
  animation: 3s ${bounceInLeftAnimation};
`;

const Home = () => {
  return (
    <div id="home-body">
        <div className="terminal-window-wrapper">
          <LeftBouncyDiv>
          <div className="terminal-window">
            <header>
              <div className="button green" />
              <div className="button yellow" />
              <div className="button red" />
            </header>
            <section className="terminal">
              <Typist>
                <h1 style={{ fontSize: '32px', textAlign: 'left', padding: '10px' }}>
                  <span>Hi,</span><br />
                  <span>My name is Manny,</span><br />
                  <span>Software Engineer,</span><br />
                  <span>Entrepreneur</span><br />
                  <span>& IoT Enthusiast.</span>
                </h1>
              </Typist>
            </section>
          </div>
          </LeftBouncyDiv>
        </div>
    </div>
  );
};

export default Home;
