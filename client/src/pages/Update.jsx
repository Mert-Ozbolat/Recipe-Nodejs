import { useNavigate, useParams } from "react-router-dom"
import Form from "../components/Form"
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";



const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const { data } = useQuery({
        queryKey: ["recipe"],
        queryFn: () =>
            api.get(`/api/v1/recipes/${id}`).then((res) => res.data.found),

    });

    // API Güncelleme isteği
    const { isLoading, mutate } = useMutation({
        mutationFn: (updateData) => {
            api.patch(`/api/v2/recipes/${id}`, updateData)
        },

        onSuccess: () => {
            toast.success("Güncelleme Başarılı");
            navigate(`/detay/${id}`)
        },

        onError: () => {
            toast.error(`Bir şeyler ters gitti`)
        }
    })


    return (
        <div>
            <h1 className="text-red-400 text-3xl font-bold">Tarifi Güncelle</h1>

            <Form isLoading={isLoading} mutate={mutate} recipeData={data} />
        </div>
    )
}

export default Update