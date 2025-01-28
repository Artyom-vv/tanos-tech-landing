import {tet} from "@virtuslab/tetrisly-react";

export default function Home() {
    return (
        <tet.div className="h-full" display="flex" justifyContent="center" alignItems="center">
            <tet.h1
                text="$typo-body-large"
                color="$color-content-secondary"
            >
                Hello world!
            </tet.h1>
        </tet.div>
    )
}