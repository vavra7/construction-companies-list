import { ApolloServer } from 'apollo-server';
import { Service } from 'typedi';

import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';

@Service()
export class App {
  private apolloServer: ApolloServer;

  constructor() {
    this.apolloServer = new ApolloServer({ typeDefs, resolvers });
  }

  public async run(): Promise<void> {
    const serverInfo = await this.apolloServer.listen();
    console.log(`Server ready at ${serverInfo.url}`);
  }
}
