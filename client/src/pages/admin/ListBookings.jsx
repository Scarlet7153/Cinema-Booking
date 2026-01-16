import React, { useState, useEffect } from "react";
import { dummyBookingData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import { dateFormat } from "../../lib/dateFormat";
import Loading from "../../components/Loading";
import currencyFormat from "../../lib/currencyFomat";

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return !isLoading ? (
    <>
      <Title text1="Danh sách" text2=" Đặt vé" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Tên khách hàng</th>
              <th className="p-2 font-medium">Tên phim</th>
              <th className="p-2 font-medium">Giờ chiếu</th>
              <th className="p-2 font-medium">Ghế</th>
              <th className="p-2 font-medium">Tổng tiền</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-b border-primary/20 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{item.user.name}</td>
                <td className="p-2">{item.show.movie.title}</td>
                <td className="p-2">
                  {dateFormat(item.show.showDateTime).toLocaleString()}
                </td>
                <td className="p-2">
                  {Object.keys(item.bookedSeats)
                    .map((seat) => item.bookedSeats[seat])
                    .join(", ")}
                </td>
                <td className="p-2">
                  {currencyFormat(item.amount)} {currency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListBookings;
