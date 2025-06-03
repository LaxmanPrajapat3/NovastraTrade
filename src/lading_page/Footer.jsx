export default function Footer(){
    return(
    <>
    <footer className="h-120 grid grid-cols-5 gap-5  pl-20 pr-20 pt-2 pb-2 max-lg:grid-cols-1 max-lg:grid-rows-5 max-lg:h-270 ">
        <div className=" justify-items-center">
            <img src="../../src/assets/logo1.png" alt="" className="h-20"/>
            <p>© 2010 - 2025, Zerodha Broking Ltd.
                All rights reserved.</p>
               

<div>

<i class="fa-brands fa-x-twitter footer-icons" ></i>

<i class="fa-brands fa-facebook footer-icons"></i>
 <i class="fa-brands fa-instagram footer-icons"></i>
<i class="fa-brands fa-linkedin footer-icons"></i>

</div>
<hr />
<div>
<i class="fa-brands fa-youtube footer-icons"></i>
<i class="fa-brands fa-whatsapp footer-icons"></i>
<i class="fa-brands fa-telegram footer-icons"></i>
</div>
               

        </div>
        <div className=" grid grid-rows-9 justify-items-center ">
            
            <h2 className="text-xl">Account</h2>
            <a href="" className="text-xs">Open demat account</a>
            <a href=""  className="text-xs">Minor demat account</a>
            <a href="" className="text-xs">NRI demat account</a>
            <a href="" className="text-xs">Commodity</a>
            <a href="" className="text-xs">Dematerialisation</a>
            <a href="" className="text-xs">Fund transfer</a>
            <a href="" className="text-xs">MTF</a>
            <a href="" className="text-xs">Referral program</a>


            
            </div>
        <div className=" grid grid-rows-9 justify-items-center">

           <h2 className="text-xl">Support</h2>
           <a href=""  className="text-xs">Contact us</a>
            <a href="" className="text-xs">Support portal</a>
            <a href="" className="text-xs">How to file a complaint?</a>
            <a href="" className="text-xs">Status of your complaints</a>
            <a href="" className="text-xs">Bulletin</a>
            <a href="" className="text-xs">Circular</a>
            <a href="" className="text-xs">Z-Connect blog</a>
            <a href="" className="text-xs">Downloads</a>

        </div>
        <div className=" grid grid-rows-8 justify-items-center">
            
            <h2 className="text-xl">Company</h2>
            <a href="" className="text-xs">About</a>
            <a href="" className="text-xs">Philosophy</a>
            <a href="" className="text-xs">Press & media</a>
            <a href="" className="text-xs">Careers</a>
            <a href="" className="text-xs">NovastraTrade Cares (CSR)</a>
            <a href="" className="text-xs">NovastraTrade.tech</a>
            <a href="" className="text-xs">Open source</a>     
            
            
            </div>
        <div className=" grid grid-rows-8 justify-items-center">
            
            <h2 className="text-xl"> Quick links </h2>
              <a href="" className="text-xs">Upcoming IPOs</a>
            <a href="" className="text-xs">Brokerage charges</a>
            <a href="" className="text-xs">Market holidays</a>

                 <a href="" className="text-xs">Economic calendar</a>
                 <a href="" className="text-xs">Calculators</a>
                 <a href="" className="text-xs">Markets</a>
                 <a href="" className="text-xs">Sectors</a>
                 




        </div>
        

        
    </footer>
    </>
    )
}