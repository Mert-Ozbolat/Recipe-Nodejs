import { useQuery } from "@tanstack/react-query";
import api from "../api";
import Card from "../components/Card";
import Search from "../components/Search";
import Sort from "../components/Sort";
import { useState } from "react";
import { useDebounce } from "@uidotdev/usehooks"


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const debouncedTerm = useDebounce(searchTerm, 500)
    const [order, setOrder] = useState(null);  // Sıralama durumu

    const params = {
        order,
        search: debouncedTerm,
    }

    const { isLoading, error, data } = useQuery({
        queryKey: ["recipes", order, debouncedTerm],
        queryFn: () => api.get("/api/v1/recipes", { params }).then((res) => res.data.recipes),
    });

    return (
        <main className="overflow-y-auto">
            <Search setSearchTerm={setSearchTerm} />

            <section>
                {isLoading ? (
                    "Loader"
                ) : error ? (
                    "Error"
                ) : (
                    <>
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl my-5">{data.length} Tarif bulundu</h1>
                            <Sort setOrder={setOrder} />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {data.map((i) => (
                                <div key={i.id}>
                                    <Card key={i.id} recipe={i} />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
        </main>
    );
};

export default Home;
