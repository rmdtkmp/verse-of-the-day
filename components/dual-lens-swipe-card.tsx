export default function DualLensSwipeCard() {
  return (
    <>
      <style>{`
        /* Ornamental double-quotes via CSS pseudo-elements — no text characters */
        .quote-block::before {
          content: '\\201C';
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.75;
          color: #d4d4d4;
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          pointer-events: none;
          user-select: none;
          font-weight: 700;
        }
        .quote-block::after {
          content: '\\201D';
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0;
          color: #d4d4d4;
          position: absolute;
          bottom: 3rem;
          right: 1.5rem;
          pointer-events: none;
          user-select: none;
          font-weight: 700;
        }

        /* Hide scrollbar cross-browser */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /*
          Scroll container: must have a fixed, known width so each snap-child
          can resolve 100% against it. width + max-width together prevent
          the container from growing beyond the viewport on mobile.
        */
        .swipe-container {
          width: 100%;
          max-width: 100%;
        }

        /*
          Each snap region on mobile: exactly 100vw wide — a concrete pixel
          boundary the browser can use for text wrapping.
        */
        .snap-region {
          width: 100vw;
          max-width: 100vw;
          flex-shrink: 0;
        }

        /* On md+ the grid takes over; unset the vw constraint */
        @media (min-width: 768px) {
          .snap-region {
            width: auto;
            max-width: none;
          }
        }

        /*
          Inner text column: fills the snap-region width minus padding.
          box-sizing ensures padding doesn't push it outside its parent.
        */
        .text-column {
          width: 100%;
          box-sizing: border-box;
          min-width: 0; /* prevent flex blow-out */
        }
      `}</style>

      {/*
        Mobile  → horizontal scroll-snap, one card per viewport width.
        Desktop → side-by-side grid, equal height via items-stretch default.
      */}
      <div
        className="
          swipe-container
          h-screen
          flex overflow-x-scroll snap-x snap-mandatory no-scrollbar
          md:overflow-x-visible md:grid md:grid-cols-2
        "
      >

        {/* ── REGION 1 · Verse of the Day ── */}
        <section
          className="
            snap-region snap-start
            relative
            bg-[#1a1a1a]
            flex flex-col
            px-6 sm:px-10 md:px-16
            py-16
            overflow-hidden
          "
        >
          <div className="quote-block relative z-10 flex flex-col justify-center flex-1 py-8">
            <div className="text-column">
              <p
                className="
                  text-[#f0f0f0]
                  leading-snug tracking-tight
                  text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl
                  font-bold
                "
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  textWrap: 'pretty',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                For God so loved the world that he gave his one and only Son,
                that whoever believes in him shall not perish but have eternal life.
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 sm:left-10 md:left-16">
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
            snap-region snap-start
            relative
            bg-[#f0eeeb]
            flex flex-col
            px-6 sm:px-10 md:px-16
            py-16
            overflow-hidden
          "
        >
          <div className="flex-1 flex flex-col justify-center py-8">
            <div className="text-column">
              <p
                className="
                  text-[#2a2a2a]
                  italic
                  leading-relaxed
                  text-sm sm:text-base md:text-lg
                "
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  textWrap: 'pretty',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                The Gospel of John was likely written between 90–110 AD — later than
                the synoptic gospels — and uniquely opens with a prologue mirroring the
                cosmological language of Genesis, positioning Christ as the pre-existent
                Logos, or &ldquo;Word,&rdquo; through whom all creation came into being.
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 sm:right-10 md:right-16 text-right">
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
