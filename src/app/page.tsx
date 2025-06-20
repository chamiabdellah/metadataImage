import Image from "next/image";
import {Metadata} from "next";
import Script from "next/script";
import dompurify from "isomorphic-dompurify";

export default function Home() {
  return (
      <>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples _ 43
        </a>
        <video
            src={'https://metadata-image.vercel.app/prev.mp4'}
            poster={videoData.thumbnailUrl}
            controls
            playsInline
            className="w-full h-full rounded-lg shadow-lg"
        />
      </footer>
      <Script
      id="post-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: dompurify.sanitize(JSON.stringify( {"@context":"https://schema.org","@type":"Article","headline":"Blaubeerwaffel selbstgemacht 😋 Mmmh ...lecker!","name":"Blaubeerwaffel selbstgemacht 😋 Mmmh ...lecker!","description":"Blaubeerwaffel selbstgemacht 😋 Mmmh ...lecker! 🧇 in Rekordzeit 5 cm hohe, gefüllte Waffeln backen 🧇 Anti-Haft-beschichtete Waffelplatten 🧇 automatische Temperaturregelung","image":"https://qas.hse.de/dpl/files/streamer/streamer/11def651-e148-494d-8e4a-bea98016f2f9/image-posts/43d901cc-c055-41d6-a447-f92d05cb6f12/2025_06_12_16_19_46_64d1d0720ede4996952f164a647d281e.png"})).replace(/&nbsp;/g, ' ') }}
      />
    </div>
        </>
  );
}

const videoData = {
  title: "HSE Video Preview",
  description: "This test page should shows a preview of the video",
  videoUrl: "https://metadata-image.vercel.app/prev.mp4",
  thumbnailUrl: "https://metadata-image.vercel.app/previ_img.png",
  duration: "5:27",
  publishedAt: "2025-04-03",
  width: 1920,
  height: 1080,
  tags: ["hse"]
}

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: videoData.title,
    description: videoData.description,
    //metadataBase: new URL('https://metadata-image.vercel.app/'),
    alternates: {
      canonical: 'https://metadata-image.vercel.app',
      media: {title: "direct Link", url: "https://metadata-image.vercel.app/prev.mp4"}
    },
    facebook: {
      appId: '87741124305',
    },
    openGraph: {
      title: videoData.title,
      description: videoData.description,
      type: 'video.other',
      videos: [{
            url: 'https://metadata-image.vercel.app/prev.mp4',
            secureUrl: videoData.videoUrl,
            width: videoData.width,
            height: videoData.height,
            type: 'video/mp4',
          }],
      siteName: 'HSE',
      images: [{
          url: 'https://metadata-image.vercel.app/previ_img.png',
          width: 1200,
          height: 630,
          alt: `${videoData.title} - Taught by Me`,
        }],
      url: 'https://metadata-image.vercel.app/*',
    },
    other: {
      'og:video:url': 'https://metadata-image.vercel.app/prev.mp4',
      'og:video:secure_url': 'https://metadata-image.vercel.app/prev.mp4',
    }
  }
}
