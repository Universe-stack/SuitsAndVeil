import { Outlet } from "react-router-dom";
import Layout from "@/Components/Layout/Layout";

type Props = {}

const SharedLayout=(props:Props)=>{

    return(
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default SharedLayout;