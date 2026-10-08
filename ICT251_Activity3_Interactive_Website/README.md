# ICT251 Activity 3 — Interactive Personal Website

## Student
Replace the student name and programme in `index.html` with your own Activity 2 information.

## Description
This is a responsive and interactive HTML5/CSS/JavaScript student portfolio prepared for ICT251 Web Technologies Activity 3.

## Four required JavaScript features
1. **Contact form validation and preview** — validates name, email and message, prevents page reload, and displays a local validated summary.
2. **Expandable project details** — buttons show and hide additional project information and expose their open/closed state.
3. **Gallery viewer** — Previous and Next buttons change the displayed photo and caption and correctly stop at the first and last photo.
4. **Project/skills search** — filters three projects/skills, has a Reset button and reports when there are no matches.

Additional features included:
- Light/dark theme switch.
- Mobile navigation menu.

## Before submission
Replace all placeholder personal content with the original Activity 2 content:
- Your About Me paragraph (50+ words)
- Your three hobbies
- Your learning steps/table
- Your three personal photos and captions/alt text
- Your Activity 2 video at `videos/intro.mp4`
- Your Activity 2 audio at `videos/voice.mp3`
- Your GitHub repository URL in the footer
- Your name/programme

Do not submit the placeholder media as your personal Activity 2 work.

## How to test locally
1. Open this folder in VS Code.
2. Install/use Live Server.
3. Open `index.html` with Live Server.
4. Test all navigation links.
5. Test the contact form with empty fields, spaces-only values and invalid email addresses.
6. Test valid form data and confirm that the page says the data was validated locally.
7. Open/close project details.
8. Test Previous/Next gallery buttons at both boundaries.
9. Search for `HTML`, `CSS`, `JavaScript`, and a term that does not exist.
10. Test theme and mobile navigation.
11. Test the video and audio after replacing the placeholder files.
12. Check the browser console for errors.

## Render deployment
For a plain HTML/CSS/JavaScript project:
- Root Directory: leave blank when `index.html` is at repository root
- Build Command: `echo "No build required"`
- Publish Directory: `.`
- Auto Deploy: enabled

After the first successful deployment, make one small improvement, commit it, wait for Render to redeploy, and verify the change at the same public URL.

## Source
MDN Web Docs: https://developer.mozilla.org/en-US/docs/Learn
