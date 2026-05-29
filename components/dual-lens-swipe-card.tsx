export default function DualLensSwipeCard() {
  return (
    <>
      <style>{`
        /* Playfair Display ornamental double-quote via pseudo-elements */
        .quote-block::before {
          content: '\\201C';
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(7rem, 14vw, 12rem);
          line-height: 0.75;
          color: #d4d4d4;
          position: absolute;
          top: 2rem;
          left: 2rem;
          pointer-events: none;
          user-select: none;
          font-weight: 700;
        }
        .quote-block::after {
          content: '\\201D';
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(7rem, 14vw, 12rem);
          line-height: 0;
          color: #d4d4d4;
          position: absolute;
          bottom: 5.5rem;
          right: 2rem;
          pointer-events: none;
          user-select: none;
          font-weight: 700;
        }
        /* Hide scrollbar cross-browser */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/*
        Mobile: horizontal scroll-snap container, each region is full viewport width.
        Desktop (md+): side-by-side grid, equal height forced by items-stretch.
      */}
      <div
        className="
          w-full h-screen
          flex overflow-x-auto snap-x snap-mandatory no-scrollbar
          md:overflow-x-visible md:grid md:grid-cols-2
        "
        style={{ scrollBehavior: 'smooth' }}
      >

        {/* ── REGION 1 · Verse of the Day ── */}
        <section
          className="
            relative
            min-w-full md:min-w-0
            snap-start
            flex-shrink-0
            bg-[#1a1a1a]
            flex flex-col justify-center
            px-10 md:px-16
            py-16
            overflow-hidden
          "
        >
          {/* Pseudo-element quotes live on this div */}
          <div className="quote-block relative z-10 flex flex-col justify-center flex-1 py-12">
            <p
              className="
                text-[#f0f0f0]
                leading-snug tracking-tight
                text-3xl sm:text-4xl md:text-[2.6rem] lg:text-5xl
                font-bold
                max-w-xl
              "
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              For God so loved the world that he gave his one and only Son,
              that whoever believes in him shall not perish but have eternal life.
            </p>
          </div>

          {/* Bottom-left label */}
          <div className="absolute bottom-6 left-10 md:left-16">
            <p
              className="text-[#707070] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Verse of the Day
            </p>
            <p
              className="text-[#505050] text-xs tracking-[0.2em] mt-0.5"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              John 3:16 &mdash; May 30
            </p>
          </div>
        </section>

        {/* ── REGION 2 · Fun Fact ── */}
        <section
          className="
            relative
            min-w-full md:min-w-0
            snap-start
            flex-shrink-0
            bg-[#f0eeeb]
            flex flex-col justify-center
            px-10 md:px-16
            py-16
            overflow-hidden
          "
        >
          {/* Flex-1 centering wrapper for spatial balance */}
          <div className="flex-1 flex flex-col justify-center py-12">
            <p
              className="
                text-[#2a2a2a]
                italic
                leading-relaxed
                text-base sm:text-lg md:text-xl
                max-w-sm
              "
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              The Gospel of John was likely written between 90–110 AD — later than the
              synoptic gospels — and uniquely opens with a prologue mirroring the
              cosmological language of Genesis, positioning Christ as the pre-existent
              Logos, or &ldquo;Word,&rdquo; through whom all creation came into being.
            </p>
          </div>

          {/* Bottom-right label */}
          <div className="absolute bottom-6 right-10 md:right-16 text-right">
            <p
              className="text-[#909090] text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Historical Context
            </p>
            <p
              className="text-[#b0b0b0] text-xs tracking-[0.2em] mt-0.5"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              The Daily Witness
            </p>
          </div>
        </section>

      </div>
    </>
  )
}
