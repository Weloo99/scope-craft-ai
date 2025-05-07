
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const techStacks = [
  "React + Node.js",
  "Laravel + Vue",
  "Django + React",
  "MERN (MongoDB, Express, React, Node)",
  "MEAN (MongoDB, Express, Angular, Node)",
  "Ruby on Rails",
  "Flutter + Firebase",
  "React Native + Node.js",
  "WordPress",
  "Other/Custom"
];

const formSchema = z.object({
  clientName: z.string().min(1, "Client name is required"),
  clientDescription: z.string().min(10, "Please provide more details about the project"),
  references: z.string().optional(),
  sellingPoint: z.string().min(5, "Main selling point is required"),
  projectGoal: z.string().min(5, "Project goal is required"),
  preferredStack: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;

interface ClientInputFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const ClientInputForm: React.FC<ClientInputFormProps> = ({ onSubmit, isLoading }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientName: "",
      clientDescription: "",
      references: "",
      sellingPoint: "",
      projectGoal: "",
      preferredStack: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="clientName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Name</FormLabel>
                <FormControl>
                  <Input placeholder="ABC Marketing Agency" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clientDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Description (Raw Project Request)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the client's email, message, or description here..."
                    className="min-h-32 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="references"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference Websites</FormLabel>
                <FormControl>
                  <Input
                    placeholder="airbnb.com, rover.com, pawshake.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs text-gray-500">
                  Enter websites or businesses that the client wants to emulate, separated by commas
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sellingPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Main Selling Point</FormLabel>
                <FormControl>
                  <Input
                    placeholder="We are the first pet boarding aggregator in our country"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectGoal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Goal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enable users to find and book nearby pet sitters easily"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredStack"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Tech Stack (Optional)</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tech stack" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {techStacks.map((stack) => (
                      <SelectItem key={stack} value={stack}>
                        {stack}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-briefforge-600 hover:bg-briefforge-700"
          disabled={isLoading}
        >
          {isLoading ? "Analyzing..." : "Generate Technical Scope"}
        </Button>
      </form>
    </Form>
  );
};

export default ClientInputForm;
