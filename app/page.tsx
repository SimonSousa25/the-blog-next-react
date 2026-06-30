export default function HomePage() {
  return <h1>Olá de dentro de page.tsx</h1>;
}

/**
 * page.tsx = index.html (next procura na pasta que vc ta tentando acessar, se encontrar o page.tsx, o componente é renderizado)
 * app/page.tsx           -> /
 * app/about/page.tsx     -> /about
 * app/not-found/page.tsx -> /not-found
 */