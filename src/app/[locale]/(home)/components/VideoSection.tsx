// Next.js
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets & Lucide Icons
import { videoSectionImage } from "@/assets";
import { Play } from "lucide-react";

const VideoSection = () => {
  const t = useTranslations("Sections.VideoSection.Alt");
  return (
    <section className="section-container">
      <div className="relative w-full mx-auto aspect-6384/3169 group cursor-pointer">
        <Image
          src={videoSectionImage}
          alt={t("video")}
          fill
          placeholder="blur"
          blurDataURL={videoSectionImage.src}
          sizes="(max-width: 1536px) 100vw, 1212px"
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-[62px] h-[62px] rounded-full border-4 border-white/30 bg-white/20 flex items-center justify-center backdrop-blur-[2px] group-hover:bg-white/30 transition-colors">
            <Play className="size-6 text-white fill-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
