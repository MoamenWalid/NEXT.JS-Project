import React from "react";
import Link from "next/link";
import { Article } from "@/utils/types";

interface ArticleItemProps {
  article: Article;
}

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-[#e8e8e8] hover:bg-[#f0f0f0] duration-300 w-full md:w-2/5 lg:w-1/4">
      <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
        {article.title}
      </h3>
      <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">
        {article.body}
      </p>
      <Link className="text-xl bg-[#3F51B5] hover:bg-p-[#3646a2] w-full block text-center p-1 text-white rounded-lg" href={`/articles/${article.id}`}>
        Read More
      </Link>
    </div>
  )
}

export default ArticleItem