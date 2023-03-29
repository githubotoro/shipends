import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="space absolute w-full h-full opacity-50 -z-10"></div>
      <main className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center place-content-center w-full h-[500px] sm:h-[600px]">
          <div className="grid grid-cols-1 w-full gap-12 sm:gap-16 items-center">
            <h1 className="text-3xl sm:text-6xl sm:leading-[3.7rem] text-center font-800 px-3">
              <span className="text-transparent drop-shadow-xl bg-clip-text bg-gradient-to-b from-isWhite to-isSystemLightTertiary">
                build cool products
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-isGreenDark to-isGreenLightEmphasis">
                in minutes
              </span>
              &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-isSystemDarkTertiary to-isSystemDarkSecondary">
                not hours
              </span>
            </h1>

            <div className="flex flex-col items-center">
              <p className="max-w-xs sm:max-w-3xl drop-shadow-sm text-isSystemLightTertiary/25 text-center text-xl leading-6 sm:text-3xl w-full  px-3 font-700">
                we create <span className="text-isYellowDark">notes</span>
                &nbsp;from web3 <span className="text-isRedDark">docs</span>, so
                you can start&nbsp;
                <span className="text-isBlueDark">shippin'</span> your dream
                project{" "}
                <span className="text-isSystemLightSecondary">
                  @ lightspeed
                </span>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Link href={`/sea`}>
                <button
                  className="w-fit bg-isSystemLightSecondary font-800 tracking-wide text-isSystemDarkTertiary
			  px-3  leading-none py-1
		rounded-lg text-2xl shadow-sm transition-all hover:bg-isWhite hover:text-isSystemDarkSecondary
		duration-300 ease-in-out hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                >
                  let's ship
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
