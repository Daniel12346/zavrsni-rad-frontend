import { useMe } from "components/hooks/me"
import { User } from "graphql/types"
import React from "react"

interface Props {
    user: User
}
export default ({ user }: Props) => {
    console.log(user);
    const { me } = useMe();
    if (!me || !user) return null;
    const amFollowingUser = me.following?.find(person => person?.id === user.id);
    const userIsFollowingMe = me.followers?.find(person => person?.id === user.id)
    return <div>
        <button></button>
        {userIsFollowingMe && <span>{user.firstName} is following you</span>}
        {amFollowingUser ? <button>stop following</button> : <button>follow</button>}
    </div>
}