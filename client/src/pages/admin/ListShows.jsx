import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";

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
    } catch (error) {
      console.error(error);
    }
    useEffect(() => {
      getAllShows();
    }, []);

    return !loading ? (
      <>
        <Title text1="Danh sách" text2=" buổi chiếu" />
        <div></div>
      </>
    ) : (
      <Loading />
    );
  };
};

export default ListShows;
