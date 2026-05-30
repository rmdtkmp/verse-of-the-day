import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)
import DualLensSwipeCard from '@/components/dual-lens-swipe-card'

// Get today's date in WIB (UTC+7)
function getTodayWIB(): string {
  const now = new Date()
  const wibOffset = 7 * 60 // WIB is UTC+7
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
  const wibTime = new Date(utcTime + wibOffset * 60000)
  return wibTime.toISOString().split('T')[0] // YYYY-MM-DD
}

export default async function Home() {
  // Create table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS daily_readings (
      target_date DATE PRIMARY KEY,
      verse_text TEXT NOT NULL,
      verse_source TEXT NOT NULL,
      fun_fact_text TEXT NOT NULL
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
        'Zero is the only number that cannot be represented in Roman numerals. The concept of zero as a number was introduced to Europe through Arabic mathematicians who had learned it from Indian scholars around the 9th century.'
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
