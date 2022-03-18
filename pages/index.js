import React, { useState, useEffect, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  const [requestCode, setRequestCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [pricePerPerson, setPricePerPerson] = useState(1.0);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useMemo(() => {
    const code = "A" + getRandomInt(2000);
    setRequestCode(code);
  }, []);

  useEffect(() => {
    const result = pricePerPerson * numberOfParticipants * numberOfDays;
    setResult(result);
  }, [numberOfDays, numberOfParticipants, pricePerPerson]);

  return (
    <div className={styles.container}>
      <div>
        <h2>BOOKING OFFER FOR</h2>
        <div>
          <form>
            <label className={styles.label}>Request Code: </label>
            <span />
            {requestCode}
            <span />
            <label className={styles.label}>Departure Date: </label>
            <input
              type="date"
              id="departureDate"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              placeholder="Departure Date"
            />
            <label className={styles.label}>Number of Days: </label>
            <input
              id="numberOfDays"
              value={numberOfDays}
              onChange={(e) => setNumberOfDays(e.target.value)}
              type="number"
              placeholder="Number of Days"
            />
            <label className={styles.label}>Number of Participants: </label>
            <input
              type="number"
              id="numberOfParticipants"
              value={numberOfParticipants}
              onChange={(e) => setNumberOfParticipants(e.target.value)}
              placeholder="Number of Participants"
            />
            <label className={styles.label}>Price Per Person: </label>
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
              <h2>Message</h2>
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
