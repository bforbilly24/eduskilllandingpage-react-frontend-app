import React, { useEffect } from "react";
import { eduskill, hero, logo } from "@/Data";
import AOS from "aos";
import "aos/dist/aos.css";

const Eduskill = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full lg:h-[592px] md:h-[750px] h-[630px] bg-[#B0E4DE]/40 ">
      <div className="container mx-auto ">
        <div className="xl:flex lg:flex md:block block justify-between md:space-x-4">
          <div className="section-1 lg:pt-0 md:pt-0 pt-3 lg:mx-0 md:mx-0 mx-[20px]">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="logo-eduskill flex lg:justify-start md:justify-start justify-start mr-3"
            >
              <img
                src={eduskill}
                alt="logo_eduskill"
                className="lg:mt-[68px] md:mt-[40px] mt-0 lg:w-48 md:w-40 w-36 lg:h-16 md:h-14 h-12"
              />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="lg:w-[603px] md:w-[403px] w-full lg:mt-3 md:mt-3 mt-4 lg:text-start leading-10 md:text-start text-start"
            >
              <span className="text-black lg:text-6xl md:text-4xl text-2xl font-extrabold capitalize tracking-wide">
                Upgrade Skill Pemrogramanmu Bersama{" "}
              </span>
              <span className="text-orange-500 lg:text-6xl md:text-4xl text-2xl font-extrabold capitalize tracking-wide">
                Eduskill
              </span>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="xl:w-[650px] lg:w-[600px] md:w-[600px] w-full lg:mt-5 md:mt-5 mt-3 text-justify font-['Poppins'] "
            >
              <span className="text-black text-base font-normal lg:leading-10 md:leading-loose leading-none lg:tracking-tighter md:tracking-tighter tracking-normal">
                Jadi{" "}
              </span>
              <span className="text-black text-base font-bold lg:leading-10 md:leading-loose leading-none lg:tracking-tighter md:tracking-tighter tracking-normal">
                #SelangkahdiDepan
              </span>
              <span className="text-black text-base font-normal lg:leading-10 md:leading-loose leading-none lg:tracking-tighter md:tracking-tighter tracking-normal">
                {" "}
                kuasai digital skills dengan metode belajar yang fun! Dapatkan
                materi sesuai kebutuhan industri dan disiapkan daftar kerja
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className="lg:mt-6 md:mt-6 mt-3"
            >
              <div className="lg:w-52 md:w-48 w-[175px] h-14 px-6 lg:py-3 md:py-3 py-2 bg-orange-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white lg:text-lg md:text-sm xl:text-[18px] md:text-[18px] text-base font-semibold font-['Poppins'] lg:leading-9 md:leading-9 leading-6 tracking-tight">
                  <a
                    href="http://linktr.ee/eduskill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Poppins']"
                  >
                    Mulai Sekarang!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="flex justify-start lg:mt-[125px] md:mt-[45px] mt-[40px]  lg:mx-0 md:mx-0 mx-[20px]"
          >
            <div className="lg:w-[440px] md:w-[400px] w-full relative">
              <div
                className="relative flex items-end justify-start bg-contain bg-no-repeat lg:rounded-3xl md:rounded-3xl rounded-2xl text-left lg:h-[285px] md:h-[235px] h-[180px]"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent), url(${hero})`,
                  backgroundPosition: "left 65px center",
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="absolute top-0 w-full lg:h-[285px] md:h-[235px] h-[180px] bg-gradient-to-r from-orange-400 lg:rounded-3xl md:rounded-3xl rounded-2xl"></div>
                <div className="lg:left-8 md:left-4 left-3 lg:top-[90px] md:top-[60px] top-[45px] absolute text-white lg:text-xl md:text-base text-base lg:font-bold md:font-bold font-semibold font-['Poppins'] capitalize lg:leading-7 md:leading-7 leading-1 lg:tracking-wide md:tracking-tight tracking-normal">
                  Dari gak percaya diri,
                  <br />
                  <span>
                    hingga mampu <br />
                    menginspirasi
                  </span>
                </div>
                <div className="lg:left-8 md:left-4 left-3 lg:top-[220px] md:top-[170px] top-[125px] font-['Poppins'] absolute">
                  <span className="text-white lg:text-base md:text-sm text-sm font-medium lg:leading-tight md:leading-tight leading-none tracking-tight">
                    Saatnya
                  </span>
                  <span className="text-white lg:text-base md:text-sm text-sm font-bold lg:leading-tight md:leading-tight leading-none tracking-tight">
                    {" "}
                    #MulaiUpskilling
                    <br />
                  </span>
                  <span className="text-white lg:text-base md:text-sm text-sm font-medium lg:leading-tight md:leading-tight leading-none tracking-tight">
                    Bersama Eduskill
                  </span>
                </div>
                <img
                  className="lg:w-44 md:w-32 w-28 lg:h-14 md:h-11 h-10 lg:left-8 md:left-4 left-3 lg:top-5 md:top-3 top-1 absolute"
                  src={logo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduskill;
