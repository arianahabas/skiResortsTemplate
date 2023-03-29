const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = require('graphql');

// Resort Type
const ResortType = new GraphQLObjectType({
  name: 'Resort',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    elevation: { type: GraphQLInt },
    length: { type: GraphQLFloat },
    lifts: { type: GraphQLInt },
    ticket_price: { type: GraphQLFloat },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // query all resorts
    resorts: {
      type: new GraphQLList(ResortType),
      resolve(parent, args) {
        return axios
          .get('http://localhost:8000/resorts/')

          .then((res) => res.data);
      },
    },
    // query single resort by id
    resort: {
      type: ResortType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        // return axios
        //   .get(
        //     `https://h827oh1ty1.execute-api.us-east-1.amazonaws.com/Prod/resorts/`
        //   )
        //   .then((res) => res.data.filter((resort) => resort.id === args.id)[0])
        //   .catch((err) => console.log(err));
        return axios
          .get('http://localhost:8000/resorts/' + args.id)
          .then((res) => res.data);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addResort: {
      type: ResortType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        elevation: { type: new GraphQLNonNull(GraphQLInt) },
        length: { type: new GraphQLNonNull(GraphQLFloat) },
        lifts: { type: new GraphQLNonNull(GraphQLInt) },
        ticket_price: { type: new GraphQLNonNull(GraphQLFloat) },
      },
      resolve(parent, args) {
        return axios
          .post('http://localhost:8000/resorts/', {
            name: args.name,
            elevation: args.elevation,
            length: args.length,
            lifts: args.lifts,
            ticket_price: args.ticket_price,
          })
          .then((res) => res.data);
      },
    },
    deleteResort: {
      type: ResortType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve(parent, args) {
        return axios
          .delete('http://localhost:8000/resorts/' + args.id)
          .then((res) => res.data);
      },
    },
    editResort: {
      type: ResortType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        elevation: { type: GraphQLInt },
        length: { type: GraphQLFloat },
        lifts: { type: GraphQLInt },
        ticket_price: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        return axios
          .patch('http://localhost:8000/resorts/' + args.id, args)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
