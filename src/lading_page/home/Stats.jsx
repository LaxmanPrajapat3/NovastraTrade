import './Stats.css'
export default function Stats(){
    return(
        <div className="grid grid-cols-2 grid-rows-1 bg-gray-200 p-5 gap-4">
<div className="bg-sky-300 grid grid-rows-4 gap-4 ">
    <h1>Trust with confidence</h1>
    <div  className="paragraps">
    <h3>Customer-first always</h3>
    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
        
    </div>
    <div  className="paragraps">

    <h3>No spam or gimmicks</h3>
    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

    </div>
    <div className="paragraps">


    <h3>The Zerodha universe</h3>
    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

    </div>
    <div className="paragraps">

    <h3>Do better with money</h3>
    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        
    </div>

</div>
<div className="bg-green-300">
    <img src="../../src/assets/Stats_img_1.png" alt="" />
</div>

        </div>
    )
}