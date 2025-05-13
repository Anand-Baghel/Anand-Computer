# MPOnline Web Portal

A modern web portal for government services in Madhya Pradesh, built with Next.js and TypeScript.

## Features

- Modern, responsive UI design
- Contact form with email notifications
- Service catalog
- News and updates section
- Mobile-friendly interface

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- SMTP server access for email functionality

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd mponline-web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with the following variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
ADMIN_EMAIL=admin@mponline.gov.in
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Configuration

To enable email functionality:

1. For Gmail:
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in SMTP_PASSWORD

2. For other SMTP providers:
   - Update SMTP_HOST and SMTP_PORT accordingly
   - Use appropriate credentials

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │   
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
└── styles/
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Formik & Yup
- Nodemailer
- React Icons

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License. 