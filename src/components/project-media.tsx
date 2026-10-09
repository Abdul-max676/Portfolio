"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/lib/content";

type VideoItem = Extract<MediaItem, { type: "video" }>;

/**
 * A flat 16:9 frame with a hairline border, no shadow and square corners.
 * Images are cropped from the top. Videos are muted and loop; they autoplay
 * only on devices with a mouse and when reduced motion is off, and pause
 * whenever they scroll out of view. Touch devices show the poster with a
 * play button so no data is spent unasked.
 */
export function ProjectMedia({ media }: { media: MediaItem }) {
  return (
    <div className="mt-10">
      <div className="relative aspect-video overflow-hidden border border-line bg-bg">
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <FramedVideo media={media} />
        )}
      </div>
    </div>
  );
}

function FramedVideo({ media }: { media: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof IntersectionObserver === "undefined") return;

    const canAutoplay =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (canAutoplay) void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={media.poster}
        aria-label={media.alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover object-top"
      >
        <source src={media.src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-3 left-3 border border-line bg-bg px-3 py-1 text-pill text-fg transition-colors duration-(--dur-ui) ease-out hover:border-hover hover:text-hover focus-visible:border-hover focus-visible:text-hover"
      >
        {playing ? "Pause video" : "Play video"}
      </button>
    </>
  );
}