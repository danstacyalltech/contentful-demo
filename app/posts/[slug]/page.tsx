import Link from "next/link"
import { draftMode } from "next/headers"

import MoreStories from "../../more-stories"
import Avatar from "../../avatar"
import Date from "../../date"
import CoverImage from "../../cover-image"

import { Markdown } from "@/lib/markdown"
import { getAllPosts, getPostAndMorePosts } from "@/lib/api"

// export async function generateStaticParams() {
//   const allPosts = await getAllPosts(true)

//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }))
// }

///////////////////////////////////////////////////////////////////////
export async function generateStaticParams() {
  try {
    const allPosts: {
      slug: string
      title: string
      data: string
      excerpt: string
      coverImage: { url: string }
      content: { json: []; links: [] }
      author: { name: string; picture: [] }
    }[] = await getAllPosts(true)

    // Check if allPosts is defined and is an array
    if (Array.isArray(allPosts)) {
      return allPosts.map((post) => ({
        slug: post.slug,
      }))
    } else {
      // Handle the case where getAllPosts did not return an array
      console.error("Error: getAllPosts did not return an array.")
      return []
    }
  } catch (error) {
    // Handle any other errors that might occur during the async operation
    console.error("Error fetching posts:", error)
    return []
  }
}
/////////////////////////////////////////////////////////////////////////

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled)

  return (
    <div className="container mx-auto px-5">
      <article>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {post.title}
        </h1>
        <div className="hidden md:block md:mb-12">
          {post.author && (
            <Avatar
              name={post.author.name}
              picture={post.author.picture}
            />
          )}
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={post.title}
            url={post.coverImage.url}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            {post.author && (
              <Avatar
                name={post.author.name}
                picture={post.author.picture}
              />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>

        <div className="max-w-4xl text-2xl mx-auto">
          <div className="prose">
            <Markdown content={post.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      <MoreStories morePosts={morePosts} />
    </div>
  )
}
