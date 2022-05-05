import React, { useState } from "react"
import { ME_QUERY } from "graphql/queries";
import { useUploadImageMutation } from "graphql/types";

//TODO: styling 
export default ({ purpose }: Props) => {
    const [uploadImage, { error, loading }] = useUploadImageMutation({ refetchQueries: [{ query: ME_QUERY }] });
    const [isValid, setIsvalid] = useState(true);
    return (
        <div>
            <input type="file" onChange={({ target: { validity, files: [file] } }: any) => {
                if (validity.valid) {
                    uploadImage({ variables: { file, purpose } });
                }
                setIsvalid(validity.valid);
            }}></input>
            {loading && <span>uploading...</span>}
            {(error || !isValid) && <span>Image upload failed</span>}
        </div>)

}

interface Props {
    purpose: "profile" | "background"
}