import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  const [requestCode, setRequestCode] = useState(Math.random());
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [pricePerPerson, setPricePerPerson] = useState(1.0);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const result = pricePerPerson * numberOfParticipants * numberOfDays;
    setResult(result);
  }, [numberOfDays, numberOfParticipants, pricePerPerson]);

  return (
    <div className={styles.container}>
      <div>
        <h1>BOOKING OFFER FOR</h1>
        <div>
          <form>
            <input
              type="text"
              id="requestCode"
              value={requestCode}
              placeholder="Request Code"
            />
            <input
              type="text"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              placeholder="Departure Date"
            />
            <input
              id="numberOfDays"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              type="number"
              placeholder="Number of Days"
            />
            <input
              type="number"
              id="numberOfParticipants"
              value={numberOfParticipants}
              onChange={(e) => setNumberOfParticipants(e.target.value)}
              placeholder="Number of Participants"
            />
            <input
              type="number"
              id="pricePerPerson"
              placeholder="Price per Person"
              value={pricePerPerson}
              onChange={(e) => setPricePerPerson(e.target.value)}
            />
            <div>
              <div>
                Total: <span>$: {result}</span>
              </div>
              <h1>Message</h1>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message..."
              />
            </div>
            <button>Send Offer</button>
            <button>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
