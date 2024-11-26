import Link from "next/link";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Dropdown from "@/components/dropdown/dropdown";

import SealSevenDays from "../assets/img/Selo-de-Garantia-de-7-Dias.png";
import StarRating from "../assets/img/star.png";
import WhatsappButton from "../assets/img/whatsapp-logo.png";
import ImageEmpty from "../assets/img/Image Space.png";
import ImageEmpty2 from "../assets/img/ImageEmpity.png";

export default function Home() {
  return (
    <>
      <Link href={"/"}>
        <Image
          src={WhatsappButton}
          width={55}
          height={55}
          alt="Whatsapp Button"
          className="fixed top-85vh right-6 bottom-0 z-10"
        />
      </Link>
      <Navbar />
      {/* <div className="w-100vw h-85vh bg-gray-300"></div> */}
      <Image
        src={ImageEmpty2}
        width={1980}
        height={720}
        alt="Website Banner"
      />

      <section className="flex flex-col items-center content-around justify-around my-15vh">
        <div className="container-service flex flex-wrap flex-col justify-around items-center h-auto">
          <div className="flex flex-col justify-around items-center">
            <h1 className="font-bold text-center text-3xl">
              Why do we use it?
            </h1>
            <h2 className="text-center w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <div className="cursor-pointer w-28 h-28 rounded-full bg-slate-300 my-4 max-w-[690px]: mx-4 hover:shadow-lg ease-in-out duration-300"></div>
            <div className="cursor-pointer w-28 h-28 rounded-full bg-slate-300 my-4 max-w-[690px]: mx-4 hover:shadow-lg ease-in-out duration-300"></div>
            <div className="cursor-pointer w-28 h-28 rounded-full bg-slate-300 my-4 max-w-[690px]: mx-4 hover:shadow-lg ease-in-out duration-300"></div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-100vw h-85vh bg-gray-300 max-md:h-auto">
        <div className="container-service flex flex-wrap flex-col justify-around items-center max-md:my-15vh">
          <div className="flex flex-col justify-around items-center my-7">
            <h1 className="font-bold text-center text-3xl">
              Why do we use it?
            </h1>
            <h2 className="text-center w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
          <div className="flex flex-wrap w-4/4 justify-center items-center">
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:bg-black hover:text-white duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:bg-black hover:text-white duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:bg-black hover:text-white duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:bg-black hover:text-white duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center content-around justify-around my-15vh">
        <div className="container-service flex flex-wrap flex-col justify-around items-center h-auto">
          <div className="flex flex-wrap justify-center items-center">
            <div className="cursor-pointer w-28 h-28 rounded-full bg-slate-300 my-4 max-w-[690px]: mx-4 hover:shadow-lg ease-in-out duration-300"></div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <h1 className="font-bold text-center text-3xl">
              Why do we use it?
            </h1>
            <h2 className="text-center w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-15vh">
        <div className="container flex flex-wrap justify-around items-center">
          <div className="container-image flex justify-center items-center ">
            {/* <div className="w-80 h-80 bg-zinc-300"></div> */}
            <Image src={ImageEmpty} width={520} height={520} alt="Image" />
          </div>
          <div className="container-text flex flex-col w-1/2 items-center max-md:my-3.5">
            <h1 className="font-bold text-center text-3xl">
              Page when looking at its
            </h1>
            <h2 className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-15vh">
        <div className="container flex flex-wrap justify-around items-center">
          <div className="container-text flex flex-col w-1/2 items-center max-md:my-3.5">
            <h1 className="font-bold text-center text-3xl">
              Page when looking at its
            </h1>
            <h2 className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
          <div className="container-image flex justify-center items-center ">
            {/* <div className="w-80 h-80 bg-zinc-300"></div> */}
            <Image src={ImageEmpty} width={520} height={520} alt="Image" />
          </div>
        </div>
      </section>

      <section className="flex justify-center my-15vh">
        <div className="container flex flex-wrap justify-around items-center">
          <div className="container-text flex flex-col w-25vw items-start max-md:w-96 my-3.5">
            <div className="flex">
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
            </div>
            <h1 className="font-bold text-3xl">Page when looking at its</h1>
            <h2 className="font-bold text-xs">26 Anos. São Paulo, São Paulo</h2>
            <h3 className="text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h3>
          </div>
          <div className="container-text flex flex-col w-25vw items-start max-md:w-96 my-3.5">
            <div className="flex">
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
            </div>
            <h1 className="font-bold text-3xl">Page when looking at its</h1>
            <h1 className="font-bold text-xs">26 Anos. São Paulo, São Paulo</h1>
            <h2 className="text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center w-100vw h-85vh bg-slate-800 max-md:h-auto">
        <div className="container-service flex flex-wrap flex-col justify-around items-center max-md:my-15vh">
          <div className="flex flex-col justify-around items-center text-white my-7">
            <h1 className="font-bold text-center text-3xl">
              Why do we use it?
            </h1>
            <h2 className="text-center w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
          <div className="flex flex-wrap w-4/4 justify-center items-center">
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:opacity-85 duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:opacity-85 duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:opacity-85 duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
            <div className="flex justify-center items-center text-center w-48 h-48 bg-white my-4 max-w-[690px]: mx-4 hover:opacity-85 duration-150 ease-linear">
              <h1 className="w-3/4 font-semibold">
                Long established fact that a reader
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-15vh">
        <div className="container flex flex-wrap justify-around items-center">
          <div className="container-text flex flex-col w-1/2 items-center max-md:my-3.5">
            <h1 className="font-bold text-center text-3xl">
              Page when looking at its
            </h1>
            <h2 className="text-center">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
          <div className="container-image flex justify-center items-center ">
            {/* <div className="w-80 h-80 bg-zinc-300"></div> */}
            <Image src={ImageEmpty} width={520} height={520} alt="Image" />
          </div>
        </div>
      </section>

      <section className="flex justify-center my-15vh">
        <div className="container flex flex-wrap justify-around items-center">
          <div className="container-text flex flex-col w-25vw items-start max-md:w-96 my-3.5">
            <div className="flex">
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
            </div>
            <h1 className="font-bold text-3xl">Page when looking at its</h1>
            <h2 className="font-bold text-xs">26 Anos. São Paulo, São Paulo</h2>
            <h3 className="text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h3>
          </div>
          <div className="container-text flex flex-col w-25vw items-start max-md:w-96 my-3.5">
            <div className="flex">
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
              <Image src={StarRating} width={25} height={25} alt="" />
            </div>
            <h1 className="font-bold text-3xl">Page when looking at its</h1>
            <h1 className="font-bold text-xs">26 Anos. São Paulo, São Paulo</h1>
            <h2 className="text-start">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
        </div>
      </section>

      <Dropdown />

      <section className="flex flex-col items-center content-around justify-around my-15vh">
        <div className="container-service flex flex-wrap flex-col justify-around items-center h-auto">
          <div className="flex flex-wrap justify-center items-center">
            <Image
              src={SealSevenDays}
              width={120}
              height={120}
              alt=""
              className="cursor-pointer my-4 max-w-[690px]: mx-4 hover:opacity-85 ease-in-out duration-300"
            />
          </div>
          <div className="flex flex-col justify-around items-center">
            <h1 className="font-bold text-center text-3xl">
              Why do we use it?
            </h1>
            <h2 className="text-center w-1/2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
