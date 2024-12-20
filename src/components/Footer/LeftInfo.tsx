import React from "react";
import { Image } from "primereact/image";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { LiaDiscord } from "react-icons/lia";
import { PiVideoFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiBilibiliLine } from "react-icons/ri";

const LeftLogo: React.FC = () => {
  const { t } = useTranslation(["Header"]);

  return (
    <div className="w-60 h-40 flex flex-col">
      <Link to="/" className="mb-1 inline-block">
        <Image
          src="/images/logo/datapanda.png"
          alt="logo"
          className="w-full"
          width="34px"
          height="30px"
        />
        <Image
          src="/images/logo/datapandapng"
          alt="logo"
          className="hidden w-full "
          width="34px"
          height="30px"
        />
      </Link>
      <p className="mt-1 text-[12px] text-white leading-relaxed text-body-color ">
        © 2024 DataPanda
      </p>
      <p className="text-[12px] text-white">
        <Link to="#">{t("Terms")}</Link> ·
        <Link to="#">{t("Attributions")}</Link> ·
        <Link to="https://console.datapanda.xyz/register" target="_blank">{t("SignIn")}</Link>
      </p>
      <div className="flex items-center pt-2">
        <Link
          to="https://github.com/datapanda-xyz"
          className="mr-2 text-body-color duration-300 hover:text-primary  "
        >
          <FiGithub className="text-white" />
        </Link>
        <Link
          to="https://discord.gg/gpNhGGbT"
          className="mr-2 text-body-color duration-300 hover:text-primary  "
        >
          <LiaDiscord className="text-white" />
        </Link>
        <Link
          to="https://www.youtube.com/@datapanda"
          className="mr-2 text-body-color duration-300 hover:text-primary  "
        >
          <PiVideoFill className="text-white" />
        </Link>
        <Link
          to="https://space.bilibili.com/1616514069"
          className="mr-2 text-body-color duration-300 hover:text-primary  "
        >
          <RiBilibiliLine className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default LeftLogo;
