import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { Grid } from 'react-loader-spinner'

function Home() {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
           try {
            const result = await appwriteService.getPosts();
            if (result) {
                setPosts(result.documents);
            }
           } catch (error) {
            console.log(error.message)
           } finally{
             setLoading(false);
           }
        }
        fetchPosts();
    }, [])


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96" aria-live="polite">
                <Grid
                    visible={true}
                    height="100"
                    width="100"
                    color="#50727B"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClass="grid-wrapper"
                />
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login to read posts content</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default Home
