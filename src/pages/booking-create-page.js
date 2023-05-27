import React from "react";
import Layout from "../components/layout";
import BookingForm from "../components/booking-form";
import BookingHistory from "../components/booking-history";

export default function BookingCreatePage() {
    return (
        <div>
            <Layout>
                <div style={{marginBottom:"27.7vh"}}>
                    <BookingForm/>
                </div>
            </Layout>
        </div>
    );
}