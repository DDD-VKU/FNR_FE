import Image from "next/image";

    interface BlogCardProps {
        image: string;
        tag: string;
        title: string;
        days: string;
        content: string;
    }

    const BlogCard: React.FC<BlogCardProps> = ({ image, tag, title, days, content }) => {
        return (
        <>
          <div className="flex flex-col space-y-4">
            <Image
                src={image}
                width={817}
                height={500}
                unoptimized
                alt=""
                className="block object-cover items-center"
            />
                <div className="flex lg:space-x-6 items-center space-x-2">
                    <div className="flex space-x-2">
                        <Image
                            src={'/assets/icons/admin.svg'}
                            width={20}
                            height={20}
                            unoptimized
                            alt=""
                            className="block object-contain"
                        />
                        <p className="text-[#9F9F9F] text-base object-cover">Admin</p>
                    </div>
                    <div className="flex space-x-2">
                        <Image
                            src={'/assets/icons/calender.svg'}
                            width={20}
                            height={20}
                            unoptimized
                            alt=""
                            className="block object-contain"
                        />
                        <p className="text-[#9F9F9F] text-base object-contain">{days}</p>
                    </div>
                    <div className="flex space-x-2">
                        <Image
                            src={'/assets/icons/tag.svg'}
                            width={20}
                            height={20}
                            unoptimized
                            alt=""
                            className="block object-contain"
                        />
                        <p className="text-[#9F9F9F] text-base object-contain">{tag}</p>
                    </div>
                </div>
                <h1 className="font-bold text-3xl object-contain">{title}</h1>
                <div className="flex">
                    <p className="text-[#9F9F9F] text-[15px] ">
                        {content}
                    </p>
                </div>
                <a href=""><p className="font-bold text-base hover:underline">Read More</p></a>
          </div>  
        </>
    );
};

export default BlogCard;