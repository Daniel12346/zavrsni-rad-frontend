import { useParams } from "@reach/router";
import { Book, LogInDocument, useUserQuery } from "graphql/types";
import React from "react"
import styled from "styled-components";
import { useMe } from "../hooks/me";
import ImageUploader from "../ImageUploader";
import Loader from "../Loader";
export default () => {
    //ionako ce me.id trebat za dijeljenje knjiga
    const { me } = useMe();
    const params = useParams();
    if (!params) return null;
    const id = params?.userId;
    const { data, loading, error } = useUserQuery({ variables: { id } })
    const user = data?.user;
    const isMe = me && me.id === user?.id;
    return (<></>)
}




