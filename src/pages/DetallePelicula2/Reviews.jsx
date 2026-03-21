import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Reviews.css";
import "@fontsource/poppins";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([
    { id: 1, user: "Juan", rating: 5, text: "Una obra maestra absoluta." },
    { id: 2, user: "María", rating: 4, text: "Visualmente increíble." },
    { id: 3, user: "Esteban", rating: 5, text: "Lo mejor que vi en años." },
  ]);
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });
  const [editingId, setEditingId] = useState(null);

  const handleCreate = () => {
    if (reviews.some(r => r.user === "Yo")) {
      alert("Ya has escrito una reseña para esta película.");
      return;
    }
    const newId = reviews.length + 1;
    setReviews([...reviews, { id: newId, user: "Yo", ...newReview }]);
    setNewReview({ rating: 0, text: "" });
  };

  const handleEdit = (id) => {
    const updated = reviews.map(r =>
      r.id === id ? { ...r, ...newReview } : r
    );
    setReviews(updated);
    setEditingId(null);
    setNewReview({ rating: 0, text: "" });
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <div className="reviews-section">
      <h2>Reseñas de Usuarios</h2>

      {/* Formulario */}
      <div className="review-form">
        <label>Tu Calificación:</label>
        <div className="stars">
          {[1,2,3,4,5].map(star => (
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
          <button onClick={() => handleEdit(editingId)}>Guardar cambios</button>
        ) : (
          <button onClick={handleCreate}>Publicar Reseña</button>
        )}
      </div>

      {/* Lista de reseñas */}
      <ul className="reviews-list">
        {reviews.map(r => (
          <li key={r.id}>
            <strong>{r.user}</strong>
            <div className="stars">
              {[1,2,3,4,5].map(star => (
                <FaStar
                  key={star}
                  size={20}
                  color={star <= r.rating ? "#ffc107" : "#e4e5e9"}
                />
              ))}
            </div>
            <p>{r.text}</p>
            {r.user === "Yo" && (
              <div className="review-actions">
                <button onClick={() => { setEditingId(r.id); setNewReview({ rating: r.rating, text: r.text }); }}>
                  Editar
                </button>
                <button onClick={() => handleDelete(r.id)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}