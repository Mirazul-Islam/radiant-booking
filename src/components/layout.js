import { Children } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
    return (
        <div id="page-container">
                <Header />

                {props.children}

            <Footer id="footer"/>
        </div>
    );
}