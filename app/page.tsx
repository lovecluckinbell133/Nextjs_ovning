'use client'
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  async function getData() {
    const res = await fetch('/api/test');
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div >
      <h1>Test för att hämta data via en API-route</h1>

      {data ? (
        <div className="div-box">
          <pre className = "data-text">{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}