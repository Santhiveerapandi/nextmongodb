## Create New NextJs Application
npx create-next-app@latest 

What is your project named?  nextmongodb
Would you like to use TypeScript?  Yes
Would you like to use ESLint?   Yes
Would you like to use Tailwind CSS?   Yes
Would you like your code inside a `src/` directory?  No 
Would you like to use App Router? (recommended)   Yes
Would you like to use Turbopack for `next dev`?   Yes
Would you like to customize the import alias (`@/*` by default)?  Yes

### Copy the .env.example file into .env.local
Update the password in the mongodb connection string
```
Example: 
MONGODB_URI="mongodb+srv://santhiveerapandi:<password>@cluster0.qi2eb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
```

get the password from https://cloud.mongodb.com/v2/66f3b5d5ebf26b4156284a96#/security/database
```
Login: San**@gmail.com
Password: *****
```

### 

### Document for NextJS
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
