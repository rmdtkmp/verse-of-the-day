export default function DualLensSwipeCard() {
  return (
    <div className="h-screen flex overflow-x-scroll snap-x snap-mandatory no-scrollbar md:overflow-x-visible md:grid md:grid-cols-2">

      {/* Region 1 — Verse of the Day */}
      <div className="relative bg-[#1a1a1a] flex flex-col px-6 py-16 sm:px-10 md:px-16 overflow-hidden flex-shrink-0 w-screen max-w-screen snap-start md:w-auto md:max-w-none">
        <div className="quote-decor relative z-10 flex flex-col justify-center flex-1 py-8 min-w-0">
          <p
            className="text-[#f0f0f0] leading-snug tracking-tight text-lg sm:text-2xl md:text-[1.75rem] lg:text-3xl font-bold font-[family-name:var(--font-playfair)] break-words"
            style={{ textWrap: 'pretty' }}
          >
            For God so loved the world that he gave his one and only Son,
            that whoever believes in him shall not perish but have eternal life.
          </p>
        </div>

        <div className="absolute bottom-6 left-6 sm:left-10 md:left-16">
          <p className="text-[#707070] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)]">
            Verse of the Day
          </p>
          <p className="text-[#505050] text-xs tracking-[0.2em] mt-0.5 font-[family-name:var(--font-inter)]">
            John 3:16 &mdash; May 30
          </p>
        </div>
      </div>

      {/* Region 2 — Historical Context */}
      <div className="relative bg-[#f0eeeb] flex flex-col px-6 py-16 sm:px-10 md:px-16 overflow-hidden flex-shrink-0 w-screen max-w-screen snap-start md:w-auto md:max-w-none">
        <div className="flex-1 flex flex-col justify-center py-8 min-w-0">
          <p
            className="text-[#2a2a2a] italic leading-relaxed text-sm sm:text-base md:text-lg font-[family-name:var(--font-inter)] break-words"
            style={{ textWrap: 'pretty' }}
          >
            The Gospel of John was likely written between 90&ndash;110 AD &mdash; later than
            the synoptic gospels &mdash; and uniquely opens with a prologue mirroring the
            cosmological language of Genesis, positioning Christ as the pre-existent
            Logos, or &ldquo;Word,&rdquo; through whom all creation came into being.
          </p>
        </div>

        <div className="absolute bottom-6 right-6 sm:right-10 md:right-16 text-right">
          <p className="text-[#909090] text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-inter)]">
            Historical Context
          </p>
          <p className="text-[#b0b0b0] text-xs tracking-[0.2em] mt-0.5 font-[family-name:var(--font-inter)]">
            The Daily Witness
          </p>
        </div>
      </div>

    </div>
  )
}
