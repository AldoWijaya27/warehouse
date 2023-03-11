import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import TableHeader from "./TableHeader";

export default function InboundTable({ dataInbound }) {
  return (
    <table>
      <TableHeader />
      {dataInbound.map((data, i) => {
        return (
          <tbody className="table-body border-2 border-secondary border-t-0" key={i}>
            <tr className="w-2/5">
              <td aria-label="id">{data.id}</td>
            </tr>
            <tr>
              <td>{data.products}</td>
            </tr>
            <tr>
              <td>{data.location}</td>
            </tr>
            <tr className="w-2/5">
              <td>{data.stock}</td>
            </tr>
            <tr>
              <td>{data.date}</td>
            </tr>
            <tr aria-label="action-btn">
              <td>
                <Link to="">Detail</Link>
              </td>
              <td>
                <Link to="/outbound" aria-label="outbound-btn">
                  Outbound <HiOutlineArrowUpOnSquare size={20} />
                </Link>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
