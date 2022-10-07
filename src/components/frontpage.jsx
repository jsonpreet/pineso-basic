import { dehydrate, QueryClient } from '@tanstack/react-query'
import { getHotFeed, FetchHotFeed } from '@data/hot-feed'
import { withCSR } from '@lib/utils'
import { Post } from '@components/post'
import { Loader } from '@components/loader'

const Frontpage = () => {
    const { data: posts, isLoading, isFetching, isFetched, error, isError } = FetchHotFeed()
    
    if (isError) {
        return (
            <div className='flex flex-col justify-center items-center h-screen bg-white bg-opacity-50'>
                Error {error}
            </div>
        )
    }
    if (isLoading || isFetching) {
        return (
            <div className='flex flex-col justify-center items-center h-screen bg-white bg-opacity-50'>
                <Loader/>
            </div>
        )
    }
    if (isFetched) {
        return (
            <>
                <div className='w-full lg:columns-7 sm:columns-3 gap-4'>
                    {posts?.length > 0 && posts.map((post, index) => {
                        return <Post post={post} key={index} />
                    })}
                </div>
            </>
        )
    }
}

export default Frontpage

export const getServerSideProps = withCSR(async (ctx) => {
    let page = 1;
    if (ctx.query.page) {
        page = parseInt(ctx.query.page);
    }

    const queryClient = new QueryClient();

    let isError = false;

    try {
        await queryClient.FetchQuery(['hotfeed'], getHotFeed);
    } catch (error) {
        isError = true
        ctx.res.statusCode = error.response.status;
    }
    return {
        props: {
            //also passing down isError state to show a custom error component.
            isError,
            dehydratedState: dehydrate(queryClient),
        },
    }
})