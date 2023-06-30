/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreatePlayer: OnCreatePlayerSubscription;
  onUpdatePlayer: OnUpdatePlayerSubscription;
  onDeletePlayer: OnDeletePlayerSubscription;
};

export type CreatePlayerInput = {
  id?: string | null;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
};

export type ModelPlayerConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  area?: ModelStringInput | null;
  ccNum?: ModelStringInput | null;
  nif?: ModelStringInput | null;
  and?: Array<ModelPlayerConditionInput | null> | null;
  or?: Array<ModelPlayerConditionInput | null> | null;
  not?: ModelPlayerConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Player = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
};

export type DeletePlayerInput = {
  id: string;
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  birthDate?: ModelStringInput | null;
  area?: ModelStringInput | null;
  ccNum?: ModelStringInput | null;
  nif?: ModelStringInput | null;
  and?: Array<ModelPlayerFilterInput | null> | null;
  or?: Array<ModelPlayerFilterInput | null> | null;
  not?: ModelPlayerFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection";
  items: Array<Player | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionPlayerFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  firstName?: ModelSubscriptionStringInput | null;
  lastName?: ModelSubscriptionStringInput | null;
  birthDate?: ModelSubscriptionStringInput | null;
  area?: ModelSubscriptionStringInput | null;
  ccNum?: ModelSubscriptionStringInput | null;
  nif?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPlayerFilterInput | null> | null;
  or?: Array<ModelSubscriptionPlayerFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreatePlayerMutation = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePlayerMutation = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePlayerMutation = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPlayerQuery = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPlayersQuery = {
  __typename: "ModelPlayerConnection";
  items: Array<{
    __typename: "Player";
    id: string;
    firstName: string;
    lastName?: string | null;
    birthDate?: string | null;
    area?: string | null;
    ccNum?: string | null;
    nif?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreatePlayerSubscription = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePlayerSubscription = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePlayerSubscription = {
  __typename: "Player";
  id: string;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  area?: string | null;
  ccNum?: string | null;
  nif?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePlayer(
    input: CreatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<CreatePlayerMutation> {
    const statement = `mutation CreatePlayer($input: CreatePlayerInput!, $condition: ModelPlayerConditionInput) {
        createPlayer(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlayerMutation>response.data.createPlayer;
  }
  async UpdatePlayer(
    input: UpdatePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<UpdatePlayerMutation> {
    const statement = `mutation UpdatePlayer($input: UpdatePlayerInput!, $condition: ModelPlayerConditionInput) {
        updatePlayer(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlayerMutation>response.data.updatePlayer;
  }
  async DeletePlayer(
    input: DeletePlayerInput,
    condition?: ModelPlayerConditionInput
  ): Promise<DeletePlayerMutation> {
    const statement = `mutation DeletePlayer($input: DeletePlayerInput!, $condition: ModelPlayerConditionInput) {
        deletePlayer(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlayerMutation>response.data.deletePlayer;
  }
  async GetPlayer(id: string): Promise<GetPlayerQuery> {
    const statement = `query GetPlayer($id: ID!) {
        getPlayer(id: $id) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlayerQuery>response.data.getPlayer;
  }
  async ListPlayers(
    filter?: ModelPlayerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlayersQuery> {
    const statement = `query ListPlayers($filter: ModelPlayerFilterInput, $limit: Int, $nextToken: String) {
        listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            birthDate
            area
            ccNum
            nif
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlayersQuery>response.data.listPlayers;
  }
  OnCreatePlayerListener(
    filter?: ModelSubscriptionPlayerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayer">>
  > {
    const statement = `subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
        onCreatePlayer(filter: $filter) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePlayer">>
    >;
  }

  OnUpdatePlayerListener(
    filter?: ModelSubscriptionPlayerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayer">>
  > {
    const statement = `subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
        onUpdatePlayer(filter: $filter) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePlayer">>
    >;
  }

  OnDeletePlayerListener(
    filter?: ModelSubscriptionPlayerFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayer">>
  > {
    const statement = `subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
        onDeletePlayer(filter: $filter) {
          __typename
          id
          firstName
          lastName
          birthDate
          area
          ccNum
          nif
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePlayer">>
    >;
  }
}
