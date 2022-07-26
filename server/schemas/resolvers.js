const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
  addUser: async (parent, { name, email, password }) => {
    const user = await User.create({ name, email, password });
    const token = signToken(user);

    return { token, user };
  },
  saveBook: async (
    parent,
    { authors, description, title, bookId, image, link },
    context
  ) => {
    if (context.user) {
      return User.findOneAndUpdate(
        { _id: user._id },
        {
          $addToSet: {
            savedBooks: { authors, description, title, bookId, image, link },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    throw new AuthenticationError("You need to be logged in!");
  },
};

module.exports = resolvers;
