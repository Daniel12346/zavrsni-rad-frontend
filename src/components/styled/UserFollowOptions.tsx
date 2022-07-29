import { useMe } from "components/hooks/me"
import { ME_QUERY } from "graphql/queries"
import { useFollowUserMutation, User } from "graphql/types"
import React from "react"

interface Props {
    user: User
}
export default ({ user }: Props) => {
    console.log(user);
    const { me } = useMe();
    if (!me || !user) return null;
    const amFollowingUser = me.following?.find(followed=> followed?.id === user.id);
    const userIsFollowingMe = me.followers?.find(follower => follower?.id === user.id)
    const [follow, {loading, error}] = useFollowUserMutation({ refetchQueries: [{ query: ME_QUERY }]});

return <div>
        <button></button>
        {userIsFollowingMe && <span>{user.firstName} is following you</span>}
        {amFollowingUser ? <button>stop following</button> : 
            <button onClick={()=>{follow({variables:{id:user?.id}})}}>follow</button>}
    </div>
}