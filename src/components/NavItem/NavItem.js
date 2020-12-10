import cx from "classnames";

const NavItem = ({
  label,
  pageId,
  badgeLabel = "",
  active = false,
  onClick,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li className={cx("nav-item", { active })}>
      <a className="nav-link" href={`#${pageId}`} onClick={handleClick}>
        {label}
        {badgeLabel && (
          <span className="ml-1 badge badge-pill badge-primary">
            {badgeLabel}
          </span>
        )}
        {active && <span className="sr-only">(current)</span>}
      </a>
    </li>
  );
};

export default NavItem;
