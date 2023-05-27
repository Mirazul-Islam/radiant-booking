import React from "react";

const BookingHistory = () => {
    return (
        <div className="container">
            <h1 className="pb-3 pt-3">Booking History</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Packages</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Address</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark Otto</td>
                        <td>mark.otto@axis.ca</td>
                        <td>Deep Cleaning</td>
                        <td>05/27/2023</td>
                        <td>5:00 AM</td>
                        <td>1333 South Park st, apt#267, Halifax, Nova Scotia</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob Thornton</td>
                        <td>jacob.thronton@riverview.ca</td>
                        <td>Eco-friendly Cleaning</td>
                        <td>05/30/2023</td>
                        <td>7:00 PM</td>
                        <td>10 Evanson Rd, Winnipeg, Manitoba</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Michael Brown</td>
                        <td>michael.brown@flex.ca</td>
                        <td>Carpet Vacuuming</td>
                        <td>05/29/2023</td>
                        <td>2:00 PM</td>
                        <td>789 Oak St, Montreal, Quebec</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Sarah Wilson</td>
                        <td>sarah.wilson@jordan.ca</td>
                        <td>Spring Cleaning</td>
                        <td>05/30/2023</td>
                        <td>4:30 PM</td>
                        <td>101 Maple Ave, Halifax, Nova Scotia</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>David Thompson</td>
                        <td>david.thompson@bixby.com</td>
                        <td>Tile and Grout Cleaning</td>
                        <td>06/02/2023</td>
                        <td>10:00 AM</td>
                        <td>222 Pine St, Calgary, Alberta</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Emily Davis</td>
                        <td>emily.davis@cgi.com</td>
                        <td>Eco-friendly Cleaning</td>
                        <td>06/05/2023</td>
                        <td>3:30 PM</td>
                        <td>333 Oak Ave, Winnipeg, Manitoba</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>James Wilson</td>
                        <td>james.wilson@intel.com</td>
                        <td>Deep Cleaning</td>
                        <td>06/07/2023</td>
                        <td>6:00 AM</td>
                        <td>444 Cedar Rd, Saskatoon, Saskatchewan</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Sophia Garcia</td>
                        <td>sophia.garcia@baybel.com</td>
                        <td>Window Wiping</td>
                        <td>06/10/2023</td>
                        <td>8:30 AM</td>
                        <td>555 Birch St, Edmonton, Alberta</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>William Martinez</td>
                        <td>william.martinez@workday.com</td>
                        <td>Carpet Vacuuming</td>
                        <td>06/12/2023</td>
                        <td>1:00 PM</td>
                        <td>666 Elm Ave, Ottawa, Ontario</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Ava Adams</td>
                        <td>ava.adams@holiday-inn.ca</td>
                        <td>Spring Cleaning</td>
                        <td>06/15/2023</td>
                        <td>5:30 PM</td>
                        <td>777 Pine Rd, Victoria, British Columbia</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>Emily Davis</td>
                        <td>emily.davis@breakfastclub.com</td>
                        <td>Eco-friendly Cleaning</td>
                        <td>06/18/2023</td>
                        <td>3:00 PM</td>
                        <td>222 Oak St, Ottawa, Ontario</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>James Wilson</td>
                        <td>james.wilson@dal.ca</td>
                        <td>Deep Cleaning</td>
                        <td>06/21/2023</td>
                        <td>7:30 AM</td>
                        <td>333 Maple Ave, Calgary, Alberta</td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>Sophia Garcia</td>
                        <td>sophia.garcia@google.com</td>
                        <td>Window Wiping</td>
                        <td>06/24/2023</td>
                        <td>10:30 AM</td>
                        <td>444 Elm St, Montreal, Quebec</td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>William Martinez</td>
                        <td>william.martinez@apple.com</td>
                        <td>Carpet Vacuuming</td>
                        <td>06/27/2023</td>
                        <td>1:30 PM</td>
                        <td>555 Oak Ave, Vancouver, British Columbia</td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td>Ava Adams</td>
                        <td>ava.adams@spotify.ca</td>
                        <td>Spring Cleaning</td>
                        <td>06/30/2023</td>
                        <td>4:30 PM</td>
                        <td>666 Pine Rd, Halifax, Nova Scotia</td>
                    </tr>
                    <tr>
                        <th scope="row">16</th>
                        <td>Oliver Thompson</td>
                        <td>oliver.thompson@smart-tutor.com</td>
                        <td>Tile and Grout Cleaning</td>
                        <td>07/03/2023</td>
                        <td>9:00 AM</td>
                        <td>777 Maple Ave, Winnipeg, Manitoba</td>
                    </tr>
                    <tr>
                        <th scope="row">17</th>
                        <td>Sophie Davis</td>
                        <td>sophie.davis@resume.ca</td>
                        <td>Eco-friendly Cleaning</td>
                        <td>07/06/2023</td>
                        <td>2:30 PM</td>
                        <td>888 Oak St, Saskatoon, Saskatchewan</td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td>Liam Wilson</td>
                        <td>liam.wilson@wire-transfer.org</td>
                        <td>Deep Cleaning</td>
                        <td>07/09/2023</td>
                        <td>6:30 AM</td>
                        <td>999 Elm Ave, Edmonton, Alberta</td>
                    </tr>
                    <tr>
                        <th scope="row">19</th>
                        <td>Charlotte Martinez</td>
                        <td>charlotte.martinez@canada-drives.ca</td>
                        <td>Window Wiping</td>
                        <td>07/12/2023</td>
                        <td>11:00 AM</td>
                        <td>111 Maple St, Ottawa, Ontario</td>
                    </tr>
                    <tr>
                        <th scope="row">20</th>
                        <td>Mason Garcia</td>
                        <td>mason.garcia@helvitia.com</td>
                        <td>Carpet Vacuuming</td>
                        <td>07/15/2023</td>
                        <td>3:30 PM</td>
                        <td>222 Oak Ave, Vancouver, British Columbia</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default BookingHistory;