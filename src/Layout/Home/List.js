import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../../utils/api/index";

function List() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    async function loadData() {
      try {
        const output = await listDecks();
        setDecks(output);
      } catch (error) {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadData();
  }, []);

  const handleDelete = async ({ target }) => {
    const value = target.value;

    const result = window.confirm(
      `Delete this deck?\nYou will not be able to recover it.`
    );
    if (result) {
      async function deleteData() {
        try {
          await deleteDeck(value);
          const output = await listDecks();
          setDecks(output);
        } catch (error) {
          if (error.name === "AbortError") {
            // Ignore `AbortError`
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      deleteData();
    }
  };

  if (decks.length > 0) {
    return (
      <div>
        {decks.map((deck) => (
          <div className="card mb-2">
            <div className="container">
              <div className="row card-header border-bottom-0">
                <div className="col-10">
                  <h4>{deck.name}</h4>
                </div>
                <div className="col-2">
                  <p> {deck.cards.length} cards</p>
                </div>
              </div>
            </div>

            <div className="card-body">
              <p className="card-text">{deck.description}</p>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-4">
                    <Link
                      to={`decks/${deck.id}`}
                      className="btn btn-secondary mr-2"
                    >
                      <span className="oi oi-trash" />
                      View
                    </Link>
                    <Link
                      to={`decks/${deck.id}/study`}
                      className="btn btn-primary"
                    >
                      <span className="oi oi-book" />
                      Study
                    </Link>
                  </div>
                  <div className="col-1">
                    <button
                      className="btn btn-danger"
                      value={deck.id}
                      onClick={handleDelete}
                    >
                      <span className="oi oi-trash" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return "There are currently no decks to display.";
}
export default List;
