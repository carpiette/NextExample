import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { noto } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Ejemplo con REACT</title>
        {/*
        <link href="https://framework-gb.cdn.gob.mx/gm/v3/assets/styles/main.css" rel="stylesheet" />
        <link href="https://framework-gb.cdn.gob.mx/gm/v3/assets/images/favicon.ico" rel="shortcut icon"></link>
        */}
      </head>
      <body className={`${noto.className} antialiased`}>{children}
        {/* <main className="page"><div className="container">{children}</div></main> */}
      </body>
    </html>
  );
}
