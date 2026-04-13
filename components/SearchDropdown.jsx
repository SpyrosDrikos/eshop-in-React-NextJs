import { faBagShopping, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// ─── ICON MAPPING BY CATEGORY ──────────────────────────────────────────────────
const getCategoryIcon = (category) => {
  const iconMap = {
    women: "👗",
    men: "👔", 
    accessories: "👜"
  };
  return iconMap[category] || "🔍";
};

// ─── SEARCH ITEM COMPONENT ─────────────────────────────────────────────────────
function SearchItem({ item, onSelect }) {
  return (
    <div className="searchItem" onClick={() => onSelect(item.name)}>
      <span className="searchItemIcon">{getCategoryIcon(item.category)}</span>
      <span className="searchItemName">{item.name}</span>
      <img src={item.image} alt={item.name} className="searchItemImage" />
    </div>
  );
}

// ─── SEARCH DROPDOWN COMPONENT ─────────────────────────────────────────────────
export default function SearchDropdown({ open, onClose, hotSearches, recommendedSearches, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    if (query.trim()) {
      setSearchQuery("");
      onSearch(query);
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  return (
    <>
      {open && <div className="sidebarOverlay open" onClick={onClose} />}
      <div className="searchWrap">
        <div className={`searchDrop${open ? " open" : ""}`}>
          {/* Search Input Section */}
          <div className="searchDropTop">
            <p>What are you looking for</p>
            <button className="searchDropClose" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          {/* Hot Searches Section */}
          {hotSearches && hotSearches.length > 0 && (
            <div className="searchSection">
              <h3 className="searchSectionTitle">🔥 HOT SEARCHES</h3>
              <div className="searchItemsList">
                {hotSearches.map(item => (
                  <SearchItem
                    key={item.id}
                    item={item}
                    onSelect={handleSearch}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recommended Searches Section */}
          {recommendedSearches && recommendedSearches.length > 0 && (
            <div className="searchSection">
              <h3 className="searchSectionTitle">⭐ RECOMMENDED FOR YOU</h3>
              {/* This section will be filtered based on user profile and recent activity */}
              <div className="searchItemsList">
                {recommendedSearches.map(item => (
                  <SearchItem
                    key={item.id}
                    item={item}
                    onSelect={handleSearch}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Footer Links */}
          <div className="searchDropFooter">
            <a href="#">View all searches</a>
            <a href="#">Search history</a>
          </div>
        </div>
      </div>
    </>
  );
}
