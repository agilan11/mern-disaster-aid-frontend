import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import DetailsSection from "./DetailsSection";
import SupplySection from "./SupplySection";
import ImageSection from "./ImageSection";
import CategoriesSection from "./CategoriesSection";
import { Separator } from "@/components/ui/separator";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Supplyshed } from "@/types";
import { useEffect } from "react";
 
export const formSchema = z
  .object({
    shedName: z.string({
      required_error: "Shed name is required",
    }),

    city: z.string({
      required_error: "City is required",
    }),

    country: z.string({
      required_error: "Country is required",
    }),

    estimatedDeliveryTime: z.coerce.number({
      required_error: "Estimated delivery time is required",
      invalid_type_error: "Must be a valid number",
    }),

    categoriesStored: z.array(z.string()).nonempty({
      message: "Please select at least one category",
    }),

    supplies: z.array(
      z.object({
        name: z.string().min(1, "Supply item name is required"),
        quantity: z.coerce.number().min(0.01, "Quantity must be greater than 0"),
        unit: z.string().min(1, "Unit is required"),
        category: z.string().min(1, "Category is required"),
        expiryDate: z.coerce.date().optional(),
      })
    ),

    imageUrl: z.string().optional(),

    imageFile: z
      .instanceof(File, { message: "Image is required" })
      .optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type SupplyshedFormData = z.infer<typeof formSchema>;

type Props = {
    supplyshed?: Supplyshed;
    onSave: (supplyshedFormData: FormData) => void;
    isLoading: boolean;
};



const ManageSupplyshedForm = ({ onSave, isLoading, supplyshed }: Props) => {
    const form = useForm<SupplyshedFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          categoriesStored: [],
          supplies: [{ name: "", quantity: 0, unit: "", category: "", expiryDate: undefined,
          }],
        },
      });

      useEffect(() => {
        if (!supplyshed) return;
      
        const formattedSupplies = supplyshed.supplies.map((supply) => ({
          name: supply.name,
          quantity: supply.quantity,
          unit: supply.unit,
          category: supply.category,
          expiryDate: supply.expiryDate ? new Date(supply.expiryDate) : undefined, // Convert to Date object
        }));
      
        const updatedSupplyshed: SupplyshedFormData = {
          shedName: supplyshed.shedName,
          city: supplyshed.city,
          country: supplyshed.country,
          estimatedDeliveryTime: supplyshed.estimatedDeliveryTime,
          categoriesStored: supplyshed.categoriesStored.length > 0 
            ? supplyshed.categoriesStored as [string, ...string[]]
            : ["Other"], // fallback if somehow empty
          supplies: formattedSupplies,
          imageUrl: supplyshed.imageUrl,
          imageFile: undefined,
        };
      
        form.reset(updatedSupplyshed);
      }, [form, supplyshed]);
      

      const onSubmit = (formDataJson: SupplyshedFormData) => {
        const formData = new FormData();
      
        formData.append("shedName", formDataJson.shedName);
        formData.append("city", formDataJson.city);
        formData.append("country", formDataJson.country);
        formData.append(
          "estimatedDeliveryTime",
          formDataJson.estimatedDeliveryTime.toString()
        );
      
        formDataJson.categoriesStored.forEach((category, index) => {
          formData.append(`categoriesStored[${index}]`, category);
        });
      
        formDataJson.supplies.forEach((supply, index) => {
          formData.append(`supplies[${index}][name]`, supply.name);
          formData.append(`supplies[${index}][quantity]`, supply.quantity.toString());
          formData.append(`supplies[${index}][unit]`, supply.unit);
          formData.append(`supplies[${index}][category]`, supply.category);
          if (supply.expiryDate) {
            formData.append(
              `supplies[${index}][expiryDate]`,
              new Date(supply.expiryDate).toISOString()
            );
          }
        });
      
        if (formDataJson.imageFile) {
          formData.append("imageFile", formDataJson.imageFile);
        }
      
        onSave(formData);
      };
      
      

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gray-50 p-10 rounded-lg">
            <DetailsSection />
            <Separator />
            <CategoriesSection />
            <Separator />
            <SupplySection />
            <Separator />
            <ImageSection />
            {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )


};

export default ManageSupplyshedForm;