import { determineNewHeight } from '@app/lib/functions'
import Image from 'next/future/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Post = ({post}) => {
    const pinRef = useRef(null)
    const [pinWidth, setWidth] = useState(0);
    const [pinHeight, setHeight] = useState(0);

    useLayoutEffect(() => {
        let width = pinRef.current?.offsetWidth;
        setWidth(width);
        let newHeight = determineNewHeight(post.imageSize.height, post.imageSize.width, width)
        setHeight(newHeight);
    }, [post]);
    
    return (
        <>
            <div ref={pinRef} key={post.PostHashHex} style={{ height: `${pinHeight}px` }} className={`bg-white rounded-lg mb-4 shadow-lg overflow-hidden relative`}>
                <Image
                src={post.ImageURLs[0]}
                alt='Picture of the author'
                sizes="100vw"
                fill
                />
            </div>
        </>
    )
}

export default Post