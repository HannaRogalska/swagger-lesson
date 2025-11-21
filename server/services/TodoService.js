/* eslint-disable no-unused-vars */
import Service from "./Service.js";
import { Todo } from "../models/Todo.js";

/**
 * Return all todos
 *
 * returns List
 * */
const todosGET = async () => {
  try {
    const todos = await Todo.find();
    return Service.successResponse(todos);
  } catch (error) {
    return Service.rejectResponse(
      error.message || "Failed to fetch todos",
      error.status || 500
    );
  }
};
/**
 * Return one todo
 *
 * id String id to fetch
 * returns Todo
 * */
const todosIdGET = async (args) => {
  const id = args.id;

  try {
    const oneTodo = await Todo.findById(id);

    if (!oneTodo) {
      return Service.rejectResponse("Todo not founded", 400);
    }
    return Service.successResponse(oneTodo);
  } catch (error) {
    return Service.rejectResponse(
      error.message || "Failed to fetch todo",
      error.status || 500
    );
  }
};
/**
 * Create new todo
 *
 * todosPostRequest TodosPostRequest
 * no response value expected for this operation
 * */
const todosPOST = async (todosPostRequest) => {
  const body = todosPostRequest.body;

  if (!body || !body.text) {
    return Service.rejectResponse("Missing 'text' in request", 400);
  }

  try {
    const newTodo = await Todo.create({
      text: body.text,
      done: body.done || false,
    });

    return Service.successResponse(newTodo);
  } catch (error) {
    return Service.rejectResponse(
      error.message || "Invalid input",
      error.status || 500
    );
  }
};
export default {
  todosGET,
  todosIdGET,
  todosPOST,
};
