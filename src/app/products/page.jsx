import React from 'react'

export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/items", {
        cache: "force-cache"
    });
    const data = await res.json();
    return (
        <div>
            {
                data?.map(singleProduct => {
                   return <div key={singleProduct?._id}>
                        <p>{singleProduct?.title}</p>
                        <p>{singleProduct?.productName}</p>
                    </div>
                })
            }
        </div>
    )
}
