"use client";
type NavBtnsProps = {
  setIsMenu: (value: boolean) => void;
};
import { MdDownload, MdMenu } from "react-icons/md";
import { toast } from "react-toastify";
export default function NavButtons({ setIsMenu }: NavBtnsProps) {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=15SWM8sZODPyILHNLz2dQMQMpaZq5Qqsp";
    link.download = "Kesava_Perumal_Fullstack_Developer.pdf";
    link.click();
    toast.success("Resume is downloading ✅", {position: "top-center",autoClose: 5000});
  };
  return (
    <>
      <div className="md:hidden flex bg-blue-500 gap-1 rounded-[20px] text-nowrap">
        <button onClick={downloadResume} className="flex items-center ml-3 hover:text-white gap-0.5">
          <i className="border rounded-full p-px">
            <MdDownload size={16} />
          </i>
          <span className="text-[17px]">Resume</span>
        </button>
        <button
          onClick={() => setIsMenu(true)}
          className="flex bg-blue-950 text-white p-1.5 items-center rounded-[20px]"
        >
          <i>
            <MdMenu size={30} />
          </i>
        </button>
      </div>

      <div className="md:flex hidden rounded-full ">
        <button onClick={downloadResume} className="cursor-pointer flex items-center p-1.5 pl-3 pr-3 gap-1 rounded-full bg-blue-950 text-white hover:bg-amber-50 hover:text-blue-950 hover:border">
          <i className="border rounded-full p-0.5">
            <MdDownload size={18} />
          </i>
          <span>Resume</span>
        </button>
      </div>
    </>
  );
}
