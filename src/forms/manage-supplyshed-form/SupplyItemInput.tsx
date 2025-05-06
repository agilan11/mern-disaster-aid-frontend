import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeSupplyItem: () => void;
};

const SupplyItemInput = ({ index, removeSupplyItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
<FormField
  control={control}
  name={`supplies.${index}.name`}
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center gap-1">
        Name <FormMessage />
      </FormLabel>
      <FormControl>
        <Input
          {...field}
          placeholder="Gloves"
          className="bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>

<FormField
  control={control}
  name={`supplies.${index}.quantity`}
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center gap-1">
        Quantity <FormMessage />
      </FormLabel>
      <FormControl>
        <Input
          type="number"
          step="1"
          {...field}
          placeholder="10"
          className="bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>

<FormField
  control={control}
  name={`supplies.${index}.unit`}
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center gap-1">
        Unit <FormMessage />
      </FormLabel>
      <FormControl>
        <Input
          {...field}
          placeholder="kg / boxes / litres"
          className="bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>

<FormField
  control={control}
  name={`supplies.${index}.category`}
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center gap-1">
        Category <FormMessage />
      </FormLabel>
      <FormControl>
        <Input
          {...field}
          placeholder="Medical / Food / Others"
          className="bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>

<FormField
  control={control}
  name={`supplies.${index}.expiryDate`}
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center gap-1">
        Expiry Date <FormMessage />
      </FormLabel>
      <FormControl>
        <Input
          type="date"
          {...field}
          className="bg-white"
        />
      </FormControl>
    </FormItem>
  )}
/>

      <Button
        type="button"
        onClick={removeSupplyItem}
        className="bg-red-500 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default SupplyItemInput;