import { Outlet } from "react-router-dom";
import Layout from "@/Components/Layout/Layout";
import { SelectedPage } from "@/Shared/types";


const SharedLayout=()=>{

    return(
        <>
            <Layout isTopOfPage={false} selectedPage={SelectedPage.Home}>
                <Outlet/>
            </Layout>
        </>
    )
}

export default SharedLayout;