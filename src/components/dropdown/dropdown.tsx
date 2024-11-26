"use client";

import { useState } from "react";
import Image from "next/image";

import PlusButton from "../../assets/img/plus.png";
import ImageEmpty from "../../assets/img/Image Space.png";

export default function Dropdown() {
  const [dropdown, setDropdown] = useState("dropdown");

  const setDropdownActive = () => {
    setDropdown("setDropdown");

    if (document.getElementById("dropdown")) {
      return setDropdown("setDropdown");
    } else {
      return setDropdown("dropdown");
    }
  };

  const [dropdown2, setDropdown2] = useState("dropdown-2");

  const setDropdownActive2 = () => {
    setDropdown2("setDropdown-2");

    if (document.getElementById("dropdown-2")) {
      return setDropdown2("setDropdown-2");
    } else {
      return setDropdown2("dropdown-2");
    }
  };

  const [dropdown3, setDropdown3] = useState("dropdown-3");

  const setDropdownActive3 = () => {
    setDropdown3("setDropdown-3");

    if (document.getElementById("dropdown-3")) {
      return setDropdown3("setDropdown-3");
    } else {
      return setDropdown3("dropdown-3");
    }
  };

  return (
    <>
      <section className="my-15vh min-[]:">
        <section className="flex justify-center my-15vh">
          <div className="container flex flex-wrap justify-around items-center">
            <div className="container-image flex justify-center items-center ">
              {/* <div className="w-80 h-80 bg-zinc-300"></div> */}
              <Image
              src={ImageEmpty}
              width={520}
              height={520}
              alt="Image"
            />
            </div>
            <div className="container-dropdown-menu flex flex-col w-50vw items-center my-3.5">
              <div className="container">
                <div className="dropdown-menu flex justify-center items-center w-50vw h-16 border-2 bg-white border-gray-500 max-sm:cursor-pointer" onClick={setDropdownActive}>
                  <h1 className="text-center">Comprei o curso, e agora?</h1>
                  <span
                    className="absolute right-4 cursor-pointer p-2 max-sm:hidden"
                    onClick={setDropdownActive}
                  >
                    <Image
                      src={PlusButton}
                      width={20}
                      height={20}
                      alt="button to open and close dropdown menu"
                      className={dropdown}
                    />
                  </span>
                </div>
                <div
                  id={dropdown}
                  className="dropdown-menu-response flex justify-center items-center w-50vw h-16 border-4 border-green-500"
                >
                  <p className="text-center">
                    Basta você acessar o seu e-mail que utilizou para se
                    cadastrar no curso, te enviamos um e-mail de acesso.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="dropdown-menu flex justify-center items-center w-50vw h-16 border-2 bg-white border-gray-500 max-sm:cursor-pointer" onClick={setDropdownActive2}>
                  <h1 className="text-center">Quanto tempo tenho de acesso ?</h1>
                  <span
                    className="absolute right-4 cursor-pointer p-2 max-sm:hidden"
                    onClick={setDropdownActive2}
                  >
                    <Image
                      src={PlusButton}
                      width={20}
                      height={20}
                      alt="button to open and close dropdown menu"
                      className={dropdown2}
                    />
                  </span>
                </div>
                <div
                  id={dropdown2}
                  className="dropdown-menu-response flex justify-center items-center w-50vw h-16 border-4 border-green-500"
                >
                  <p className="text-center">
                    Basta você acessar o seu e-mail que utilizou para se
                    cadastrar no curso, te enviamos um e-mail de acesso.
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="dropdown-menu flex justify-center items-center w-50vw h-16 border-2 bg-white border-gray-500 max-sm:cursor-pointer" onClick={setDropdownActive3}>
                  <h1 className="text-center" >E se eu comprar e não gostar ?</h1>
                  <span
                    className="absolute right-4 cursor-pointer p-2 max-sm:hidden"
                    onClick={setDropdownActive3}
                  >
                    <Image
                      src={PlusButton}
                      width={20}
                      height={20}
                      alt="button to open and close dropdown menu"
                      className={dropdown3}
                    />
                  </span>
                </div>
                <div
                  id={dropdown3}
                  className="dropdown-menu-response flex justify-center items-center w-50vw h-16 border-4 border-green-500"
                >
                  <p className="text-center">
                    Basta você acessar o seu e-mail que utilizou para se
                    cadastrar no curso, te enviamos um e-mail de acesso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
