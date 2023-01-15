import FlipCountdown from "@rumess/react-flip-countdown";
import bg from "./assets/images/bg-stars.svg";
import bottomBg from "./assets/images/pattern-hills.svg";
import fbIcon from "./assets/images/icon-facebook.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import instagramIcon from "./assets/images/icon-instagram.svg";

function App() {
  return (
    <div className="bg-[#1F1D2A]">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="h-[75vh] bg-cover flex justify-center items-center">
        <div className="font-bold text-white tracking-widest text-center" style={{ fontFamily: "'Red Hat Text', sans-serif" }}>
          <h1 className="lg:text-3xl md:text-2xl tracking-[10px] mb-20 text-[#F2F2F2]">WE'RE LAUNCHING SOON</h1>
          <div className="text=[#8486A9]">
            <FlipCountdown
              hideYear
              hideMonth
              theme='dark'
              size='large'
              titlePosition='bottom'

              endAt={new Date(
                Date.now() +
                1000 /* sec */ *
                60 /* min */ *
                60 /* hour */ *
                48 /* day */ *
                30 /* month */ *
                12 /* year */ *
                2
              ).toUTCString()}
              dayTitle='DAYS'
              hourTitle='HOURS'
              minuteTitle='MINUTES'
              secondTitle='SECONDS'
            />
          </div>
        </div>
      </div >
      <div style={{ backgroundImage: `url(${bottomBg})` }} className="h-[25vh] bg-no-repeat bg-cover flex justify-center items-center gap-x-5">
        <a className="hover:text-red-700" href="https://www.facebook.com" target="_blank">
          <img src={fbIcon} alt="" />
        </a>
        <a href="">
          <img src={pinterestIcon} alt="" />
        </a>
        <a href="">
          <img src={instagramIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
