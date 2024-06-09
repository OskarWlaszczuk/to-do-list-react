import "./style.css";

const HeaderContent = ({ children }) => (
    <div className="headerContent">
        <header className="headerContent__header">Lista Zadań</header>
        {children}
    </div>
);

export default HeaderContent;