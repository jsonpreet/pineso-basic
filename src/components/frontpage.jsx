import { useEffect, useState } from 'react'
import { Deso } from 'deso-protocol'
import reactImageSize from 'react-image-size'
import Post from './post'

const Frontpage = () => {
    const [deso, setDeso] = useState(null)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const deso = new Deso()
        if (deso) {
        let posts = deso.posts.getPostsStateless({
            MediaRequired: true,
        })
        posts.then(function (result) {
            let posts = result.PostsFound;
            let pins = [];
            posts.map(async(post) => {
            if (post.ImageURLs !== null && post.ImageURLs[0] !== '') {
                const { width, height } = await reactImageSize(post.ImageURLs[0])
                post.imageSize = { width, height }
                pins.push(post)
            }
            })
            setPosts(pins)
        })
        }
    }, [])

    console.log('Posts', posts)
    return (
        <div className='bg-white'>
        <div className='flex flex-col items-center justify-center min-h-screen py-4 px-4'>
            <div className='w-full lg:columns-7 sm:columns-3 gap-4'>
            {posts.length > 0 && posts.map((post, index) => {
                return <Post post={post} key={index} />
            })}
            </div>
        </div>
        </div>
    )
}

export default Frontpage