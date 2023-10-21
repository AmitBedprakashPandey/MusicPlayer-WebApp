import React, { useRef, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import {
  BiPlay,
  BiPause,
  BiExpandVertical,
  BiRewind,
  BiFastForward,
  BiShuffle,
  BiSkipPrevious,
  BiSkipNext,
  BiRepeat,
  BiVolumeFull,
  BiSolidPlaylist,
  BiX,
  BiDownload,
  BiShareAlt,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { AudioFile } from "./data";
export default function Audio({ audioList }) {
  const [isLoading, setIsLoading] = useState(false); // loading spinner
  const [opentModel, setOpenModel] = useState(false); // audio Model
  const [audioFiles, setAdioFiles] = useState(AudioFile);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(1);
  const [volume, setVolume] = useState(1.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durations, setDurations] = useState(0);
  const audioRef = useRef();
  const proBarRef = useRef();
  const currentTrack = audioFiles[currentTrackIndex];
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    audioRef.current.addEventListener("loadedmetadata", () => {
      if (isFinite(audioRef.current.duration)) {
        setDurations(audioRef.current.duration);
      }
    });
    setInterval(() => {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
      proBarRef.current.value = audioRef.current.currentTime;
    }, 1000);
  }, [currentTrackIndex, audioFiles, isPlaying,opentModel]);

  const AudioTime = (duration) => {
    const min = Math.floor(duration / 60);
    const returnMint = min < 10 ? `0${min}` : `${min}`;
    const sec = Math.floor(duration % 60);
    const returnSec = sec < 10 ? `0${sec}` : `${sec}`;
    return `${returnMint} : ${returnSec}`;
  };

  const changeRange = () => {
    audioRef.current.currentTime = proBarRef.current.value;
    setCurrentTime(proBarRef.current.value);
  };
  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
      proBarRef.current.value = audioRef.current.currentTime;
    } else {
      audioRef.current.play();
      proBarRef.current.value = audioRef.current.currentTime;
    }
    setIsPlaying(!isPlaying);
  };
  const ModelToggle = () => {
    if (opentModel) {
      setOpenModel(true);
    } else {
      setOpenModel(false);
    }
    setOpenModel(!opentModel);
  };
  const playNext = () => {
    setIsLoading(true);
    if (currentTrackIndex < audioFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setIsPlaying(true);
    }
    // After setting the new track, listen for the "canplay" event to know when it's ready.
    audioRef.current.oncanplay = () => {
      setIsLoading(false);
    };
  };

  const playPrevious = () => {
    setIsLoading(true);
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
    // After setting the new track, listen for the "canplay" event to know when it's ready.
    audioRef.current.oncanplay = () => {
      setIsLoading(false);
    };
  };

  const fastForward = () => {
    audioRef.current.currentTime += 5;
  };

  const rewind = () => {
    audioRef.current.currentTime -= 5;
  };

  const volumeRang = (e) => {
    setVolume(e);
    audioRef.current.volume = volume;
  };
  const handleEnded = () => {
    if (currentTrackIndex < audioFiles.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
      setIsPlaying(true); // Start playing the next track
    } else {
      setIsPlaying(false); // Stop playing if it's the last track
    }
  };
  return (
    <>
      <audio ref={audioRef} src={currentTrack.url} onEnded={handleEnded} />
      <div className="dark:bg-slate-800 z-40 py-4  bg-red-500 flex justify-between fixed bottom-0 left-0 right-0">
        <input
          type="range"
          ref={proBarRef}
          defaultValue={0}
          max={durations}
          value={currentTime}
          className="slider h-1 absolute top-0 p-0 m-0 w-full cursor-pointer"
          onChange={changeRange}
        />
        <div className=" mx-2 flex justify-center items-center gap-3 w-52 md:w-72">
          <div className="w-14 rounded-lg overflow-hidden">
            <img src={currentTrack.img} />
          </div>
          <div className="w-52 truncate ">
            <h1 className="text-base text-slate-700 dark:text-white text-ellipsis overflow-hidden">
              {currentTrack.title}
            </h1>
            <p className="text-xs text-slate-400 text-ellipsis overflow-hidden">
              {currentTrack.singers}
            </p>
          </div>
        </div>
        <div className="flex mt-1 mx-5 justify-center items-center ">
          <button className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10">
            <BiShuffle size={20} />
          </button>
          <button
            className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10"
            onClick={rewind}
          >
            <BiRewind size={30} />
          </button>
          <button
            className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10"
            onClick={playPrevious}
          >
            <BiSkipPrevious size={30} />
          </button>
          <div>
            {isLoading ? (
              <ClipLoader loading={isLoading} color="red" size={40} />
            ) : isPlaying ? (
              <button
                onClick={playPauseToggle}
                className=" bg-red-500 text-white rounded-full flex justify-center items-center w-10 h-10"
              >
                <BiPause size={30} />
              </button>
            ) : (
              <button
                onClick={playPauseToggle}
                className=" bg-red-500 text-white rounded-full flex justify-center items-center w-10 h-10"
              >
                <BiPlay size={30} />
              </button>
            )}
          </div>
          <button
            onClick={playNext}
            className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10"
          >
            <BiSkipNext size={30} />
          </button>
          <button
            className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10"
            onClick={fastForward}
          >
            <BiFastForward size={30} />
          </button>
          <button className="hidden lg:block md:block bg-slate-800 text-white rounded-full w-10 h-10">
            <BiRepeat size={20} />
          </button>
        </div>
        <div className="md:flex lg:flex gap-3 mt-1 flex-row-reverse md:mr-5 flex justify-center items-center">
          <button
            className="dark:text-slate-400 rounded-full flex justify-center items-center w-10 h-10 border-0"
            onClick={ModelToggle}
          >
            <BiSolidPlaylist size={20} />
          </button>
          <div class="relative group hidden lg:block">
            <div className="dark:text-red-600 rounded-full flex justify-center items-center w-10 h-10">
              <BiVolumeFull size={20} />
            </div>
            <div className="bg-slate-900 -rotate-90 hidden absolute -top-20 -left-14 p-0 m-0 cursor-pointer px-2 rounded-2xl">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => volumeRang(e.target.value)}
                className="slider h-3"
              />
            </div>
          </div>
          <div class="relative group hidden md:block lg:block">
            <div className="text-white dark:text-red-500 font-bold flex justify-center items-center w-10 h-10">
              <p className="uppercase  border border-red-500 p-0.5 rounded-sm text-xs">
                high
              </p>
            </div>
            <div className="h-44 w-36 bg-slate-700 hidden absolute -top-44 z-10 -left-14 px-2 rounded-2xl">
              {/* Audio Quality Div */}
            </div>
          </div>
          <div className="dark:text-slate-400 p-3 hidden lg:block">
            <span className="flex gap-1 text-xs">
              <p>{AudioTime(currentTime)}</p>/<p>{AudioTime(durations)}</p>
            </span>
          </div>
        </div>
      </div>

      <div className={`${opentModel ? '' : ' hidden'}`}>
        <div className="bg-slate-900  absolute  top-0 h-screen z-10 w-screen lg:flex justify-around">
        <button className="absolute top-3 right-3  rounded-full border-0 w-10 h-10 text-4xl flex justify-center items-center text-slate-400" onClick={ModelToggle}>
          <BiX />
        </button>
        <div className="w-auto h-auto lg:flex-col">
          <div className="p-3">
            <h4 className="text-slate-100 font-bold text-2xl">Now Playing</h4>
            <h6 className="text-slate-300 hidden lg:block">Playing From</h6>
          </div>
        <div className="flex p-2 gap-3 items-center lg:items-start lg:flex-col ">
            <div className="w-36 lg:w-64 rounded-2xl shadow-lg shadow-slate-950 overflow-hidden">
              <img src={currentTrack.img} />
            </div>
        <div className="flex flex-col">
              <h4 className="text-slate-100 font-bold text-2xl w-52 max-h-16 overflow-ellipsis overflow-hidden">
                {currentTrack.title}
              </h4>
              <h6 className="text-slate-400 text-base  w-52 truncate">
                Playing From iyfkuyfkussssssssssssssssssssssssyfkudfkutdfku
              </h6>
            </div>
          </div>
          <div className="p-2 flex justify-between items-center">
            <button className="text-white border rounded-full text-sm flex justify-center items-center gap-2 p-3">
              <BiDownload /> Download{" "}
            </button>
            <div className="flex gap-2 justify-center items-center">
              <button className="text-white border rounded-full text-sm flex justify-center items-center gap-2 p-3">
                <BiShareAlt />{" "}
              </button>
              <button className="text-white border rounded-full text-sm flex justify-center items-center gap-2 p-3">
                <BiDotsVerticalRounded />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-9/12">
          <div className="p-2 lg:w-10/6 h-5/7 rounded-md flex flex-row gap-3 lg:flex-col">
            <div className="flex items-center lg:flex-col lg:items-start gap-2 py-2">
              <h4 className="text-white capitalize text-lg lg:text-3xl font-medium">
                Queue
              </h4>
              <h4 className="hidden lg:block text-white capitalize text-base font-normal py-2">
                7 songs
              </h4>
            </div>
            <div className="flex lg:gap-3">
              <button className="text-red-500 lg:text-white lg:bg-red-500 lg:p-3 rounded-3xl px-2 flex justify-center items-center">
                Save <p className="hidden lg:block"> as Playlist</p>
              </button>
              <button className="capitalize text-white lg:text-white lg:border lg:p-3 px-2 rounded-3xl flex justify-center items-center">
                clear
              </button>
            </div>
          </div>
          <div className="hideScrollbar overflow-hidden overflow-y-scroll overflow-x-hidden h-[520px] md:h-[1050px] lg:h-[650px] flex flex-col">
            {audioFiles.map((doc, index) => (
              <li
                key={index}
                onClick={() => setCurrentTrackIndex(index)}
                className="flex justify-between items-center h-20"
              >
                <div className="flex">
                  <div className="py-6 px-3 text-white font-bold text-lg">
                    <BiExpandVertical />
                  </div>

                  <div className="rounded-2xl mr-3 p-2 shadow-lg w-16 shadow-slate-950 overflow-hidden">
                    <img src={doc.img} />
                  </div>
                  <div className="flex flex-col py-2">
                    <h4 className="text-slate-100 font-bold text-1xl w-32 truncate lg:w-auto">
                      {doc.title}
                    </h4>
                    <h6 className="text-slate-400 text-base  w-32 truncate lg:w-auto">
                      {doc.singers}
                    </h6>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="text-white rounded-full text-2xl flex justify-center items-center ">
                    <BiDownload />
                  </button>
                  <button className="text-white rounded-full text-2xl flex justify-center items-center ">
                    <BiDotsVerticalRounded />
                  </button>
                </div>
              </li>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
