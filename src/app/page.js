import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from './page.module.css'
import Link from "next/link";



async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!response.ok) {
    logger.error('Não foi possivel trazer os dados dos posts')
    return []
  }
  logger.info('posts obtidos com sucesso!')
  return response.json();
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost post={post} key={post.id} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Pagina Anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Proxima Pagina</Link>}
      </div>
    </main>
  );
}
