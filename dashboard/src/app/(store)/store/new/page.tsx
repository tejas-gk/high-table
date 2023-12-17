"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    storename: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export default function Page() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            storename: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await fetch("/api/store", {
            method: "POST",
            body: JSON.stringify(values),
        })
        console.log(values)
    }
  return (
    <div>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                      control={form.control}
                      name="storename"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Storename</FormLabel>
                              <FormControl>
                                  <Input placeholder="store" {...field} />
                              </FormControl>
                              <FormDescription>
                                  This is your public display store name.
                              </FormDescription>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <Button type="submit">Submit</Button>
              </form>
          </Form>
    </div>
  )
}
