import React, { useState, useEffect } from "react";
import TableHeader from "../components/TableHeader";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getMovieList, searchMovie } from "../../global/api";
import Button from "../components/Button";
// import axios from "axios";

export default function MeasurementsTable() {
  const [dataMeasurements, setDataMeasurements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dataMeasurements.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataMeasurements.length / recordsPerPage);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getMovieList().then((result) => {
      setDataMeasurements(result);
    });
  }, []);

  // const search = async (q) => {
  //   if (q.length > 2) {
  //     const query = await searchMovie(q);
  //     setDataMeasurements(query.results);
  //   }
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.6.62:8082/measurements")
  //     .then((res) => {
  //       console.log(res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="pagination flex gap-2 justify-end text-sm mb-3">
        <Button icons={<IoIosArrowBack />} onClick={prevPage} />
        <Button icons={<IoIosArrowForward />} onClick={nextPage} />
      </div>
      <table>
        <TableHeader />
        {records.map((data, i) => {
          return (
            <tbody className="table-body border-2 border-secondary border-t-0 " key={i}>
              <tr>
                <td>{data.title}</td>
              </tr>
              <tr>
                <td>{data.release_date}</td>
              </tr>
              <tr>
                <td>{data.overview}</td>
              </tr>
              <tr>
                <td>
                  <Link className="text-blue-400 text-sm hover:text-blue-600 " to="/detail">
                    Detail
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
