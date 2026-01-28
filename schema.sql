-- Webinar signups table for Cloudflare D1
CREATE TABLE IF NOT EXISTS webinar_signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  questions TEXT,
  language TEXT DEFAULT 'en',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster email lookups (to check duplicates if needed)
CREATE INDEX IF NOT EXISTS idx_email ON webinar_signups(email);
