/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserCreateInput: { // input type
    email: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutAuthorInput'] | null; // PostCreateManyWithoutAuthorInput
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Mutation: {};
  Post: prisma.Post;
  Query: {};
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostCreateManyWithoutAuthorInput: NexusGenInputs['PostCreateManyWithoutAuthorInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    deleteOnePost: NexusGenRootTypes['Post'] | null; // Post
    publish: NexusGenRootTypes['Post'] | null; // Post
    signupUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    authorId: number | null; // Int
    content: string | null; // String
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Post'][]; // [Post!]!
    filterPosts: NexusGenRootTypes['Post'][]; // [Post!]!
    post: NexusGenRootTypes['Post'] | null; // Post
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      authorEmail?: string | null; // String
      content?: string | null; // String
      title: string; // String!
    }
    deleteOnePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    publish: { // args
      id?: number | null; // Int
    }
    signupUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    filterPosts: { // args
      searchString?: string | null; // String
    }
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Post" | "Query" | "User";

export type NexusGenInputNames = "PostCreateManyWithoutAuthorInput" | "PostCreateWithoutAuthorInput" | "PostWhereUniqueInput" | "UserCreateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}