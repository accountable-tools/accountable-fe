import { useState } from "react";
import { COLORS } from "@/react-components/theme/colors";

const entities = [
  { id: "1", name: "Accountable Incorporated" },
  { id: "2", name: "Another Business LLC" },
  { id: "3", name: "Yet Another Corp" },
];

export default function EntityNavigator() {
  const [selectedEntity, setSelectedEntity] = useState(entities[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectEntity = (entity: { id: string; name: string }) => {
    setSelectedEntity(entity);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Selected Entity (Dropdown Trigger) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-white bg-opacity-20 hover:bg-opacity-30 rounded-md"
        aria-expanded={isOpen}
      >
        <div
          className="truncate"
          style={{ maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
        >
          {selectedEntity.name}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div
          className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg z-50"
          style={{ minWidth: "200px" }}
        >
          <ul className="py-1 text-gray-900">
            {entities.map((entity) => (
              <li key={entity.id}>
                <button
                  onClick={() => handleSelectEntity(entity)}
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  {entity.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => alert("TODO: Open entity creation modal")}
                className="block w-full px-4 py-2 text-left text-blue-600 hover:bg-gray-100"
              >
                + Add New Entity
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
