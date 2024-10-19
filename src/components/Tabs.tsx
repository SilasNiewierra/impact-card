import React, { useState } from "react";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface Props {
  tabs: TabItem[];
}

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex border-b border-gray-300 overflow-x-scroll">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`py-2 px-4 font-semibold focus:outline-none ${
              activeTab === idx
                ? "border-b-2 border-white text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-2">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
