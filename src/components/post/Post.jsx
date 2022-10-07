import { determineNewHeight } from '@app/lib/utils'
import Image from 'next/future/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Post = ({post}) => {
    const pinRef = useRef(null)
    const [pinWidth, setWidth] = useState(0);
    const [pinHeight, setHeight] = useState(0);
    const height = Math.round((post.imageSize?.height / post.imageSize?.width) * 254)
    const defaultHeight = determineNewHeight(post.imageSize?.width, post.imageSize?.height, 254)
    // useEffect(() => {
    //     const height = determineNewHeight(post.imageSize?.width, post.imageSize?.height, 254)
    //     setDefaultHeight(height)
    // }, [post.imageSize])

    useEffect(() => {
        if (pinRef.current) {
            const width = pinRef.current.offsetWidth;
            const newHeight = determineNewHeight(post.imageSize?.height, post.imageSize?.width, width)
            setHeight(newHeight);
        }
    }, [pinRef.current]);
    if (!isNaN(pinHeight) && pinHeight > 0) {
        height = pinHeight
    } else if (!isNaN(defaultHeight) && defaultHeight > 0) {
        height = defaultHeight   
    }
    return (
        <>
            <div ref={pinRef} style={{ height: `${!isNaN(height) && height > 0 ? height : post.imageSize?.height}px` }} className={`bg-white rounded-xl mb-4 shadow-lg overflow-hidden relative`}>
                <img
                    src={post.ImageURLs[0]}
                    alt='Picture of the author'
                />
            </div>
        </>
    )
}

export default Post