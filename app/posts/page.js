import Link from "next/link"

export default function Posts() {
    const posts = [

        { id: 1, title: 'Java Post', link: '/posts/post_1' },
        // 필요한 만큼 추가
    ];

    return (
        <div>
            <h4 className="title">POSTS</h4>
            {posts.map((post) => (
                <div key={post.id} className="post-view">
                    <h4>
                        <Link href={`/posts/post_1`}><h4 className="post-text">{post.title}</h4></Link>

                    </h4>
                </div>
            ))}
        </div>
    );
}