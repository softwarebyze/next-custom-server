"use client";
import { useEffect, useState } from "react";

export default function B() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  return <div>Current time: {time}</div>;
}
