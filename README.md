#  Welcome to My Portfolio

Hi! I'm a passionate **Full Stack Developer** with expertise in building modern, responsive web applications. This portfolio showcases my projects, skills, and professional experience.

## Live Demo

Visit my portfolio: [https://salwa-portfolio-salwas-projects-e922f067.vercel.app/](https://salwa-portfolio-salwas-projects-e922f067.vercel.app)

## About Me

I'm a dedicated developer with a strong foundation in **Next.js**, **React**, **TypeScript**, and **modern web technologies**. I specialize in creating user-friendly, high-performance applications with elegant UI/UX design.

### Key Highlights
-  Full Stack Development (Frontend & Backend)
-  Responsive & Mobile-First Design
-  Modern UI/UX with Tailwind CSS
-  Performance Optimized Applications
-  Backend Integration & API Development

##  Technical Skills

**Frontend:** React, Next.js, TypeScript, Tailwind CSS
**Backend:** Next.js, Nodemailer, REST APIs
**Tools:** Git, GitHub, Vercel, ESLint
**UI Components:** React Icons, Lottie Animations, SweetAlert2
**Other:** Responsive Design, Dark Mode, SEO Optimization

##  Portfolio Sections

This portfolio showcases:

- **About** - Learn more about my background and expertise
- **Projects** - My best work and accomplishments
- **Skills** - Technical proficiencies and expertise areas
- **Experience** - Professional work history and achievements
- **Education** - Academic background and certifications
- **Contact** - Easy way to reach me for opportunities

##  Design Highlights

-  Modern, clean, and professional design
-  Fully responsive on all devices
-  Optimized performance
-  Smooth animations and interactions
-  SEO optimized

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env.local` file in the root directory and add your configuration:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CONTACT_EMAIL=recipient@example.com
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page auto-updates as you edit files.

## Customization

### Update Personal Data

Edit the data files in `data/` directory:
- `personal-data.ts` - Your name, title, social links, resume URL
- `projects-data.ts` - Your projects
- `skills-data.ts` - Your technical skills
- `experience-data.ts` - Your work experience
- `education-data.ts` - Your educational background

### Customize Colors

The portfolio uses a blue color theme. Modify Tailwind CSS classes in components to change colors. Key color values are defined in component className attributes using hex codes like `#06B6D4`, `#0EA5E9`.

### Add Your Lottie Animations

Replace animation JSON files in `public/assets/lottie/` with your own Lottie animations.

## Build

Create a production build:

```bash
npm run build
```

## Start Production Server

After building, start the production server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project" and select your repository
5. Click "Deploy"
6. Add your environment variables in Vercel settings
7. Done! Your portfolio is live

### Deploy on Other Platforms

The portfolio can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- Your own VPS

## Contact Form Setup

The contact form uses Nodemailer to send emails. To enable it:

1. Generate an app password for your email (Gmail example: [App Passwords](https://myaccount.google.com/apppasswords))
2. Add to `.env.local`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   CONTACT_EMAIL=where-to-receive-emails@example.com
   ```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── homepage/          # Section components
│   ├── layouts/           # Header, footer
│   └── ui/                # Reusable UI components
├── data/                  # Static data (projects, skills, etc.)
├── public/                # Static assets
│   └── assets/
│       ├── image/         # Images
│       ├── lottie/        # Lottie animations
│       ├── png/           # PNG files
│       └── svg/           # SVG files
├── types/                 # TypeScript types
├── utils/                 # Utility functions
└── package.json
```

## Troubleshooting

### Missing Dependencies
If you get module not found errors, reinstall dependencies:
```bash
npm install
```

### Build Errors
Clear the build cache and rebuild:
```bash
rm -r .next
npm run build
```

### Environment Variables
Make sure `.env.local` is created and contains all required variables.

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## Support

If you encounter any issues, please create an issue in the repository.

