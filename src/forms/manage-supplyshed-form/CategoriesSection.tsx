import {
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
  import { useFormContext } from "react-hook-form";
  import CategoryCheckbox from "./CategoriesCheckbox";
  import { supplyCategories } from  "@/config/supplyshed-options-config"; 
  
  const CategoriesSection = () => {
    const { control } = useFormContext();
  
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Categories</h2>
          <FormDescription>
            Select the types of supplies stored in this Warehouse
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="categoriesStored"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {supplyCategories.map((category) => (
                  <CategoryCheckbox key={category} category={category} field={field} />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default CategoriesSection;
  