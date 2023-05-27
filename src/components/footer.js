import React from 'react';


const Footer = () => {
  return (
    <div class="footerMainDiv">

      <footer style={{backgroundColor: "#6E7D89"}}>
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4">
              <h5 class="mb-3" style={{letterSpacing: "2px", color:" #DADDE0"}}>SUNNYSIDE</h5>
              <p style={{color:" #DADDE0"}}> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="mb-3"  style={{letterSpacing: "2px", color:" #DADDE0"}}>LINKS</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-1">
                  <a href="#!" style={{color: "#DADDE0"}}>Frequently Asked Questions</a>
                </li>
                <li class="mb-1">
                  <a href="#!" style={{color: "#DADDE0"}}>Delivery</a>
                </li>
                <li class="mb-1">
                  <a href="#!" style={{color: "#DADDE0"}}>Pricing</a>
                </li>
                <li>
                  <a href="#!" style={{color: "#DADDE0"}}>Where we deliver?</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <h5 class="mb-1"  style={{letterSpacing: "2px", color:" #DADDE0"}}>OPENING HOURS</h5>
              <table class="table" style={{color: "#DADDE0", borderColor: "#DADDE0"}}>
                <tbody>
                  <tr>
                    <td>Mon - Fri:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Sat - Sun:</td>
                    <td>8am - 1am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="text-center p-3" style={{backgroundColor: "#566875", color:"#DADDE0"}}>
          © 2020 Copyright:
          <a style={{color:"#DADDE0"}} href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
       
      </footer>

    </div>

  );
};

export default Footer;