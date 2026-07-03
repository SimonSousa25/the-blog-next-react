import { Header } from "@/components/Header";

export default async function HomePage() {
  console.log('HomePage')

  return (
    <div>
     <Header />
    </div>
  );
}

/**
 * page.tsx = index.html (next procura na pasta que vc ta tentando acessar, se encontrar o page.tsx, o componente é renderizado)
 * app/page.tsx           -> /
 * app/about/page.tsx     -> /about
 * app/not-found/page.tsx -> /not-found
 */
