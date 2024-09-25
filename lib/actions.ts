'use server';
import Todo from "@/models/todoModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";

export const createTodos = async (formData: FormData) => {
    await connectToMongoDB();
    // Extracting todo content and time from formData
    const todo = formData.get("todo");
    const todoDeadline = formData.get("todoDeadline");//req.body.todoDeadline);
    try {
        if (typeof todoDeadline === 'string') {
            const date = new Date(todoDeadline); // Safe to pass since it's a string
            // Convert date string to ISO date string format (if needed)
            const todoData = {
                todo,
                todoDeadline: date.toISOString(), // Ensure it's a valid date
            };

            // Creating a new todo using Todo model
            const newTodo = await Todo.create(todoData);
            // Saving the new todo
            newTodo.save();
                
            // Triggering revalidation of the specified path ("/")
            revalidatePath("/");
            // Returning the string representation of the new todo
            return newTodo.toString();
        } else {
            return {message: 'DeadLine is invalid date format'};    
        }
    } catch (error) {
        console.log(error);
        return {message: 'error creating todo'};
    }
};

export const deleteTodo = async (id: FormData): Promise<void> => {
    // Extracting todo ID from formData
    const todoId = id.get("id");
    try {
        // Deleting the todo with the specified ID
        await Todo.deleteOne({_id: todoId});
        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");
 
    } catch (error) {
        console.log(error);
    }
}