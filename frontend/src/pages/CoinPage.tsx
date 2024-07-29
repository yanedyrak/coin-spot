import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useParams } from "react-router-dom";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
}

export const CoinPage = () => {
  const [data, setData] = useState<CoinData | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [id]);

  return (
    <div className="min-h-dvh bg-lightgreen flex justify-center items-center">
      {data ? (
        <div>
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <p className="text-xl">{data.symbol}</p>
        </div>
      ) : (
        <OrbitProgress variant="disc" color="#32cd32" size="large" />
      )}
    </div>
  );
};
