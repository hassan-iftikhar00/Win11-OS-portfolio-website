import { useState } from "react";
import { useMusic } from "../../context/Context";
import Image from "next/image";

import img2 from "../../../public/icons/spotify/heart.svg";
import img1 from "../../../public/icons/spotify/nohearth.png";
import speaker from "../../../public/icons/Speaker.svg";
import prox from "../../../public/icons/spotify/prox.svg";
import back from "../../../public/icons/spotify/back.svg";
import randoom from "../../../public/icons/spotify/randoom.svg";
import infinity from "../../../public/icons/spotify/infinity.svg";
import mic from "../../../public/icons/spotify/mic.png";
import pc from "../../../public/icons/spotify/pc.png";
import queue from "../../../public/icons/spotify/queue.png";
import RectangleThree from "../../../public/icons/spotify/RectangleThree.png";

import { Pause, Play } from "@phosphor-icons/react";

interface BottomSpotifyProps {
  handleNext: () => void;
  handlePrevious: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePlayPause: () => void;
  volume: number;
  isPlaying: boolean;
  musicNames: string[];
  Music: string[];
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  expanded: boolean;
}

export function BottomSpotify({
  handleNext,
  handlePrevious,
  handleVolumeChange,
  togglePlayPause,
  isPlaying,
  expanded,
}: BottomSpotifyProps) {
  const [imagem, setImagem] = useState(img1);

  function ToggleImage() {
    imagem === img1 ? setImagem(img2) : setImagem(img1);
  }
  const { musicNames, currentMusicIndex } = useMusic();

  return (
    <footer
      className={`bg-zinc-800 border-zinc-700 px-6 pt-3 ${
        expanded ? "pb-20" : "pb-0"
      } flex items-center justify-between`}
    >
      <div className="flex items-center gap-3">
        <Image src={RectangleThree} alt="play now" />
        <div className="flex flex-col">
          <p>{musicNames[currentMusicIndex]}</p>
        </div>
        <button onClick={() => ToggleImage()}>
          <Image src={imagem} alt="favorite" />
        </button>
      </div>

      <div className="flex items-center flex-col">
        <div className="flex items-center gap-3">
          <button>
            <Image src={infinity} alt="infinity" />
          </button>
          <button onClick={handlePrevious}>
            <Image src={prox} alt="prox" />
          </button>
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center right-3 top-36"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button onClick={handleNext}>
            <Image src={back} alt="back" />
          </button>
          <button>
            <Image src={randoom} alt="randoom" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 max-md:hidden">
        <button>
          <Image height={24} width={24} src={mic} alt="mic" />
        </button>
        <button>
          <Image height={24} width={24} src={queue} alt="queue" />
        </button>
        <button>
          <Image height={24} width={24} src={pc} alt="pc" />
        </button>
        <div className="flex gap-5">
          <Image src={speaker} alt="speaker" height={21} width={21} />
          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.1}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </footer>
  );
}
