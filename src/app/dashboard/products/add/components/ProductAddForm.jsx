"use client"
import { useRouter } from 'next/navigation';

export default function ProductAddForm() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.productName.value);
        const form = e.target;
        const productName = form.productName.value;
        const payload = { productName };
        const res = await fetch("http://localhost:3000/api/items", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        })
        const result = await res.json();
        console.log(result);
        form.reset();
        // alert("product added");
        router.push("/products");
        // router.refresh();

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
                <input type="text" name="productName" id="" className="border border-gray-300 rounded-md p-2" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
