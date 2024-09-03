import ArticleItem from "@/components/articles/ArticleItem";
import SearchArticleInput from "@/components/articles/SearchArticleInput";
import { Article } from "@/utils/types";

const ArticlesPage = async () => {
  // Delay 10s
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw Error('Failed to fetch articles');
  const articles:Article[] = await res.json();

  return (
    <section className="fix-height container m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesPage;
