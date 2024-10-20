import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import api from '../api';
import { LoaderSm } from './Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const DeleteButton = ({ productId }) => {
    const navigate = useNavigate();

    const { isLoading, mutate } = useMutation({
        mutationFn: () => api.delete(`/api/v1/recipes/${productId}`),

        onSuccess: () => {
            navigate("/");
            toast.success("Tarif Kaldırıldı");
        },

        onError: () => {
            toast.error("İşlem Başarısız");
        },
    });

    return (
        <button
            disabled={isLoading}
            onClick={mutate}
            className="bg-red-500 py-1 px-4 rounded-md text-white font-semibold text-lg hover:bg-red-600 flex gap-w items-center">

            {isLoading ? (
                <LoaderSm />
            ) : (
                <>
                    <FaTrashAlt />
                    Sil
                </>
            )}
        </button>
    );
};

export default DeleteButton;
