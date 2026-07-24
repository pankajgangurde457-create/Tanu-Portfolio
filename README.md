# Tanu Pal Portfolio

A world-class, recruiter-friendly personal portfolio website designed for **Tanu Pal** (Final Year Diploma Student in Information Technology). 

Inspired by the design aesthetics of **Apple, Vercel, Linear, Framer, and Raycast**, this application features a **Dark Premium theme** (`#050505` background, `#111111` cards, `#262626` borders, pure white text, `#A1A1AA` secondary text, and subtle white glow accents).

---

## 📸 Preview & Screenshots

![Portfolio Hero Screenshot](https://via.placeholder.com/1200x675/050505/ffffff?text=Tanu+Pal+Portfolio+-+Hero+Section)

> *Place screenshot of Hero Section above*

![Portfolio Projects & Gallery Screenshot](https://via.placeholder.com/1200x675/050505/ffffff?text=Tanu+Pal+Portfolio+-+Projects+%26+Gallery)

> *Place screenshot of Projects & Creative Gallery above*

---

## ✨ Key Features

- **Dark Premium Aesthetic**: Minimal, dark, glassmorphic UI with soft radial cursor glow and magnetic hover buttons.
- **Hero & Profile Showcase**: High-res profile visual, role badges, interactive status indicator, and quick CTA actions.
- **Quick Stats Counter**: Smooth scroll-triggered animated counters for projects, social media carousels, internships, and technical certifications.
- **Academic Pathway Timeline**: Modern step-by-step timeline detailing education at Vidyalankar Polytechnic.
- **Industry Experience**: Marketing Lead Internship at Kaevron Technologies showcasing content strategy, branding, and developer collaboration.
- **Tech Stack Grid**: Categorized cards for Frontend, Backend, Databases, Programming (Java), Tools, and AI (Prompt Engineering).
- **Featured AI Projects**: Detailed project cards with live demo links, repository buttons, tech tags, and feature inspection modals.
- **Creative Gallery & Lightbox**: Multi-slide PDF carousels extracted from Kaevron Technologies campaigns with full-screen page navigation.
- **Technical Credentials**: Card previews and 1-click PDF view/download options for Java Programming, SQL, IoT, and Cyber Security.
- **Official Resume Viewer**: Embedded PDF preview container with instant open and download capabilities.
- **Interactive Contact Form**: Direct email (`tanup200860@gmail.com`) with 1-click Copy-to-Clipboard toast button and interactive form state.

---

## 🛠️ Tech Stack

- **Core**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Dark Premium Glassmorphism
- **Animations**: Framer Motion
- **Icons**: Lucide React Icons
- **Performance**: Lazy loading, high-res PDF asset pre-rendering, responsive mobile drawer

---

## 📁 Folder Structure

```
c:\Users\pal04\OneDrive\Desktop\Tanu Office\Certificates Tanu/
├── public/
│   └── assets/
│       ├── tanu-photo.jpeg
│       ├── tanu-resume.pdf
│       ├── carousels/
│       │   ├── carousel_1/ (slide_1.png ... slide_5.png)
│       │   └── carousel_2/ (slide_1.png ... slide_6.png)
│       └── certificates/
│           ├── java_programming.pdf / java_programming_preview.png
│           ├── sql_data_analysis.pdf / sql_data_analysis_preview.png
│           ├── iot_basics.pdf / iot_basics_preview.png
│           └── cyber_threats.pdf / cyber_threats_preview.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── QuickStats.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── CreativeGallery.jsx
│   │   ├── Certificates.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CursorGlow.jsx
│   │   ├── LightboxModal.jsx
│   │   └── MagneticButton.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── techStack.js
│   │   ├── certificates.js
│   │   └── gallery.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) installed on your machine.

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tanupal15/portfolio.git
cd portfolio
npm install
```

### 2. Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your web browser.

### 3. Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel

1. Push your code to GitHub: `https://github.com/tanupal15/portfolio`
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Set Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

### Deploy to Netlify

1. Log into [Netlify](https://www.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
2. Select GitHub and choose `https://github.com/tanupal15/portfolio`.
3. Configure settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click **Deploy Site**.

---

## 👤 Author

**Tanu Pal**
- **Role**: Final Year IT Diploma Student • Frontend Developer • AI Enthusiast • Marketing Lead
- **GitHub**: [https://github.com/tanupal15](https://github.com/tanupal15)
- **LinkedIn**: [https://linkedin.com/in/tanu-pal-808036361](https://linkedin.com/in/tanu-pal-808036361)
- **Email**: [tanup200860@gmail.com](mailto:tanup200860@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
