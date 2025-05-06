import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import SupplyItemInput from "./SupplyItemInput";

const SupplySection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "supplyItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Supply Items</h2>
        <FormDescription>
          Add the supply items that you have
        </FormDescription>
      </div>
            <FormField
            control={control}
            name="supplyItems"
            render={() => (
              <FormItem className="flex flex-col gap-2">
                {fields.map((_, index) => (
                  <SupplyItemInput
                    index={index}
                    removeSupplyItem={() => remove(index)}
                  />
                ))}
              </FormItem>
            )}
            />
            <Button
            type="button"
            onClick={() =>
              append({
                name: "",
                quantity: 0,
                unit: "",
                category: "",
                expiryDate: "",
              })
            }
          >
            Add Supply Item
          </Button>
          
    </div>
)
};

export default SupplySection;