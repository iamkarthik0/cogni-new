"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});
const FooterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    form.reset(); // Clear the form fields after submission
  }

  return (
    <div className="space-y-4    ">
      <h3 className="text-lg font-semibold text-white">Subscribe</h3>
      <div className=" flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full  space-y-4   "
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div>
                  <FormItem className=" ">
                    <FormLabel className=" text-white">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="text-black rounded-full w-[300px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
                
              {" "}
              <Button type="submit" className="btn ">
                Subscribe
              </Button>
       
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FooterForm;
