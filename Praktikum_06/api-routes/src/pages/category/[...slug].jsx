import { useRouter } from "next/router";

const HalamanCategory = () => {
    const { query } = useRouter();
    return (
        <div>
            <h1>Halaman Category</h1>
            <p>Category: {Array.isArray(query.slug) && (
                <ul style={{ paddingLeft: 20 }}>
                    {query.slug.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}</p>
        </div>
    );
};

export default HalamanCategory;