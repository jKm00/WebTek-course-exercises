export default function Details({ detail, index, deleteDetail }) {
  function handleDeletion() {
    deleteDetail(index);
  }

  return (
    <li className="list__item">
      {detail}{" "}
      <button className="delete" onClick={handleDeletion}>
        x
      </button>
    </li>
  );
}
