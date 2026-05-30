import { neon } from '@neondatabase/serverless'
import DualLensSwipeCard from '@/components/dual-lens-swipe-card'

// Get today's date in Asia/Jakarta timezone (WIB)
function getTodayWIB(): string {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jakarta' }) // YYYY-MM-DD
}

export default async function Home() {
  const sql = neon(process.env.DATABASE_URL!)

  // Create table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS daily_readings (
      id SERIAL PRIMARY KEY,
      target_date DATE UNIQUE,
      verse_text TEXT,
      verse_source TEXT,
      fun_fact_text TEXT
    )
  `

  const todayDate = getTodayWIB()

  // Check if a reading exists for today
  const existingReading = await sql`
    SELECT * FROM daily_readings WHERE target_date = ${todayDate}
  `

  // If no reading exists for today, insert mock data
  if (existingReading.length === 0) {
    await sql`
      INSERT INTO daily_readings (target_date, verse_text, verse_source, fun_fact_text)
      VALUES (
        ${todayDate},
        'The light shines in the darkness, and the darkness has not overcome it.',
        'John 1:5',
        'The concept of ''zero'' as a numerical digit was fully developed in ancient India around the 5th century AD, fundamentally transforming global mathematics.'
      )
    `
  }

  // Select today's reading
  const result = await sql`
    SELECT * FROM daily_readings WHERE target_date = ${todayDate}
  `

  const reading = result[0]

  // Format date for display (e.g., "May 30")
  const displayDate = new Date(reading.target_date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <DualLensSwipeCard
      verseText={reading.verse_text}
      verseSource={reading.verse_source}
      funFactText={reading.fun_fact_text}
      displayDate={displayDate}
    />
  )
}
