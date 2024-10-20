import React, { useState } from "react";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface Props {
  tabs: TabItem[];
  updateTab: (tab: TabItem) => void;
}

const Tabs: React.FC<Props> = ({ tabs, updateTab }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (event: any, tabIndex: number) => {
    event.stopPropagation();
    setActiveTab(tabIndex);
    updateTab(tabs[tabIndex]);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex border-b border-gray-300 overflow-x-scroll">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`py-2 px-4 font-semibold text-sm focus:outline-none ${
              activeTab === idx
                ? "border-b-2 border-white text-white"
                : "text-gray-600"
            }`}
            onClick={(e) => handleTabChange(e, idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="py-2 overflow-y-scroll"
        style={{ minHeight: "370px", maxHeight: "370px" }}
      >
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
