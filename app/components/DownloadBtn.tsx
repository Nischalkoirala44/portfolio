"use client"

import React from "react";
import { Download } from "lucide-react";

const DownloadBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cv.jpg";
    link.download = "Nischal_Koirala_CV.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-emerald-400 text-white hover:text-emerald-400 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      onClick={handleDownload}
    >
      <Download className="w-5 h-5" />
      Download CV
    </button>
  );
};

export default DownloadBtn;
