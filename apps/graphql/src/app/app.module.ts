import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { serializeQueryPlan } from '@apollo/query-planner';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {},
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://localhost:3000/graphql' },
            { name: 'packages', url: 'http://localhost:3001/graphql' },
            { name: 'userPackages', url: 'http://localhost:3002/graphql' },
            { name: 'search', url: 'http://localhost:3003/graphql' },
          ],
        }),
        experimental_didResolveQueryPlan: (options) => {
          if (options.requestContext.operationName !== 'IntrospectionQuery') {
            console.log(serializeQueryPlan(options.queryPlan));
          }
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
