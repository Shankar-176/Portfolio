
# Sankar Portfolio (React + Vite + Tailwind)

A clean, modern developer portfolio for **Sankar Srinivasa Reddy** with a working **EmailJS contact form**, smooth sections, and project placeholders.

## ✨ Tech
- React 18 + Vite
- Tailwind CSS
- Framer Motion (header animation)
- EmailJS (contact form)

## 🚀 Getting Started
```bash
npm install
npm run dev
```
Then open the shown local URL in your browser.

## 📨 Contact Form (EmailJS)
1. Create an account at https://www.emailjs.com/
2. Add an Email Service → note the **Service ID**
3. Create an Email Template with fields: `from_name`, `reply_to`, `message`, `to_email` → note the **Template ID**
4. Create a **Public Key**
5. Copy `.env.sample` to `.env` and fill the values:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
> Restart `npm run dev` after editing `.env`.

## 🖼 Project Images & Links
- Replace the placeholder images in `src/assets/project-*.png`
- Update `repo` and `demo` links in `src/data/profile.js` for each project

## 🧱 Customize Content
All content is centralized in:  
`src/data/profile.js`

## 🌐 Deploy
- **Vercel**: Push to GitHub → Import repo in Vercel → Deploy
- **Netlify**: New site from Git → Build command `npm run build`, Publish dir `dist`
- **GitHub Pages**: Use `vite` + an adapter or deploy `dist` via actions (Vercel/Netlify recommended)

## 📁 Structure
```
sankar-portfolio/
  src/
    components/ (UI sections)
    data/profile.js (your details)
    assets/ (project images)
    styles/index.css
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
```

---


