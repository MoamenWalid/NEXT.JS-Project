import ArticleItem from "@/components/articles/ArticleItem";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw Error('Failed to fetch articles');
  
  const articles:Article[] = await res.json();  

  return (
    <section className="fix-height container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;
