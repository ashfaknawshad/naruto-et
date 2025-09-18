# Naruto Episodes Tracker

A web app to track your progress watching Naruto episodes! Users can log in, mark episodes as watched, and have their progress saved forever using Supabase.

## Features
- User authentication (sign up, log in, log out)
- Persistent watched episodes tracking (stored in Supabase)
- Naruto-themed UI and confirmation emails
- Mobile-friendly, works as a PWA (add to iOS/Android home screen)

## Live Demo
[View the app on Vercel](https://your-vercel-url.vercel.app)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ashfaknawshad/naruto-et.git
   cd naruto-et
   ```
2. **Set up Supabase:**
   - Create a project at [Supabase](https://supabase.com)
   - Create a `watched_episodes` table with columns:
     - `id` (uuid, primary key, default: uuid_generate_v4())
     - `user_id` (uuid, references auth.users)
     - `episode_id` (text)
   - Enable email authentication in Supabase Auth settings.
   - Get your Supabase Project URL and anon public key.
3. **Configure your keys:**
   - In `script.js`, replace the placeholders for `SUPABASE_URL` and `SUPABASE_ANON_KEY` with your own values.
   - **Never commit your real keys to a public repo!**
4. **Deploy:**
   - Push to GitHub and connect to [Vercel](https://vercel.com) for instant deployment.

## Security
- **Do not expose your Supabase service role key or any sensitive credentials.**
- Only use the anon public key in your frontend code.
- This repo does not contain any sensitive keys.

## Credits
- Naruto logo and symbols are property of their respective owners, used here for fan purposes only.
- Built with ❤️ by Ashfak Nawshad

---

Feel free to fork, star, and contribute!
