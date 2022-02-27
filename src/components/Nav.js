function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact"];
  return (
    <div className="tabs">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
            >
              {tab}
            </a>

        ))}
      </ul>
    </div>
  );
}

export default Navigation;