import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - Este é um blog com Next.js",
  description: "Essa é a descrição dessa página",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  {
    /** Todas as outras rotas vão ter estes 2 componentes */
  }
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Header</h1>
        </header>

        <div className="bg-red-500">{children}</div>
        {/** children que vem de -> page.tsx */}

        
        <footer>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
