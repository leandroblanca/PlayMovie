import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./Reviews.css";

const STORAGE_KEY = (id) => `reviews_${id}`;

const reviewsIniciales = [
  { id: 1, user: "Juan", rating: 5, text: "Una obra maestra absoluta." },
  { id: 2, user: "María", rating: 4, text: "Visualmente increíble." },
  { id: 3, user: "Esteban", rating: 5, text: "Lo mejor que vi en años." },
];

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(() => {
    const guardadas = localStorage.getItem(STORAGE_KEY(movieId));
    if (guardadas) return JSON.parse(guardadas);
    localStorage.setItem(STORAGE_KEY(movieId), JSON.stringify(reviewsIniciales));
    return reviewsIniciales;
  });
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const guardadas = localStorage.getItem(STORAGE_KEY(movieId));
    if (guardadas) {
      setReviews(JSON.parse(guardadas));
    } else {
      localStorage.setItem(STORAGE_KEY(movieId), JSON.stringify(reviewsIniciales));
      setReviews(reviewsIniciales);
    }
    setEditingId(null);
    setNewReview({ rating: 0, text: "" });
  }, [movieId]);

  const guardar = (updated) => {
    setReviews(updated);
    localStorage.setItem(STORAGE_KEY(movieId), JSON.stringify(updated));
  };

  const handleCreate = () => {
    if (reviews.some(r => r.user === "Yo")) {
      alert("Ya has escrito una reseña para esta película.");
      return;
    }
    guardar([...reviews, { id: Date.now(), user: "Yo", ...newReview }]);
    setNewReview({ rating: 0, text: "" });
  };

  const handleEdit = (id) => {
    guardar(reviews.map(r => r.id === id ? { ...r, ...newReview } : r));
    setEditingId(null);
    setNewReview({ rating: 0, text: "" });
  };

  const handleDelete = (id) => guardar(reviews.filter(r => r.id !== id));

  return (
    <div className="reviews-section">
      <h2>Reseñas de Usuarios</h2>
      <div className="review-form">
        <label>Tu Calificación:</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map(star => (
            <FaStar
              key={star}
              size={24}
              color={star <= newReview.rating ? "#ffc107" : "#e4e5e9"}
              onClick={() => setNewReview({ ...newReview, rating: star })}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <textarea
          placeholder="Comparte tu opinión..."
          value={newReview.text}
          onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
        />
        {editingId ? (
          <button className="btn-guardar" onClick={() => handleEdit(editingId)}>Guardar cambios</button>
        ) : (
          <button onClick={handleCreate}>Publicar Reseña</button>
        )}
      </div>

      <ul className="reviews-list">
        {reviews.map(r => (
          <li key={r.id}>
            <strong>{r.user}</strong>
            <div className="stars">
              {[1, 2, 3, 4, 5].map(star => (
                <FaStar key={star} size={20} color={star <= r.rating ? "#ffc107" : "#e4e5e9"} />
              ))}
            </div>
            <p>{r.text}</p>
            {r.user === "Yo" && (
              <div className="review-actions">
                <button onClick={() => { setEditingId(r.id); setNewReview({ rating: r.rating, text: r.text }); }}>Editar</button>
                <button onClick={() => handleDelete(r.id)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
