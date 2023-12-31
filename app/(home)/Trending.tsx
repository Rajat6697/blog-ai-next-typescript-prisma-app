import Link from "next/link";
import React from "react";

type TredingCardProps = {
  className?: string;
};

const TrendingCard = ({ className }: TredingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href="/"
    >
      <div className="z-0 relative w-full h-full bg-wh-500">image</div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          category
        </h4>
        <div className="text-wh-100 mt-2">Post title</div>
      </div>
    </Link>
  );
};

type Props = {};

const Trending = (props: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 text-wh-10 py-2 px-8 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          molestias sit.
        </p>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px]">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500" />
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" />
      </div>
      <p className="text-sm m-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit harum error esse perferendis consectetur! Iusto, vel debitis ab sit esse, earum consequuntur.
      </p>
    </section>
  );
};

export default Trending;
