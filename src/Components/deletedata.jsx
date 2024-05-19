import React from "react";

const DeleteData = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <i
      className="bi bi-trash"
      style={{ fontSize: "25px" }}
      onClick={handleDelete}
    ></i>
  );
};

export default DeleteData;
