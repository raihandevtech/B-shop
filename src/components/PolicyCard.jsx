function PolicyCard({ item }) {
  return (
    <div className="policy_card">
      <div className="policy_card_icon">
        <i className={`icon ${item.icon}`}></i>
      </div>
      <div className="policy_card_info">
        <h2 className="policy_card_info_name">{item.name}</h2>
        <div className="policy_card_info_description">{item.description}</div>
      </div>
    </div>
  );
}

export default PolicyCard;
