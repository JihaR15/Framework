import { useRouter } from "next/router";

const HalamanBlog = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>Blog: {slug}</div>
    )
}

export default HalamanBlog;