'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[480px] rounded-2xl overflow-hidden">
        {/* Main image */}
        <div
          className="col-span-2 row-span-2 relative cursor-pointer group"
          onClick={() => { setActiveIndex(0); setLightbox(true) }}
        >
          <Image
            src={images[0]}
            alt={`${title} - main`}
            fill
            priority
            className="object-cover group-hover:brightness-90 transition-all"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Thumbnails */}
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="relative cursor-pointer group"
            onClick={() => { setActiveIndex(i < images.length ? i : 0); setLightbox(true) }}
          >
            {images[i] ? (
              <Image
                src={images[i]}
                alt={`${title} - ${i + 1}`}
                fill
                className="object-cover group-hover:brightness-90 transition-all"
                sizes="25vw"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 text-xs">No image</span>
              </div>
            )}
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={e => { e.stopPropagation(); setActiveIndex(i => Math.max(0, i - 1)) }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]" onClick={e => e.stopPropagation()}>
            <Image
              src={images[activeIndex] || images[0]}
              alt={title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); setActiveIndex(i => Math.min(images.length - 1, i + 1)) }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
