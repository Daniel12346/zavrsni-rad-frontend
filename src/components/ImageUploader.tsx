import React, { useState } from "react"
import { ME_QUERY } from "graphql/queries";
import { useUploadImageMutation } from "graphql/types";
import StyledFileInput from "./StyledFileInput";


export default ({ purpose }: Props) => {
    const [uploadImage, { error, loading }] = useUploadImageMutation({ refetchQueries: [{ query: ME_QUERY }] });
    const [isValid, setIsvalid] = useState(true);
    return (
        <div>
            <StyledFileInput type="file" onChange={({ target: { validity, files: [file] } }: any) => {
                if (validity.valid) {
                    uploadImage({ variables: { file, purpose } });
                }
                setIsvalid(validity.valid);
            }}></StyledFileInput>
            {loading && <span>uploading...</span>}
            {(error || !isValid) && <span>Image upload failed</span>}
        </div>)

}

interface Props {
    purpose: "profile" | "background";

}