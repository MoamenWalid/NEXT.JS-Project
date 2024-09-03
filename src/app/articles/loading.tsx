import "@/app/_scss/loading.scss";
const articleSkeleton = [1, 2, 3, 4, 5, 6];

const Loading = () => {
  return (
    <section className="fix-height container m-auto px-5">
      <div className="search is-loading my-5 h-[52px] w-full md:w-2/3 m-auto"></div>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articleSkeleton.map((item) => (
          <div key={item} className="cart is-loading p-5 rounded-lg my-1 min-h-[159.2px] shadow-lg w-full md:w-2/5 lg:w-1/4">
            <h3 className="h-[28px] w-full"></h3>
            <p className="my-2 p-1 h-[36px] w-full"></p>
            <div className="h-[36px] w-full rounded-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;
