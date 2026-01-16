import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import { dateFormat } from "../../lib/dateFormat";
import currencyFormat from "../../lib/currencyFomat";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-10-10T14:00:00Z",
          showPrice: 80000,
          occupiedSeats: {
            A1: "user_1",
            A2: "user_2",
            A3: "user_3",
          },
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="Danh sách" text2=" Phim" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Tên phim</th>
              <th className="p-2 font-medium">Giờ chiếu</th>
              <th className="p-2 font-medium">Tổng lượt đặt</th>
              <th className="p-2 font-medium">Doanh thu</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/20 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="p-2">
                  {dateFormat(show.showDateTime).toLocaleString()}
                </td>
                <td className="p-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="p-2">
                  {currencyFormat(Object.keys(show.occupiedSeats).length * show.showPrice)} {currency}
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

export default ListShows;
