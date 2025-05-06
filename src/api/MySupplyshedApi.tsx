import { Supplyshed } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMySupplyshed = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const getMySupplyshedRequest = async (): Promise<Supplyshed> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/supplyshed`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to get warehouse");
      }
      return response.json();
    };
  
    const { data: supplyshed, isLoading } = useQuery({
        queryKey: ["fetchMySupplyshed"],
        queryFn: getMySupplyshedRequest,
      });
      
  
    return { supplyshed, isLoading };
  };

export const useCreateMySupplyshed = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const createMySupplyshedRequest = async (
        supplyshedFormData: FormData
    ): Promise<Supplyshed> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/supplyshed `, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: supplyshedFormData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to create Warehouse");
      }
  
      return response.json();
    };
  
    const {
        mutate: createSupplyshed,
        isPending,
        isSuccess,
        error,
      } = useMutation<Supplyshed, Error, FormData>({
        mutationFn: createMySupplyshedRequest,
      });
      

  
    if (isSuccess) {
      toast.success("Warehouse created!");
    }
  
    if (error) {
      toast.error("Unable to update Warehouse ");
    }
  
    return { createSupplyshed , isPending };
  };

  export const useUpdateMySupplyshed = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const updateSupplyshedRequest = async (
      supplyshedFormData: FormData
    ): Promise<Supplyshed> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/supplyshed`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: supplyshedFormData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to update warehouse");
      }
  
      return response.json();
    };
  
    const {
      mutate: updateSupplyshed,
      isPending,
    } = useMutation({
      mutationFn: updateSupplyshedRequest,
      onSuccess: () => {
        toast.success("Warehouse updated");
      },
      onError: () => {
        toast.error("Unable to update Warehouse");
      },
    });
  
    return { updateSupplyshed, isPending };
  };