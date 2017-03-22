const resolvers = {
  Task: {
    id(task) {
      return task._id;
    },

    owner(task, args, { Task }) {
      return Task.owner(task);
    },
  },
  Query: {
    tasks(root, { lastCreatedAt, limit }, { Task }) {
      return Task.all({ lastCreatedAt, limit });
    },

    task(root, { id }, { Task }) {
      return Task.findOneById(id);
    },
  },
  Mutation: {
    async createTask(root, { input }, { Task }) {
      const id = await Task.insert(input);
      return Task.findOneById(id);
    },

    async updateTask(root, { id, input }, { Task }) {
      await Task.updateById(id, input);
      return Task.findOneById(id);
    },

    removeTask(root, { id }, { Task }) {
      return Task.removeById(id);
    },
  },
  Subscription: {
    taskCreated: task => task,
    taskUpdated: task => task,
    taskRemoved: id => id,
  },
};

export default resolvers;
