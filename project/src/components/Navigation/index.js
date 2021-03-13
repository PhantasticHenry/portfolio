import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div id="Navigation">
      <div id="phone">
        <div id="camera"></div>
        <div id="speakers"></div>
        <div id="screen">
          <div className="container">
            <div className="icon-container">
              <div className="envelope">
                <div className="envelope-left"></div>
                <div className="envelope-right"></div>
              </div>
              <div className="envelope-top"></div>
              <h2>Email Me</h2>
            </div>
            <div className="container">
              <div className="icon-container">
                <div className="portfolio orange"></div>
                <div className="portfolio yellow"></div>
                <div className="portfolio green"></div>
                <div className="portfolio lightBlue"></div>
                <div className="portfolio blue"></div>
                <div className="portfolio purple"></div>
                <div className="portfolio violet"></div>
                <div className="portfolio red"></div>
                <h2>Portfolio</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="homebutton"></div>
      </div>
      {/* monitor */}

      {/* <div class="iMac">
        <div class="body">
          <div class="shine"></div>
          <div class="screen">
            <div className="container">
              <div className="icon-container">
                <div className="envelope">
                  <div className="envelope-left"></div>
                  <div className="envelope-right"></div>
                </div>
                <div className="envelope-top"></div>
                <h2>Email Me</h2>
              </div>
              <div className="container">
                <div className="icon-container">
                  <div className="portfolio orange"></div>
                  <div className="portfolio yellow"></div>
                  <div className="portfolio green"></div>
                  <div className="portfolio lightBlue"></div>
                  <div className="portfolio blue"></div>
                  <div className="portfolio purple"></div>
                  <div className="portfolio violet"></div>
                  <div className="portfolio red"></div>
                  <h2>Portfolio</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="logo"></div>
        </div>
        <div class="stand"></div>
      </div> */}
    </div>
  );
}

export default Navigation;
