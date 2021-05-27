import * as React from "react";

import "./styles/SectionHeader.scss";

interface ISectionHeaderProps {
  title: string;
}

const SectionHeader: React.FunctionComponent<ISectionHeaderProps> = ({ title }) => {
  return (
    <div className="section-header">
      <header className="section-header__header">{title}</header>
      <span className="section-header__divider"></span>
    </div>
  );
};

export default SectionHeader;
