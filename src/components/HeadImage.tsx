import Image from 'next/image';
const HeadImage = () => {

    return (
        <>
            <div className="relative">
                  <Image
                    src="/assets/images/overlay.png"
                    alt=""
                    width={1440}
                    height={316}
                    unoptimized
                    className="w-full block object-contain"
                  />

                <div className='absolute items-center space-y-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='font-bold lg:text-5xl text-3xl'>Shop</h1>
                    <p className='lg:text-base sm:text-sm'>Link from to</p>
                </div>
            </div>
        </>
    );
};

export default HeadImage;