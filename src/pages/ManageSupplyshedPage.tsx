import ManageSupplyshedForm from "@/forms/manage-supplyshed-form/ManageSupplyshedForm";
import {
  useCreateMySupplyshed,
  useGetMySupplyshed,
  useUpdateMySupplyshed
} from "@/api/MySupplyshedApi";

 const ManageSupplyshedPage=()=> {
  const { createSupplyshed, isPending: isCreatePending } =
  useCreateMySupplyshed();
  const { supplyshed } = useGetMySupplyshed();

  const { updateSupplyshed, isPending: isUpdateLoading } =
  useUpdateMySupplyshed();

  const isEditing = !!supplyshed;

  return (
    <ManageSupplyshedForm supplyshed={supplyshed} onSave={ isEditing ? updateSupplyshed : createSupplyshed} isLoading={isCreatePending || isUpdateLoading} />
  )
}

export default ManageSupplyshedPage;
