const models = {};

export default function addModelsToContext(context) {
  const newContext = Object.assign({}, context);
  Object.keys(models).forEach((key) => {
    newContext[key] = new models[key](newContext);
  });
  return newContext;
}

import Task from './Task';
models.Task = Task;

import User from './User';
models.User = User;
