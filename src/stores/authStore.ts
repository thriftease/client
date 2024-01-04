import { AuthSignInMutationPayload } from "@/types/graphql";
import { ApolloError } from "@apollo/client/core";
import { useApolloClient } from '@vue/apollo-composable';
import { gql } from "graphql-tag";
import { defineStore } from "pinia";

const useAuthStore = defineStore("authStore", () => {
    const { client } = useApolloClient();

    async function signIn(email: string, password: string) {
        try {
            const result = await client.mutate<{ authSignIn: AuthSignInMutationPayload; }>({
                mutation: gql`
                    mutation AuthSignIn($email: String!, $password: String!) {
                        authSignIn(email: $email, password: $password) {
                            token, user {
                                id, email, fullName
                            }
                        }
                    },
                `,
                variables: { email, password }
            });
            return result.data?.authSignIn;
        } catch (err: any) {
            if (err instanceof ApolloError)
                return err;
        }
    }

    return {
        signIn
    };
});

export default useAuthStore;