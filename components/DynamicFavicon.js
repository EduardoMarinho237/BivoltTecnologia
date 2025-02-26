import { useEffect, useState } from "react";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { library, icon } from "@fortawesome/fontawesome-svg-core";

library.add(faBolt);

const DynamicFavicon = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => setTheme(mediaQuery.matches ? "dark" : "light");

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);

    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const faIcon = icon({ prefix: "fas", iconName: "bolt" });
    if (!faIcon) return;

    const canvas = document.createElement("canvas");
    const size = 64; 
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = theme === "dark" ? "#ffffff" : "#09004f";

      const pathData = Array.isArray(faIcon.icon[4])
        ? faIcon.icon[4].join(" ")
        : faIcon.icon[4];

      if (typeof pathData === "string") {
        const path = new Path2D(pathData);

        const scale = 0.08; 
        ctx.save(); 

        ctx.translate(size / 2, size / 2);
        ctx.scale(scale, scale);
        ctx.translate(-faIcon.icon[0] / 2, -faIcon.icon[1] / 2);

        ctx.fill(path); 
        ctx.restore(); 
      }

      const faviconUrl = canvas.toDataURL("image/png");
      let link = document.querySelector("link[rel='icon']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "icon");
        link.setAttribute("type", "image/png");
        document.head.appendChild(link);
      }
      link.setAttribute("href", faviconUrl);
    }
  }, [theme]);

  return null;
};

export default DynamicFavicon;
