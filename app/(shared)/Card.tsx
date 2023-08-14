import Link from 'next/link';
import React from 'react'

type Props = {
    className?: string;
    imageHeight?: string;
    isSmallCard?: boolean;
    isLongForm?: boolean;
}

const Card = ({className, imageHeight, isSmallCard = false, isLongForm = false}: Props) => {
  return (
    <div className={className}>
        <Link className='basis-full hover:opacity-70' href="/">
            <div className={`relative w-auto mb-3 ${imageHeight}`}>
                image
            </div>
        </Link>
        <div className='basis-full'>
        <Link href="/">
            <h4 className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
            `}>title</h4>
        </Link>
        <div  className={`${isSmallCard ? "my-2" : "flex my-3" } gap-3`}>

            <h5 className='font-semibold text-xs'>
                author 
            </h5>
            <h6 className='text-wh-300 text xs'>
                date
            </h6>

        </div>
        <p className={`text-wh-100 ${isLongForm ? "line-clamp-5" : "line-clamp-3"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum at nam veritatis dicta. Aspernatur eveniet sit eum, saepe molestiae quidem repudiandae neque expedita quis. Deleniti placeat exercitationem voluptatibus ipsum.
        Officia est sed aspernatur fuga ad dolore, nihil voluptas accusamus eaque eos aliquid iusto ducimus fugiat! At tempore nostrum, alias, beatae quo ipsa veniam error, excepturi sunt nemo ducimus tenetur!
        Omnis ratione facere voluptatum, sed esse eum eaque totam facilis nobis hic recusandae, delectus beatae reiciendis eius tempora accusamus at aut aspernatur vero ab. Quod alias deserunt maxime a aut.
        </p>
        </div>
    </div>
  )
}

export default Card