import { useMe } from "components/hooks/me"
import { StyledButton } from "components/StyledButton"
import { ME_QUERY } from "graphql/queries"
import { useFollowUserMutation, useStopFollowingUserMutation, User } from "graphql/types"
import React from "react"

interface Props {
    user: Pick<User, "id" | "firstName">
}
export default ({ user }: Props) => {
    console.log(user);
    const { me } = useMe();
    if (!me || !user) return null;
    const amFollowingUser = me.following?.find(followed=> followed?.id === user.id);
    const userIsFollowingMe:boolean = !!me.followers?.find(follower => follower?.id === user.id)
    const [followUser] = useFollowUserMutation({ refetchQueries: [{ query: ME_QUERY }]});
    const [stopFollowingUser, {error}] = useStopFollowingUserMutation({ refetchQueries: [{ query: ME_QUERY }]});

return user.id !== me.id ? <div>
    {console.log(error)};
        {userIsFollowingMe && <span>{user.firstName} is following you</span>}
        {amFollowingUser ? <StyledButton onClick={()=>{stopFollowingUser({variables:{id:user?.id}})}}>stop following</StyledButton> :  
            <StyledButton onClick={()=>{followUser({variables:{id:user?.id}})}}>follow</StyledButton>}
    </div>: null
}

