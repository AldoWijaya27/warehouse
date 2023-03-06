import React from "react";

export default function TableHeader() {
  return (
    <thead>
      <tr className="w-2/5">
        <th aria-label="id">ID</th>
      </tr>
      <tr>
        <th>Products</th>
      </tr>
      <tr>
        <th>Location</th>
      </tr>
      <tr className="w-2/5">
        <th>Stock</th>
      </tr>
      <tr>
        <th>Date</th>
      </tr>
      <tr>
        <th>Action</th>
      </tr>
    </thead>
  );
}
